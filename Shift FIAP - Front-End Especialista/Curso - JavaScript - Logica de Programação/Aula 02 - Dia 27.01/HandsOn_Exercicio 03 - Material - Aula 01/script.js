let NotaAC = parseFloat(prompt("Digite a Nota AC: "));
let NotaAvaliacaoGeral = parseFloat(prompt("Digite a Nota Avaliacao Geral: "));
let NotaAvaliacaoTri = parseFloat(prompt("Digite a Nota Avaliacao Trimestral: "));

let MediaGeral = (NotaAC * 2 + NotaAvaliacaoGeral + NotaAvaliacaoTri * 7) / 10;

alert(`A sua media final seria: ${(MediaGeral}`);