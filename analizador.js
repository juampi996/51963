import antlr4 from 'antlr4';
import fs from 'fs';
import AnalizadorLexer from './AnalizadorLexer.js';
import AnalizadorParser from './AnalizadorParser.js';

// Leer el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new AnalizadorLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new AnalizadorParser(tokens);

// Variables para control de errores
let huboErrorLexico = false;
let huboErrorSintactico = false;

// Listener de errores léxicos
lexer.removeErrorListeners();
lexer.addErrorListener({
    syntaxError: function(recognizer, offendingSymbol, line, column, msg, err) {
        console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
        huboErrorLexico = true;
    }
});

// Listener de errores sintácticos
parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: function(recognizer, offendingSymbol, line, column, msg, err) {
        console.error(`Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
        huboErrorSintactico = true;
    }
});

// 1. Análisis léxico y sintáctico
parser.buildParseTrees = true;
const tree = parser.programa();

// 2. Tabla de lexemas-tokens
console.log('Tabla de tokens:');
tokens.fill();
tokens.tokens.forEach(token => {
    if (token.type !== -1) { // Ignora EOF
        const tokenName = AnalizadorParser.symbolicNames[token.type] || AnalizadorParser.literalNames[token.type];
        console.log(`Token: ${tokenName}, Lexema: '${token.text}', Línea: ${token.line}`);
    }
});

// 3. Árbol de análisis sintáctico
console.log('\nÁrbol sintáctico:');
console.log(tree.toStringTree(parser.ruleNames));

// Mensaje de éxito si no hubo errores
if (!huboErrorLexico && !huboErrorSintactico) {
    console.log('\nAnálisis léxico y sintáctico correcto. No se encontraron errores.');
}

// 4. Interpretación: Traducción a JavaScript
function asArray(x) {
    if (!x) return [];
    return Array.isArray(x) ? x : [x];
}

function interpretar(node) {
    if (!node) return '';
    
    // Obtener el nombre de la clase del nodo
    const nodeType = node.constructor.name;
    console.log(`Procesando nodo de tipo: ${nodeType}`);
    
    if (nodeType === 'ProgramaContext') {
        const instrucciones = node.instruccion();
        console.log(`Número de instrucciones: ${instrucciones.length}`);
        return instrucciones.map(inst => interpretar(inst)).join('\n');
    }
    if (nodeType === 'InstruccionContext') {
        // Verificar qué tipo de instrucción es
        if (node.variar()) {
            return interpretar(node.variar());
        }
        if (node.asignacion()) {
            return interpretar(node.asignacion());
        }
        if (node.salida()) {
            return interpretar(node.salida());
        }
    }
    if (nodeType === 'SalidaContext') {
        const expr = interpretar(node.expresion());
        return `console.log(${expr});`;
    }
    if (nodeType === 'AsignacionContext') {
        const varName = node.variable().getText();
        const expr = interpretar(node.expresion());
        return `${varName} = ${expr};`;
    }
    if (nodeType === 'VariarContext') {
        const varName = node.variable().getText();
        const desde = interpretar(node.expresion(0));
        const hasta = interpretar(node.expresion(1));
        const paso = node.expresion(2) ? interpretar(node.expresion(2)) : '1';
        const bloque = interpretar(node.bloque());
        return `for(let ${varName} = ${desde}; ${varName} <= ${hasta}; ${varName} += ${paso}) {\n${bloque}\n}`;
    }
    if (nodeType === 'BloqueContext') {
        const instrucciones = node.instruccion();
        console.log(`Número de instrucciones en bloque: ${instrucciones.length}`);
        return instrucciones.map(inst => interpretar(inst)).join('\n');
    }
    if (nodeType === 'ExpresionContext') {
        const terminos = node.termino();
        console.log(`Número de términos: ${terminos.length}`);
        if (terminos.length === 1) {
            return interpretar(terminos[0]);
        } else {
            let expr = interpretar(terminos[0]);
            for (let i = 1; i < terminos.length; i++) {
                const op = node.children[2 * i - 1].getText();
                expr += ` ${op} ${interpretar(terminos[i])}`;
            }
            return expr;
        }
    }
    if (nodeType === 'TerminoContext') {
        if (node.NUMERO()) {
            console.log(`Término numérico: ${node.NUMERO().getText()}`);
            return node.NUMERO().getText();
        }
        if (node.variable()) {
            console.log(`Término variable: ${node.variable().getText()}`);
            return node.variable().getText();
        }
        if (node.expresion()) {
            console.log('Término expresión');
            return `(${interpretar(node.expresion())})`;
        }
    }
    if (nodeType === 'VariableContext') {
        const varName = node.IDENTIFICADOR().getText();
        console.log(`Variable: ${varName}`);
        return varName;
    }
    
    console.log(`Tipo de nodo no manejado: ${nodeType}`);
    return '';
}

console.log('\nInterpretación (traducción a JavaScript):');
const traduccion = interpretar(tree);
if (traduccion.trim().length === 0) {
    console.log('(No se pudo traducir el código. Verifique que la entrada sea válida y reconocida por la gramática.)');
} else {
    console.log(traduccion);
}