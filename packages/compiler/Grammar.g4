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
	'new' IDENTIFIER (',' IDENTIFIER)* ':' type (
		',' IDENTIFIER ':' type
	)* ';';
writeStatement: 'write' '(' expression ')' ';';
readStatement: IDENTIFIER '=' 'read' '(' STRING ')' ';';
assignmentStatement: IDENTIFIER '=' expression ';';
ifStatement:
	'is' expression '?' statement+ (':' statement+)? ';';
whileStatement: '...' expression '>' statement+ ';';
doWhileStatement: '>' statement+ '...' expression ';';

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