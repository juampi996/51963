// Generated from Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
const serializedATN = [4,1,17,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,37,8,2,1,2,1,2,1,2,1,2,1,
3,4,3,44,8,3,11,3,12,3,45,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,5,6,58,
8,6,10,6,12,6,61,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,69,8,7,1,8,1,8,1,8,0,0,
9,0,2,4,6,8,10,12,14,16,0,1,1,0,2,5,71,0,19,1,0,0,0,2,26,1,0,0,0,4,28,1,
0,0,0,6,43,1,0,0,0,8,47,1,0,0,0,10,51,1,0,0,0,12,54,1,0,0,0,14,68,1,0,0,
0,16,70,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,
21,22,1,0,0,0,22,1,1,0,0,0,23,27,3,4,2,0,24,27,3,8,4,0,25,27,3,10,5,0,26,
23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,3,1,0,0,0,28,29,5,8,0,0,29,30,
3,16,8,0,30,31,5,9,0,0,31,32,3,12,6,0,32,33,5,10,0,0,33,36,3,12,6,0,34,35,
5,11,0,0,35,37,3,12,6,0,36,34,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,39,
5,12,0,0,39,40,3,6,3,0,40,41,5,13,0,0,41,5,1,0,0,0,42,44,3,2,1,0,43,42,1,
0,0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,7,1,0,0,0,47,48,3,16,
8,0,48,49,5,1,0,0,49,50,3,12,6,0,50,9,1,0,0,0,51,52,5,14,0,0,52,53,3,12,
6,0,53,11,1,0,0,0,54,59,3,14,7,0,55,56,7,0,0,0,56,58,3,14,7,0,57,55,1,0,
0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,13,1,0,0,0,61,59,1,0,0,
0,62,69,5,16,0,0,63,69,3,16,8,0,64,65,5,6,0,0,65,66,3,12,6,0,66,67,5,7,0,
0,67,69,1,0,0,0,68,62,1,0,0,0,68,63,1,0,0,0,68,64,1,0,0,0,69,15,1,0,0,0,
70,71,5,15,0,0,71,17,1,0,0,0,6,21,26,36,45,59,68];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'<-'", "'+'", "'-'", "'*'", "'/'", "'('", 
                            "')'", "'variar'", "'desde'", "'hasta'", "'con paso'", 
                            "'hacer'", "'fin_variar'", "'escribir'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "VARIAR", "DESDE", "HASTA", "CON_PASO", "HACER", 
                             "FIN_VARIAR", "ESCRIBIR", "IDENTIFICADOR", 
                             "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "variar", "bloque", 
                         "asignacion", "salida", "expresion", "termino", 
                         "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 49408) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_instruccion);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.variar();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.asignacion();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variar() {
	    let localctx = new VariarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_variar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(AnalizadorParser.VARIAR);
	        this.state = 29;
	        this.variable();
	        this.state = 30;
	        this.match(AnalizadorParser.DESDE);
	        this.state = 31;
	        this.expresion();
	        this.state = 32;
	        this.match(AnalizadorParser.HASTA);
	        this.state = 33;
	        this.expresion();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 34;
	            this.match(AnalizadorParser.CON_PASO);
	            this.state = 35;
	            this.expresion();
	        }

	        this.state = 38;
	        this.match(AnalizadorParser.HACER);
	        this.state = 39;
	        this.bloque();
	        this.state = 40;
	        this.match(AnalizadorParser.FIN_VARIAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 42;
	            this.instruccion();
	            this.state = 45; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 49408) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.variable();
	        this.state = 48;
	        this.match(AnalizadorParser.T__0);
	        this.state = 49;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(AnalizadorParser.ESCRIBIR);
	        this.state = 52;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.termino();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0)) {
	            this.state = 55;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 56;
	            this.termino();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_termino);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(AnalizadorParser.NUMERO);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.variable();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.match(AnalizadorParser.T__5);
	            this.state = 65;
	            this.expresion();
	            this.state = 66;
	            this.match(AnalizadorParser.T__6);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(AnalizadorParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.T__0 = 1;
AnalizadorParser.T__1 = 2;
AnalizadorParser.T__2 = 3;
AnalizadorParser.T__3 = 4;
AnalizadorParser.T__4 = 5;
AnalizadorParser.T__5 = 6;
AnalizadorParser.T__6 = 7;
AnalizadorParser.VARIAR = 8;
AnalizadorParser.DESDE = 9;
AnalizadorParser.HASTA = 10;
AnalizadorParser.CON_PASO = 11;
AnalizadorParser.HACER = 12;
AnalizadorParser.FIN_VARIAR = 13;
AnalizadorParser.ESCRIBIR = 14;
AnalizadorParser.IDENTIFICADOR = 15;
AnalizadorParser.NUMERO = 16;
AnalizadorParser.WS = 17;

AnalizadorParser.RULE_programa = 0;
AnalizadorParser.RULE_instruccion = 1;
AnalizadorParser.RULE_variar = 2;
AnalizadorParser.RULE_bloque = 3;
AnalizadorParser.RULE_asignacion = 4;
AnalizadorParser.RULE_salida = 5;
AnalizadorParser.RULE_expresion = 6;
AnalizadorParser.RULE_termino = 7;
AnalizadorParser.RULE_variable = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_instruccion;
    }

	variar() {
	    return this.getTypedRuleContext(VariarContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class VariarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_variar;
    }

	VARIAR() {
	    return this.getToken(AnalizadorParser.VARIAR, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	DESDE() {
	    return this.getToken(AnalizadorParser.DESDE, 0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	HASTA() {
	    return this.getToken(AnalizadorParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(AnalizadorParser.HACER, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	FIN_VARIAR() {
	    return this.getToken(AnalizadorParser.FIN_VARIAR, 0);
	};

	CON_PASO() {
	    return this.getToken(AnalizadorParser.CON_PASO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterVariar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitVariar(this);
		}
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitBloque(this);
		}
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_asignacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitAsignacion(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_salida;
    }

	ESCRIBIR() {
	    return this.getToken(AnalizadorParser.ESCRIBIR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSalida(this);
		}
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitExpresion(this);
		}
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(AnalizadorParser.NUMERO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitTermino(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_variable;
    }

	IDENTIFICADOR() {
	    return this.getToken(AnalizadorParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitVariable(this);
		}
	}


}




AnalizadorParser.ProgramaContext = ProgramaContext; 
AnalizadorParser.InstruccionContext = InstruccionContext; 
AnalizadorParser.VariarContext = VariarContext; 
AnalizadorParser.BloqueContext = BloqueContext; 
AnalizadorParser.AsignacionContext = AsignacionContext; 
AnalizadorParser.SalidaContext = SalidaContext; 
AnalizadorParser.ExpresionContext = ExpresionContext; 
AnalizadorParser.TerminoContext = TerminoContext; 
AnalizadorParser.VariableContext = VariableContext; 
