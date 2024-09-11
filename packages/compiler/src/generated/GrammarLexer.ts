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
    public static readonly IDENTIFIER = 25;
    public static readonly NUMBER = 26;
    public static readonly STRING = 27;
    public static readonly WS = 28;
    public static readonly COMMENT = 29;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

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

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "IDENTIFIER", "NUMBER", "STRING", "WS", "COMMENT",
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
        4,0,29,178,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,
        1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,
        1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,
        1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,19,
        1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,5,24,134,8,24,10,24,
        12,24,137,9,24,1,25,4,25,140,8,25,11,25,12,25,141,1,25,1,25,4,25,
        146,8,25,11,25,12,25,147,3,25,150,8,25,1,26,1,26,5,26,154,8,26,10,
        26,12,26,157,9,26,1,26,1,26,1,27,4,27,162,8,27,11,27,12,27,163,1,
        27,1,27,1,28,1,28,1,28,1,28,5,28,172,8,28,10,28,12,28,175,9,28,1,
        28,1,28,0,0,29,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
        11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,
        22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,1,0,6,3,0,65,90,95,
        95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,10,10,13,13,
        34,34,3,0,9,10,13,13,32,32,2,0,10,10,13,13,184,0,1,1,0,0,0,0,3,1,
        0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
        0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
        0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,
        0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,
        0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,
        0,0,0,55,1,0,0,0,0,57,1,0,0,0,1,59,1,0,0,0,3,63,1,0,0,0,5,65,1,0,
        0,0,7,67,1,0,0,0,9,69,1,0,0,0,11,75,1,0,0,0,13,77,1,0,0,0,15,79,
        1,0,0,0,17,81,1,0,0,0,19,86,1,0,0,0,21,89,1,0,0,0,23,91,1,0,0,0,
        25,95,1,0,0,0,27,97,1,0,0,0,29,99,1,0,0,0,31,101,1,0,0,0,33,103,
        1,0,0,0,35,105,1,0,0,0,37,107,1,0,0,0,39,110,1,0,0,0,41,113,1,0,
        0,0,43,116,1,0,0,0,45,119,1,0,0,0,47,124,1,0,0,0,49,131,1,0,0,0,
        51,139,1,0,0,0,53,151,1,0,0,0,55,161,1,0,0,0,57,167,1,0,0,0,59,60,
        5,110,0,0,60,61,5,101,0,0,61,62,5,119,0,0,62,2,1,0,0,0,63,64,5,44,
        0,0,64,4,1,0,0,0,65,66,5,58,0,0,66,6,1,0,0,0,67,68,5,59,0,0,68,8,
        1,0,0,0,69,70,5,119,0,0,70,71,5,114,0,0,71,72,5,105,0,0,72,73,5,
        116,0,0,73,74,5,101,0,0,74,10,1,0,0,0,75,76,5,40,0,0,76,12,1,0,0,
        0,77,78,5,41,0,0,78,14,1,0,0,0,79,80,5,61,0,0,80,16,1,0,0,0,81,82,
        5,114,0,0,82,83,5,101,0,0,83,84,5,97,0,0,84,85,5,100,0,0,85,18,1,
        0,0,0,86,87,5,105,0,0,87,88,5,115,0,0,88,20,1,0,0,0,89,90,5,63,0,
        0,90,22,1,0,0,0,91,92,5,46,0,0,92,93,5,46,0,0,93,94,5,46,0,0,94,
        24,1,0,0,0,95,96,5,62,0,0,96,26,1,0,0,0,97,98,5,43,0,0,98,28,1,0,
        0,0,99,100,5,45,0,0,100,30,1,0,0,0,101,102,5,42,0,0,102,32,1,0,0,
        0,103,104,5,47,0,0,104,34,1,0,0,0,105,106,5,60,0,0,106,36,1,0,0,
        0,107,108,5,62,0,0,108,109,5,61,0,0,109,38,1,0,0,0,110,111,5,60,
        0,0,111,112,5,61,0,0,112,40,1,0,0,0,113,114,5,61,0,0,114,115,5,61,
        0,0,115,42,1,0,0,0,116,117,5,33,0,0,117,118,5,61,0,0,118,44,1,0,
        0,0,119,120,5,116,0,0,120,121,5,101,0,0,121,122,5,120,0,0,122,123,
        5,116,0,0,123,46,1,0,0,0,124,125,5,110,0,0,125,126,5,117,0,0,126,
        127,5,109,0,0,127,128,5,98,0,0,128,129,5,101,0,0,129,130,5,114,0,
        0,130,48,1,0,0,0,131,135,7,0,0,0,132,134,7,1,0,0,133,132,1,0,0,0,
        134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,50,1,0,0,0,137,
        135,1,0,0,0,138,140,7,2,0,0,139,138,1,0,0,0,140,141,1,0,0,0,141,
        139,1,0,0,0,141,142,1,0,0,0,142,149,1,0,0,0,143,145,5,46,0,0,144,
        146,7,2,0,0,145,144,1,0,0,0,146,147,1,0,0,0,147,145,1,0,0,0,147,
        148,1,0,0,0,148,150,1,0,0,0,149,143,1,0,0,0,149,150,1,0,0,0,150,
        52,1,0,0,0,151,155,5,34,0,0,152,154,8,3,0,0,153,152,1,0,0,0,154,
        157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,157,
        155,1,0,0,0,158,159,5,34,0,0,159,54,1,0,0,0,160,162,7,4,0,0,161,
        160,1,0,0,0,162,163,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,
        165,1,0,0,0,165,166,6,27,0,0,166,56,1,0,0,0,167,168,5,47,0,0,168,
        169,5,47,0,0,169,173,1,0,0,0,170,172,8,5,0,0,171,170,1,0,0,0,172,
        175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,176,1,0,0,0,175,
        173,1,0,0,0,176,177,6,28,0,0,177,58,1,0,0,0,8,0,135,141,147,149,
        155,163,173,1,6,0,0
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