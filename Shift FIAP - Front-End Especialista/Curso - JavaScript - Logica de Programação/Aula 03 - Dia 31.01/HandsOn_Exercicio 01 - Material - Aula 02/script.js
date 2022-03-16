var ValorX = (parseInt(prompt("Ola, digite o tamanho do lado esquerdo: ")));
var ValorY = (parseInt(prompt("Ola, digite o tamanho do lado direito: ")));
var ValorZ = (parseInt(prompt("Ola, digite o tamanho base: ")));

if (ValorX < (ValorY + ValorZ) && ValorY < (ValorX + ValorZ) && ValorZ < (ValorX + ValorY)) {
    alert("Isso e um triangulo!");
} else if (ValorX == ValorY && ValorX == ValorZ) {
    alert("Isso e um triangulo equilatero!");
} else if (ValorX == ValorY || ValorX == ValorZ || ValorY == ValorX || ValorY == ValorZ || ValorZ == ValorX || ValorZ == ValorY) {
    alert("Isso e um triangulo isosceles!");
} else if (!(ValorX == ValorY || ValorX == ValorZ || ValorY == ValorX || ValorY == ValorZ || ValorZ == ValorX || ValorZ == ValorY)) {
    alert("Isso e um triangulo escaleno!");
} else {
    alert("Isso nao e um triangulo!");
}