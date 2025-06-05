// Generated from c:/Users/Usuario/OneDrive/Escritorio/analizador2/gramatica/Analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AnalizadorParser}.
 */
public interface AnalizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(AnalizadorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(AnalizadorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(AnalizadorParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(AnalizadorParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#variar}.
	 * @param ctx the parse tree
	 */
	void enterVariar(AnalizadorParser.VariarContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#variar}.
	 * @param ctx the parse tree
	 */
	void exitVariar(AnalizadorParser.VariarContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#bloque}.
	 * @param ctx the parse tree
	 */
	void enterBloque(AnalizadorParser.BloqueContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#bloque}.
	 * @param ctx the parse tree
	 */
	void exitBloque(AnalizadorParser.BloqueContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(AnalizadorParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(AnalizadorParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(AnalizadorParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(AnalizadorParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(AnalizadorParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(AnalizadorParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterTermino(AnalizadorParser.TerminoContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitTermino(AnalizadorParser.TerminoContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(AnalizadorParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(AnalizadorParser.VariableContext ctx);
}