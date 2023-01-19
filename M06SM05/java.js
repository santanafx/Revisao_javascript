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
