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
