const p1 = {
  name: "computador",
  price: 3000.0,
  quantity: 2,
};

const Product = function (name, price, quantity) {
  this.name = name; //"this.name" se refere ha variavel "name" no objeto p1. "name" se refere ao parametro que a funcao Product recebe "name"
  this.price = price;
  this.quantity = quantity;
};

const p2 = new Product("Monitor", 800, 10); //cria um novo objeto adicionando valores as propriedades ja existentes. Sem o uso do new da undifined

//objetos são instanciados por meio da chamada do construtor com a palavra chave new

console.log(p2);

//prototype é um mecanismo pelo qual objetos herdam recursos uns dos outros

//---------------------------------------------------

//Modulos
//para utilizar modulos é preciso adicionar export na frente das funcoes que se deseja exportar para o arquivo main, no arquivo main é preciso utilizar o import * as "nome do pacote de funcao" from "./"nome do local do arquivo"". No arquivo index.html é preciso dar load apenas no arquivo principal e declarar o type="module"

export function sum(x, y) {
  return x + y;
}

//outra maneira de exportar, tirar a palavra export da frente do function
//export {sum};
