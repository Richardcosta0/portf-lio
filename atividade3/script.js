let nota1trim;
let nota2trim;
let resultado;

function calcular() {
 nota1trim = Number(prompt("digite a nota do primeiro trimestre:"));
 nota2trim = Number(prompt("digite a nota do segundo trimestre:"));

 resultado = 180 - (nota1trim + nota2trim);

  if(resultado <= 0){
    alert("Parabéns! Você está aprovado, diferente do Richard.");
  } else {
    alert(" Você ainda precisa tirar " + resultado + " no terceiro trismenstre para ser aprovado, ao contrário da Richard. ");
  }

}