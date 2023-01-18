//tipos do javascript: boolean, objeto,string, number

//---------------------------------------------
const txt = `{"name": "computador", "price": 59, "lucas": "ana", "idade": 34}`; //string

const obj = JSON.parse(txt); //objeto

console.log(txt.name); //undefined

console.log(obj.name); //retorna computador

const text = JSON.stringify(obj); //converte a variavel obj para texto

//-----------------------------------------------

const preco = 10;

function mostrarPreco(preco) {
  //uma funcao tem comportamento padrao de nao retornar nada caso não for especificado com o uso do return o que a funcao deve retornar. Quando não é usado return a funcao retorna undefined
  return preco;
}
console.log("preco:" + preco);
mostrarPreco();

//var não vaza escopo pra fora de função, somente para fora de estruturas de controle (if,else,while,for)

const raio = 3;

function areaCirculo(raio) {
  var pi = 3.14;
  return pi * raio * raio;
}

areaCirculo();

//console.log(pi); //vai retornar undifined pois var está dentro de uma function

//hoisting = caracteristica do javascript onde todas as funcoes são executadas primeiro. Se todas as funcoes forem colocadas no final do codigo isso nao irá ter influencia no codigo

//--------------------------------------------------------
