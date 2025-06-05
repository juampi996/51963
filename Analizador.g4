grammar Analizador;

programa  : instruccion+ ;

instruccion
    : variar
    | asignacion
    | salida
    ;

variar
    : VARIAR variable DESDE expresion HASTA expresion (CON_PASO expresion)? HACER bloque FIN_VARIAR
    ;

bloque
    : instruccion+
    ;

asignacion
    : variable '<-' expresion
    ;

salida
    : ESCRIBIR expresion
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

VARIAR     : 'variar';
DESDE      : 'desde';
HASTA      : 'hasta';
CON_PASO   : 'con paso';
HACER      : 'hacer';
FIN_VARIAR : 'fin_variar';
ESCRIBIR   : 'escribir';

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