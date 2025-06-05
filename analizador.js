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
        const tokenName = AnalizadorParser.symbolicNames[token.type];
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
    if (/programa/i.test(node.constructor.name)) {
        if (typeof node.instruccion === 'function') {
            return asArray(node.instruccion()).map(interpretar).join('\n');
        }
    }
    if (/salida/i.test(node.constructor.name)) {
        const expr = interpretar(node.expresion());
        return `console.log(${expr});`;
    }
    if (/asignacion/i.test(node.constructor.name)) {
        return `${node.variable().getText()} = ${interpretar(node.expresion())};`;
    }
    if (/variar/i.test(node.constructor.name)) {
        const varName = node.variable().getText();
        const desde = interpretar(node.expresion(0));
        const hasta = interpretar(node.expresion(1));
        const paso = node.expresion(2) ? interpretar(node.expresion(2)) : '1';
        const bloque = interpretar(node.bloque());
        return `for(let ${varName} = ${desde}; ${varName} <= ${hasta}; ${varName} += ${paso}) {\n${bloque}\n}`;
    }
    if (/bloque/i.test(node.constructor.name)) {
        if (typeof node.instruccion === 'function') {
            return asArray(node.instruccion()).map(interpretar).join('\n');
        }
    }
    if (/expresion/i.test(node.constructor.name)) {
        if (node.termino && node.termino().length === 1) {
            return interpretar(node.termino(0));
        } else if (node.termino && node.termino().length > 1) {
            let expr = interpretar(node.termino(0));
            for (let i = 1; i < node.termino().length; i++) {
                expr += ` ${node.children[2 * i - 1].getText()} ${interpretar(node.termino(i))}`;
            }
            return expr;
        }
    }
    if (/termino/i.test(node.constructor.name)) {
        if (node.NUMERO && node.NUMERO()) return node.NUMERO().getText();
        if (node.variable && node.variable()) return node.variable().getText();
        if (node.expresion && node.expresion()) return `(${interpretar(node.expresion())})`;
    }
    return '';
}

console.log('\nInterpretación (traducción a JavaScript):');
const traduccion = interpretar(tree);
if (traduccion.trim().length === 0) {
    console.log('(No se pudo traducir el código. Verifique que la entrada sea válida y reconocida por la gramática.)');
} else {
    console.log(traduccion);
}