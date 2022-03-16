let primeiraNota = (parseFloat(prompt("Digite a primeira nota: ")));
let segundaNota = (parseFloat(prompt("Digite a segunda nota: ")));
let aulasDadas = (parseFloat(prompt("Digite a quantidade de aulas dadas: ")));
let aulasAssistidas = (parseFloat(prompt("Digite a quantidade de aulas assistidas pelo aluno: ")));

let frequenciaAulas = (aulasAssistidas / aulasDadas) * 100;
let notaGeral = (primeiraNota + segundaNota) / 2;

if (notaGeral >= 7 && frequenciaAulas >= 75) {
    alert(`O aluno foi APROVADO com nota ${notaGeral} e frequencia equivalente a ${frequenciaAulas.toFixed(1)}%`);
} else {
    alert(`O aluno foi REPROVADO com nota ${notaGeral} e frequencia equivalente a ${frequenciaAulas.toFixed(1)}%`);
}