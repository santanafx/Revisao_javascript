function dizerOla() {
  console.log("Ola");
}

setTimeout(dizerOla, 2000); //2 segundos para executar a funcao dizerOla

setTimeout(() => {
  dizerOla();
}, 2000);

console.log("A");
console.log("B");

//----------------------------------------------

//.them é usado caso uma promise é aceitada
//.catch é usado quando uma promise é rejeitada

//----------------------------------------------

//fetch API

const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`); //é realizado uma requisao na url, quando é retornado a promise do fetch o estado da promise é resolvida e é dado a resposta.

//.then imprime o valor da promise somente quando ela é resolvida
fetchResult
  .then((response) => {
    console.log("sucesso no fetch", response);
    const json = response.json(); //.json serve para pegar o corpo da resposta no formato json
    json.then((result) => {
      console.log("JSON", result);
    });
  })
  //catch funciona como um else caso o then não funcione
  .catch((error) => {
    console.log("erro no fetch", error);
  });

console.log(fetchResult);
