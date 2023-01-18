const txt = `{"name": "computador", "price": 59, "lucas": "ana", "idade": 34}`; //string

const obj = JSON.parse(txt); //objeto

console.log(txt.name); //undefined

console.log(obj.name); //retorna computador

const text = JSON.stringify(obj); //converte a variavel obj para texto
