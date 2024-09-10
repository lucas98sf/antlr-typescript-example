grammar Grammar;

program: statement+;

statement:
	letStatement
	| writeStatement
	| readStatement
	| assignmentStatement
	| ifStatement
	| whileStatement
	| doWhileStatement;

letStatement:
	'let' IDENTIFIER (',' IDENTIFIER)* ':' type (
		',' IDENTIFIER ':' type
	)* ';';
writeStatement: 'write' '(' expression ')' ';';
readStatement: IDENTIFIER '=' 'read' '(' STRING ')' ';';
assignmentStatement: IDENTIFIER '=' expression ';';
ifStatement:
	'if' expression '?' statement+ (':' statement+)? ';';
whileStatement: 'while' expression 'do' statement+ ';';
doWhileStatement: 'do' statement+ 'while' expression ';';

expression:
	expression ('+' | '-' | '*' | '/') expression
	| expression ('>' | '<' | '>=' | '<=' | '==' | '!=') expression
	| NUMBER
	| IDENTIFIER
	| '(' expression ')'
	| STRING;

type: 'text' | 'number';

IDENTIFIER: [a-zA-Z_] [a-zA-Z_0-9]*;
NUMBER: [0-9]+ ('.' [0-9]+)?;
STRING: '"' (~["\r\n])* '"';
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;