// declaraçoens e varieaveis
//var let e const

var nome="fiap";
console.log(nome);
var nome="dev";
console.log(nome);

if(true){
    let avatar="fiapinho";
console.log(avatar);}


let exemmplo1="ola dev-let";
console.log(exemmplo1)

const exemplo2="recebe exemplo2";
console.log(exemplo2)

let exemplo3=20;
console.log(exemplo3)

let exemplo4=true;
console.log(exemplo4)

let exemplo5={nome:"fiap"}
console.log (exemplo5)

let exemplo6=["php,jv,html"]
console.log(exemplo6)

//valor undefined
 
let exemplo7;
console.log(exemplo7)

//valor null

let exemplo8=null;
console.log(exemplo8)

//operadores aritmeticos

const valor1=10;
const valor2=20;
console.log(valor1+valor2);
console.log(valor1-valor2);
console.log(valor1/valor2);
console.log(valor1*valor2);

//operadores logicos

const valor3=40;
const valor4=20;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 > 0);
console.log(valor3 == valor4 || valor4 >10);

//operadores de comparaçao

console.log(valor3 == valor4);
console.log(valor3 === valor4);

const p=100;
const v=20;
const preçofinal=p-v;
console.log(preçofinal);

//if

if(true){
    console.log("verdadeiro")
}

let nome1="fiap";

if(nome1 =="fiap"){
    console.log("nome Correto")
}
//if/else

if(nome1 =="fiap"){
    console.log("nome Correto")
}else{
    console.log("nome Errado")
}

//if e
let idade= 13

if(idade<=13){
    console.log("uma criança")
}
else if(idade>13 &&idade<18){
    console.log("adolecente")

}
else{
    console.log("e um adulto")
}
let times ="corinthias"
switch(times){
    case"corinthias":

        console.log("um time de tradiçao")
        break;

    case "saO PAULO":
        console.log("sem tradiçao")
        break;
}
/// condiconal terneira
let numero =100;
let resultado=numero==100? "certo":"errado";
console.log(resultado)

let usuario="fiap";
let usariologado= usario== "fiap"?"logado com sucesso":"usuario invalido";
console.log(usariologado)

