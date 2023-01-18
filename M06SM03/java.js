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

//funcoes alta ordem

const lista1 = [1, 2, 3, 4];
const lista2 = [];
const nomes = ["MARTA", "JOAO", "ANABELA"];

//map: aplica uma funcao a cada elemento da colecao original, retornando uma nova colecao com os elementos alterados

function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

const m1 = lista1.map(dobro); //utiliza uma funcao map e passa uma referencia da funcao dobro

const m2 = lista1.map((x) => x * 3); //utilizacao de uma funcao anonima

console.log(m1);
console.log(m2);

//filter: retorna uma nova colecao contendo apenas aqueles elementos da colecao original que satisfazem um dado de verdadeiro ou falso

//funcao que retorna par ou impar
function par(x) {
  return x % 2 == 0;
}

const f1 = lista1.filter(par);

console.log(f1);

//reduce: aplica cumulativamente uma funcao aos elementos de uma colecao, retornando o resultado final cumulativo. Exe:somar todos os numeros do array e retornar somente 1 numero. Voce pode informar, opcionamente, um valor inicial como parametro.

function soma(x, y) {
  return x + y;
}

const r1 = lista1.reduce(soma, 0); //o segundo argumento serve para somar uma lista vazia, caso contrario, o console ira retornar um erro

console.log(r1);

//sort: ordena a colecao conforme a funcao de comparacao informada como parametro. O sort altera o vetor original

function compararPorTamanho(s1, s2) {
  return s1.length - s2.length;
}

const s1 = nomes.sort(); //sem informar parametros o sort organiza o array em ordem alfabetica,
const s2 = nomes.sort(compararPorTamanho);

console.log(s1);
console.log(s2);

//-------------------------------------------------------

//desestruturacao

const obj3 = {
  id: 53,
  date: "2022-01-20",
  items: [
    {
      description: "celular",
      price: 1499,
      quantity: 1,
    },
    {
      description: "mouse",
      price: 2500,
      quantity: 2,
    },
  ],
  client: {
    name: "Maria Red",
    email: "maria@gmail.com",
    active: true,
  },
};

const { id, client } = obj3; //cria um objeto e pega a referencia do obj3

console.log(id);
console.log(client);

// function subTotal(item) {
//   return item.price * item.quantity;
// }

//ou

function subTotal({ price, quantity }) {
  return price * quantity;
}

console.log(subTotal(obj3.items[1]));

//---------------------------------------------------

//REST: valores passados com virgula => array

//uso dos ...nomeDaVariavel

//SPREAD: array => valores separados por virgula

const myNumbers = [2, 3, 10, 5];

const result3 = Math.max(...myNumbers);

console.log(result3);

const item = {
  description: "Lucas",
  price: 2500,
  quantity: 2,
};

const cloneItem = { ...item };

console.log(cloneItem);

const cloneItemPlus = { ...item, weight: 10 };

console.log(cloneItemPlus);
