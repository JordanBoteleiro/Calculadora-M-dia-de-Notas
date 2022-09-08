var nome = "jordan Boteleiro ";
console.log("Bem Vindo " + nome);


const notaA = parseInt(prompt("Digite a nota do primeiro Bimestre"));
const notaB = parseInt(prompt("Digite a nota do Segundo Bimestre"));
const notaC = parseInt(prompt("Digite a nota do Terceiro Bimestre"));
const notaD = parseInt(prompt("Digite a nota do Quarto Bimestre"));

var notaFinal =
  (notaA +
    notaB +
    notaC+
    notaD) /
  4;

var notaFixada = notaFinal.toFixed(0);
if(notaFixada >= 6){
  console.log(notaFixada + " Parabens voce foi aprovado")
}else{
  console.log(notaFixada + " Reprovado, tenha mais foco")
};
console.log(notaFixada);

console.log("Vc tirou " + notaFixada);