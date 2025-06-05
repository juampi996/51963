# Analizador Sintáctico - Legajo 51963

Este proyecto es un analizador léxico y sintáctico construido con **ANTLR4** y **Node.js**. Procesa un lenguaje específico definido en la consigna, informa errores léxicos y sintácticos, genera la tabla de tokens, el árbol de derivación y traduce el código fuente a JavaScript.

## Requisitos

- Node.js (v14 o superior recomendado)
- Java (para generar los archivos de ANTLR)
- ANTLR 4.13.2 (descargar el JAR desde [aquí](https://www.antlr.org/download.html))

## Instalación

1. Instala las dependencias de Node.js:
   ```bash
   npm install
   ```

2. Si necesitas generar los archivos de ANTLR (solo la primera vez o si cambias la gramática):
   ```bash
   java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Analizador.g4
   ```

## Uso

1. Coloca el código fuente a analizar en el archivo `input.txt`.
2. Ejecuta el analizador:
   ```bash
   node analizador.js
   ```

El programa mostrará:
- Tabla de tokens (lexemas y tipos)
- Árbol sintáctico (derivación)
- Traducción a JavaScript (interpretación)
- Mensajes de error léxico/sintáctico si corresponde

## Ejemplos

- Ejemplo correcto:
  ```
  x <- 1
  escribir x
  variar i desde x hasta 5 hacer
      escribir i
      x <- x + 1
      escribir x
  fin_variar
  ```
- Ejemplo con error léxico/sintáctico:
  ```
  x < 1
  escribir x
  ```

## Estructura del proyecto

- `Analizador.g4` : Gramática del lenguaje
- `analizador.js` : Analizador principal
- `input.txt` : Archivo de entrada
- `README.md` : Este archivo
- Archivos generados por ANTLR: `AnalizadorLexer.js`, `AnalizadorParser.js`, etc.

## Notas

- El proyecto es autocontenible y puede ser clonado y ejecutado siguiendo estas instrucciones.
- Si tienes dudas sobre cómo generar los archivos de ANTLR, revisa la sección de instalación.
- Los mensajes de error incluyen línea y columna para facilitar la depuración.
