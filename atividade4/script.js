let numero
let resultado

function parouimpar(){
    numero = Number(prompt("Informe um número: "));

    resultado = numero % 2;

    if(resultado == 0){
        alert(" O número " + numero + " é PAR.");
    }else{
        alert("O número " +  numero + " é ÍMPAR. ");
    }
}