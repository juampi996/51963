grammar Analizador;

programa  : instruccion+ ;

instruccion
    : variar
    | asignacion
    | salida
    ;

variar
    : 'variar' variable 'desde' expresion 'hasta' expresion ('con paso' expresion)? 'hacer' bloque 'fin_variar'
    ;

bloque
    : instruccion+
    ;

asignacion
    : variable '<-' expresion
    ;

salida
    : 'escribir' expresion
    ;

expresion
    : termino (('+' | '-' | '*' | '/') termino)*
    ;

termino
    : NUMERO
    | variable
    | '(' expresion ')'
    ;

variable
    : IDENTIFICADOR
    ;

IDENTIFICADOR
    : LETRA (LETRA | DIGITO)*
    ;

fragment LETRA
    : [a-zA-Z]
    ;

fragment DIGITO
    : [0-9]
    ;

NUMERO
    : DIGITO+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;