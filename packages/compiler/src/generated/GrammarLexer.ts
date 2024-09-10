// Generated from Grammar.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class GrammarLexer extends antlr.Lexer {
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
    public static readonly T__24 = 25;
    public static readonly IDENTIFIER = 26;
    public static readonly NUMBER = 27;
    public static readonly STRING = 28;
    public static readonly WS = 29;
    public static readonly COMMENT = 30;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "','", "':'", "';'", "'write'", "'('", "')'", "'='", 
        "'read'", "'if'", "'?'", "'while'", "'do'", "'+'", "'-'", "'*'", 
        "'/'", "'>'", "'<'", "'>='", "'<='", "'=='", "'!='", "'text'", "'number'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, "IDENTIFIER", "NUMBER", "STRING", "WS", 
        "COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "IDENTIFIER", "NUMBER", "STRING", "WS", "COMMENT",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, GrammarLexer._ATN, GrammarLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Grammar.g4"; }

    public get literalNames(): (string | null)[] { return GrammarLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return GrammarLexer.symbolicNames; }
    public get ruleNames(): string[] { return GrammarLexer.ruleNames; }

    public get serializedATN(): number[] { return GrammarLexer._serializedATN; }

    public get channelNames(): string[] { return GrammarLexer.channelNames; }

    public get modeNames(): string[] { return GrammarLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,30,185,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,0,1,0,1,1,1,1,1,
        2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,
        8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,
        1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,
        1,17,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,
        1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,25,1,25,5,25,141,8,25,10,25,12,25,144,9,25,1,26,4,26,147,
        8,26,11,26,12,26,148,1,26,1,26,4,26,153,8,26,11,26,12,26,154,3,26,
        157,8,26,1,27,1,27,5,27,161,8,27,10,27,12,27,164,9,27,1,27,1,27,
        1,28,4,28,169,8,28,11,28,12,28,170,1,28,1,28,1,29,1,29,1,29,1,29,
        5,29,179,8,29,10,29,12,29,182,9,29,1,29,1,29,0,0,30,1,1,3,2,5,3,
        7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,
        31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,
        53,27,55,28,57,29,59,30,1,0,6,3,0,65,90,95,95,97,122,4,0,48,57,65,
        90,95,95,97,122,1,0,48,57,3,0,10,10,13,13,34,34,3,0,9,10,13,13,32,
        32,2,0,10,10,13,13,191,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
        0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
        0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,
        0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,
        0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,
        0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,
        0,0,0,0,59,1,0,0,0,1,61,1,0,0,0,3,65,1,0,0,0,5,67,1,0,0,0,7,69,1,
        0,0,0,9,71,1,0,0,0,11,77,1,0,0,0,13,79,1,0,0,0,15,81,1,0,0,0,17,
        83,1,0,0,0,19,88,1,0,0,0,21,91,1,0,0,0,23,93,1,0,0,0,25,99,1,0,0,
        0,27,102,1,0,0,0,29,104,1,0,0,0,31,106,1,0,0,0,33,108,1,0,0,0,35,
        110,1,0,0,0,37,112,1,0,0,0,39,114,1,0,0,0,41,117,1,0,0,0,43,120,
        1,0,0,0,45,123,1,0,0,0,47,126,1,0,0,0,49,131,1,0,0,0,51,138,1,0,
        0,0,53,146,1,0,0,0,55,158,1,0,0,0,57,168,1,0,0,0,59,174,1,0,0,0,
        61,62,5,108,0,0,62,63,5,101,0,0,63,64,5,116,0,0,64,2,1,0,0,0,65,
        66,5,44,0,0,66,4,1,0,0,0,67,68,5,58,0,0,68,6,1,0,0,0,69,70,5,59,
        0,0,70,8,1,0,0,0,71,72,5,119,0,0,72,73,5,114,0,0,73,74,5,105,0,0,
        74,75,5,116,0,0,75,76,5,101,0,0,76,10,1,0,0,0,77,78,5,40,0,0,78,
        12,1,0,0,0,79,80,5,41,0,0,80,14,1,0,0,0,81,82,5,61,0,0,82,16,1,0,
        0,0,83,84,5,114,0,0,84,85,5,101,0,0,85,86,5,97,0,0,86,87,5,100,0,
        0,87,18,1,0,0,0,88,89,5,105,0,0,89,90,5,102,0,0,90,20,1,0,0,0,91,
        92,5,63,0,0,92,22,1,0,0,0,93,94,5,119,0,0,94,95,5,104,0,0,95,96,
        5,105,0,0,96,97,5,108,0,0,97,98,5,101,0,0,98,24,1,0,0,0,99,100,5,
        100,0,0,100,101,5,111,0,0,101,26,1,0,0,0,102,103,5,43,0,0,103,28,
        1,0,0,0,104,105,5,45,0,0,105,30,1,0,0,0,106,107,5,42,0,0,107,32,
        1,0,0,0,108,109,5,47,0,0,109,34,1,0,0,0,110,111,5,62,0,0,111,36,
        1,0,0,0,112,113,5,60,0,0,113,38,1,0,0,0,114,115,5,62,0,0,115,116,
        5,61,0,0,116,40,1,0,0,0,117,118,5,60,0,0,118,119,5,61,0,0,119,42,
        1,0,0,0,120,121,5,61,0,0,121,122,5,61,0,0,122,44,1,0,0,0,123,124,
        5,33,0,0,124,125,5,61,0,0,125,46,1,0,0,0,126,127,5,116,0,0,127,128,
        5,101,0,0,128,129,5,120,0,0,129,130,5,116,0,0,130,48,1,0,0,0,131,
        132,5,110,0,0,132,133,5,117,0,0,133,134,5,109,0,0,134,135,5,98,0,
        0,135,136,5,101,0,0,136,137,5,114,0,0,137,50,1,0,0,0,138,142,7,0,
        0,0,139,141,7,1,0,0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,
        0,0,142,143,1,0,0,0,143,52,1,0,0,0,144,142,1,0,0,0,145,147,7,2,0,
        0,146,145,1,0,0,0,147,148,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,
        0,149,156,1,0,0,0,150,152,5,46,0,0,151,153,7,2,0,0,152,151,1,0,0,
        0,153,154,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,
        0,156,150,1,0,0,0,156,157,1,0,0,0,157,54,1,0,0,0,158,162,5,34,0,
        0,159,161,8,3,0,0,160,159,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,
        0,162,163,1,0,0,0,163,165,1,0,0,0,164,162,1,0,0,0,165,166,5,34,0,
        0,166,56,1,0,0,0,167,169,7,4,0,0,168,167,1,0,0,0,169,170,1,0,0,0,
        170,168,1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,0,172,173,6,28,0,0,
        173,58,1,0,0,0,174,175,5,47,0,0,175,176,5,47,0,0,176,180,1,0,0,0,
        177,179,8,5,0,0,178,177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,
        180,181,1,0,0,0,181,183,1,0,0,0,182,180,1,0,0,0,183,184,6,29,0,0,
        184,60,1,0,0,0,8,0,142,148,154,156,162,170,180,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!GrammarLexer.__ATN) {
            GrammarLexer.__ATN = new antlr.ATNDeserializer().deserialize(GrammarLexer._serializedATN);
        }

        return GrammarLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(GrammarLexer.literalNames, GrammarLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return GrammarLexer.vocabulary;
    }

    private static readonly decisionsToDFA = GrammarLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}