# Analizador Sintáctico - [Tu Legajo]

Este proyecto es un analizador léxico y sintáctico construido con ANTLR4 y Node.js, que traduce un lenguaje específico a JavaScript.

## Instalación

```bash
npm install
```

## Generar archivos ANTLR (si es necesario)

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Analizador.g4
```

## Uso

```bash
node analizador.js
```

Por defecto, analiza el archivo `input.txt`. Puedes cambiar el archivo de entrada editando el nombre en `analizador.js` o reemplazando el contenido de `input.txt`.

## Ejemplos

- Para probar un ejemplo correcto:
  - Copia el contenido de `ejemplos/ejemplo1.txt` a `input.txt` y ejecuta el analizador.
- Para probar un ejemplo incorrecto:
  - Copia el contenido de `ejemplos/ejemplo_error1.txt` a `input.txt` y ejecuta el analizador.

## Notas

- El analizador muestra la tabla de tokens, el árbol sintáctico y la traducción a JavaScript.
- Si hay errores léxicos o sintácticos, se mostrarán con línea y columna. 