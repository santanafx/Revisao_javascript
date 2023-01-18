const num = 14.5;

const str1 = num.toString(); //converter para string
console.log(`Tipo de ${str1} ${typeof str1}`);

const str2 = num.toFixed(2); //usar somente duas casas decimais
console.log(`Tipo de ${str2} ${typeof str2}`);

const num1 = Number("14.5"); //converter string para numero
console.log(`Tipo de ${num1} ${typeof num1}`);

const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2} ${typeof num2}`);

const num3 = parseFloat("21", 10);
console.log(`Tipo de ${num3} ${typeof num3}`);

//--------------------------------------------------

const str = "Lucas Santana";

//utilizando métodos

console.log(`${str.toLowerCase()}`); //transformar letras maiusculas em minusculas
console.log(`${str.toUpperCase()}`); //transformar letras minusculas em maiusculas
console.log(`${str.charAt(3)}`); //retorna char da posicao 3
console.log(`${str[3]}`); //o string tambem aceita a notacao do colchetes
console.log(`${str.replace("a", "R")}`); //trocar letra
console.log(`${str.replace(/a/g, "R")}`); //trocar letra com uso expressao regular
console.log(`${str.length}`); //tamanho da variável,lenth é uma propriedade isso pode ser visto no autocomplete do vscode, a caixinha azul são de propriedades e a caixinha rosa são de métodos

console.log(`${str.indexOf("a")}`); //a primeira ocorrencia do string é na posicao 3

console.log(`${str.lastIndexOf("a")}`); //ultima ocorrencia da string

console.log(`${str.substring(2, 5)}`); //imprime a posicao da string 2 até 5

const str10 = "Lucas Santana    "; // string com espaços em branco no final

console.log(`${str10.trim()}`); //remover espaços em brancos no final da string

//--------------------------------------------------

//% resto da divisao
//**  exponenciacao

console.log("3" == 3); //resultado vai dar verdadeiro mas uma variavel é do tipo string e outra é do tipo numero, true

console.log("3" === 3); // o operador === leva em consideração o tipo da variavel, false

const a = new String("Lucas"); //variavel a é do tipo objeto devido ao uso da funcao construtora

//---------------------------------------------------
