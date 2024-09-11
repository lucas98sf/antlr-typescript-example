// Generated from Grammar.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { GrammarVisitor } from "./GrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class GrammarParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly IDENTIFIER = 25;
    public static readonly NUMBER = 26;
    public static readonly STRING = 27;
    public static readonly WS = 28;
    public static readonly COMMENT = 29;
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_letStatement = 2;
    public static readonly RULE_writeStatement = 3;
    public static readonly RULE_readStatement = 4;
    public static readonly RULE_assignmentStatement = 5;
    public static readonly RULE_ifStatement = 6;
    public static readonly RULE_whileStatement = 7;
    public static readonly RULE_doWhileStatement = 8;
    public static readonly RULE_expression = 9;
    public static readonly RULE_type = 10;

    public static readonly literalNames = [
        null, "'new'", "','", "':'", "';'", "'write'", "'('", "')'", "'='", 
        "'read'", "'is'", "'?'", "'...'", "'>'", "'+'", "'-'", "'*'", "'/'", 
        "'<'", "'>='", "'<='", "'=='", "'!='", "'text'", "'number'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "IDENTIFIER", "NUMBER", "STRING", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "statement", "letStatement", "writeStatement", "readStatement", 
        "assignmentStatement", "ifStatement", "whileStatement", "doWhileStatement", 
        "expression", "type",
    ];

    public get grammarFileName(): string { return "Grammar.g4"; }
    public get literalNames(): (string | null)[] { return GrammarParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return GrammarParser.symbolicNames; }
    public get ruleNames(): string[] { return GrammarParser.ruleNames; }
    public get serializedATN(): number[] { return GrammarParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, GrammarParser._ATN, GrammarParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, GrammarParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 23;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 22;
                this.statement();
                }
                }
                this.state = 25;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33567778) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, GrammarParser.RULE_statement);
        try {
            this.state = 34;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 27;
                this.letStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 28;
                this.writeStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 29;
                this.readStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 30;
                this.assignmentStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 31;
                this.ifStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 32;
                this.whileStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 33;
                this.doWhileStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letStatement(): LetStatementContext {
        let localContext = new LetStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, GrammarParser.RULE_letStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 36;
            this.match(GrammarParser.T__0);
            this.state = 37;
            this.match(GrammarParser.IDENTIFIER);
            this.state = 42;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 38;
                this.match(GrammarParser.T__1);
                this.state = 39;
                this.match(GrammarParser.IDENTIFIER);
                }
                }
                this.state = 44;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 45;
            this.match(GrammarParser.T__2);
            this.state = 46;
            this.type_();
            this.state = 53;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 47;
                this.match(GrammarParser.T__1);
                this.state = 48;
                this.match(GrammarParser.IDENTIFIER);
                this.state = 49;
                this.match(GrammarParser.T__2);
                this.state = 50;
                this.type_();
                }
                }
                this.state = 55;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 56;
            this.match(GrammarParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public writeStatement(): WriteStatementContext {
        let localContext = new WriteStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, GrammarParser.RULE_writeStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 58;
            this.match(GrammarParser.T__4);
            this.state = 59;
            this.match(GrammarParser.T__5);
            this.state = 60;
            this.expression(0);
            this.state = 61;
            this.match(GrammarParser.T__6);
            this.state = 62;
            this.match(GrammarParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public readStatement(): ReadStatementContext {
        let localContext = new ReadStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, GrammarParser.RULE_readStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 64;
            this.match(GrammarParser.IDENTIFIER);
            this.state = 65;
            this.match(GrammarParser.T__7);
            this.state = 66;
            this.match(GrammarParser.T__8);
            this.state = 67;
            this.match(GrammarParser.T__5);
            this.state = 68;
            this.match(GrammarParser.STRING);
            this.state = 69;
            this.match(GrammarParser.T__6);
            this.state = 70;
            this.match(GrammarParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentStatement(): AssignmentStatementContext {
        let localContext = new AssignmentStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, GrammarParser.RULE_assignmentStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(GrammarParser.IDENTIFIER);
            this.state = 73;
            this.match(GrammarParser.T__7);
            this.state = 74;
            this.expression(0);
            this.state = 75;
            this.match(GrammarParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, GrammarParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.match(GrammarParser.T__9);
            this.state = 78;
            this.expression(0);
            this.state = 79;
            this.match(GrammarParser.T__10);
            this.state = 81;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 80;
                this.statement();
                }
                }
                this.state = 83;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33567778) !== 0));
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 85;
                this.match(GrammarParser.T__2);
                this.state = 87;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 86;
                    this.statement();
                    }
                    }
                    this.state = 89;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33567778) !== 0));
                }
            }

            this.state = 93;
            this.match(GrammarParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStatement(): WhileStatementContext {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 14, GrammarParser.RULE_whileStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 95;
            this.match(GrammarParser.T__11);
            this.state = 96;
            this.expression(0);
            this.state = 97;
            this.match(GrammarParser.T__12);
            this.state = 99;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 98;
                this.statement();
                }
                }
                this.state = 101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33567778) !== 0));
            this.state = 103;
            this.match(GrammarParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public doWhileStatement(): DoWhileStatementContext {
        let localContext = new DoWhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 16, GrammarParser.RULE_doWhileStatement);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.match(GrammarParser.T__12);
            this.state = 107;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 106;
                    this.statement();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 109;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 111;
            this.match(GrammarParser.T__11);
            this.state = 112;
            this.expression(0);
            this.state = 113;
            this.match(GrammarParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 18;
        this.enterRecursionRule(localContext, 18, GrammarParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 123;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GrammarParser.NUMBER:
                {
                this.state = 116;
                this.match(GrammarParser.NUMBER);
                }
                break;
            case GrammarParser.IDENTIFIER:
                {
                this.state = 117;
                this.match(GrammarParser.IDENTIFIER);
                }
                break;
            case GrammarParser.T__5:
                {
                this.state = 118;
                this.match(GrammarParser.T__5);
                this.state = 119;
                this.expression(0);
                this.state = 120;
                this.match(GrammarParser.T__6);
                }
                break;
            case GrammarParser.STRING:
                {
                this.state = 122;
                this.match(GrammarParser.STRING);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 133;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 131;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, GrammarParser.RULE_expression);
                        this.state = 125;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 126;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 127;
                        this.expression(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, GrammarParser.RULE_expression);
                        this.state = 128;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 129;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8134656) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 130;
                        this.expression(6);
                        }
                        break;
                    }
                    }
                }
                this.state = 135;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 20, GrammarParser.RULE_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 136;
            _la = this.tokenStream.LA(1);
            if(!(_la === 23 || _la === 24)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 9:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 6);
        case 1:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,29,139,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,12,0,25,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,35,8,1,1,2,1,2,1,2,1,2,5,2,41,8,
        2,10,2,12,2,44,9,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,52,8,2,10,2,12,2,
        55,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,4,6,82,8,6,11,6,12,6,83,
        1,6,1,6,4,6,88,8,6,11,6,12,6,89,3,6,92,8,6,1,6,1,6,1,7,1,7,1,7,1,
        7,4,7,100,8,7,11,7,12,7,101,1,7,1,7,1,8,1,8,4,8,108,8,8,11,8,12,
        8,109,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,124,8,
        9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,132,8,9,10,9,12,9,135,9,9,1,10,1,10,
        1,10,0,1,18,11,0,2,4,6,8,10,12,14,16,18,20,0,3,1,0,14,17,2,0,13,
        13,18,22,1,0,23,24,146,0,23,1,0,0,0,2,34,1,0,0,0,4,36,1,0,0,0,6,
        58,1,0,0,0,8,64,1,0,0,0,10,72,1,0,0,0,12,77,1,0,0,0,14,95,1,0,0,
        0,16,105,1,0,0,0,18,123,1,0,0,0,20,136,1,0,0,0,22,24,3,2,1,0,23,
        22,1,0,0,0,24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,1,1,0,0,
        0,27,35,3,4,2,0,28,35,3,6,3,0,29,35,3,8,4,0,30,35,3,10,5,0,31,35,
        3,12,6,0,32,35,3,14,7,0,33,35,3,16,8,0,34,27,1,0,0,0,34,28,1,0,0,
        0,34,29,1,0,0,0,34,30,1,0,0,0,34,31,1,0,0,0,34,32,1,0,0,0,34,33,
        1,0,0,0,35,3,1,0,0,0,36,37,5,1,0,0,37,42,5,25,0,0,38,39,5,2,0,0,
        39,41,5,25,0,0,40,38,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,
        0,0,0,43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,3,0,0,46,53,3,20,10,0,
        47,48,5,2,0,0,48,49,5,25,0,0,49,50,5,3,0,0,50,52,3,20,10,0,51,47,
        1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,
        55,53,1,0,0,0,56,57,5,4,0,0,57,5,1,0,0,0,58,59,5,5,0,0,59,60,5,6,
        0,0,60,61,3,18,9,0,61,62,5,7,0,0,62,63,5,4,0,0,63,7,1,0,0,0,64,65,
        5,25,0,0,65,66,5,8,0,0,66,67,5,9,0,0,67,68,5,6,0,0,68,69,5,27,0,
        0,69,70,5,7,0,0,70,71,5,4,0,0,71,9,1,0,0,0,72,73,5,25,0,0,73,74,
        5,8,0,0,74,75,3,18,9,0,75,76,5,4,0,0,76,11,1,0,0,0,77,78,5,10,0,
        0,78,79,3,18,9,0,79,81,5,11,0,0,80,82,3,2,1,0,81,80,1,0,0,0,82,83,
        1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,91,1,0,0,0,85,87,5,3,0,0,
        86,88,3,2,1,0,87,86,1,0,0,0,88,89,1,0,0,0,89,87,1,0,0,0,89,90,1,
        0,0,0,90,92,1,0,0,0,91,85,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,
        94,5,4,0,0,94,13,1,0,0,0,95,96,5,12,0,0,96,97,3,18,9,0,97,99,5,13,
        0,0,98,100,3,2,1,0,99,98,1,0,0,0,100,101,1,0,0,0,101,99,1,0,0,0,
        101,102,1,0,0,0,102,103,1,0,0,0,103,104,5,4,0,0,104,15,1,0,0,0,105,
        107,5,13,0,0,106,108,3,2,1,0,107,106,1,0,0,0,108,109,1,0,0,0,109,
        107,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,5,12,0,0,112,
        113,3,18,9,0,113,114,5,4,0,0,114,17,1,0,0,0,115,116,6,9,-1,0,116,
        124,5,26,0,0,117,124,5,25,0,0,118,119,5,6,0,0,119,120,3,18,9,0,120,
        121,5,7,0,0,121,124,1,0,0,0,122,124,5,27,0,0,123,115,1,0,0,0,123,
        117,1,0,0,0,123,118,1,0,0,0,123,122,1,0,0,0,124,133,1,0,0,0,125,
        126,10,6,0,0,126,127,7,0,0,0,127,132,3,18,9,7,128,129,10,5,0,0,129,
        130,7,1,0,0,130,132,3,18,9,6,131,125,1,0,0,0,131,128,1,0,0,0,132,
        135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,19,1,0,0,0,135,133,
        1,0,0,0,136,137,7,2,0,0,137,21,1,0,0,0,12,25,34,42,53,83,89,91,101,
        109,123,131,133
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!GrammarParser.__ATN) {
            GrammarParser.__ATN = new antlr.ATNDeserializer().deserialize(GrammarParser._serializedATN);
        }

        return GrammarParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(GrammarParser.literalNames, GrammarParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return GrammarParser.vocabulary;
    }

    private static readonly decisionsToDFA = GrammarParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_program;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public letStatement(): LetStatementContext | null {
        return this.getRuleContext(0, LetStatementContext);
    }
    public writeStatement(): WriteStatementContext | null {
        return this.getRuleContext(0, WriteStatementContext);
    }
    public readStatement(): ReadStatementContext | null {
        return this.getRuleContext(0, ReadStatementContext);
    }
    public assignmentStatement(): AssignmentStatementContext | null {
        return this.getRuleContext(0, AssignmentStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public whileStatement(): WhileStatementContext | null {
        return this.getRuleContext(0, WhileStatementContext);
    }
    public doWhileStatement(): DoWhileStatementContext | null {
        return this.getRuleContext(0, DoWhileStatementContext);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_statement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GrammarParser.IDENTIFIER);
    	} else {
    		return this.getToken(GrammarParser.IDENTIFIER, i);
    	}
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_letStatement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitLetStatement) {
            return visitor.visitLetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WriteStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_writeStatement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitWriteStatement) {
            return visitor.visitWriteStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReadStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(GrammarParser.IDENTIFIER, 0)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(GrammarParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_readStatement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitReadStatement) {
            return visitor.visitReadStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(GrammarParser.IDENTIFIER, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_assignmentStatement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitAssignmentStatement) {
            return visitor.visitAssignmentStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_ifStatement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_whileStatement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DoWhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_doWhileStatement;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitDoWhileStatement) {
            return visitor.visitDoWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(GrammarParser.NUMBER, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(GrammarParser.IDENTIFIER, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(GrammarParser.STRING, 0);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_expression;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GrammarParser.RULE_type;
    }
    public override accept<Result>(visitor: GrammarVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
