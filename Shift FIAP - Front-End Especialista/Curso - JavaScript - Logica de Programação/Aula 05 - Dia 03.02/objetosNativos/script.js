//Objetos:
//Recebe tds as caracteristicas de uma classe. 
//Aguarda atributos e métodos. 

//new: evidencia ou seja, PUXA o objeto pronto e 
//aloca na variavel que eu criei.
//TODO mundo é derivado de um OBJETO

let d = new Date();
alert(d.toDateString());

let n = new Num(1000);
alert(n.valueOf());

//Objeto do tipo number:

//toFixed(1,2,3 etc): fixa um tanto de numeros das casas decimais que vai aparecer.

//toPrecision(1,2,4,5): mostra o numero com o tanto de numeros que eu defini

//toExponential(1,2,4,5): transforma seu numero em notação cientifica e coloca MAIS proximo possivel do numero que vc definiu como digito.

let n = new Number("40.0899");
//alert(n. //objeto aqui//());


//Objeto tipo STRING

//lenght
//lenght: conta os caracteres INCLUINDO os espaços.
let n = new String("Criando uma string");
alert(n.lenght);


//charAt
//charAt(4): Vai na quarta posição da minha string e pega o que está lá
//lembrando que começa do ZERO

let n = new String("Criando uma string");
alert(n.charAt(4));


//charCodeAt
//charCodeAt(0): pega o codigo do teclado (padrão Unicode) (pega o codigo de uma tecla)

let n = new String("Criando uma string");
alert(n.charCodeAt(0));

//concat: concatena alguma coisa, normalmente string
//concatena uma interpolação 
let n = new String("Criando uma string");
alert(n.concat("e concatenando com outra"));

//metodo estatico: executo sem precisar de um obj daquela classe
alert(String.fromCharCode(66));

//indexOf
//indexOf(): qual posição começa uma cadeia de string
// UMA começa na pisição 8
//lastIndexOF: pega a ultima posção de um determinado string ou etc
//que está no ultimo

let n = new String("Criando uma string");
alert(n.indexOf("uma"));

//match
//no let procura uma letra dentro de uma string e retorna a 
//propria letra

let n = new String("Criando uma string");
let x = /i/;
//procure o i dentro da string acima
alert(n.match(x));

//replace
//troca uma palavra por outra
let n = new String("Criando uma string");
alert(n.replace("string", "teste"));

//subsTring
//subsTring(12,17); ele vai pegar a cadeia de caracteres entre esses dois numeros
//incluindo espaços
let n = new String("Criando uma string");
alert(n.subsTring(12, 17));

//substr
//vai para o sexto digito e pega mais cinco caracteres
let n = new String("Criando uma string");
alert(n.substr(6, 5));

//split
//split(","[0]): procurar a virgula na string e vai recortar só o que está para frente do recorte
//0 mostra o que está a esquerda
//1 mostra o qe está a direita
let n = new String("Criando, uma, string");
alert(n.split(",")[1]);

//toUpperCase() e toLowerCase() 
// o primeiro deixa em letras maiusculas e o segundo em letras minusculas

let n = new String("Criando uma string");
alert(n.toUpperCase());
alert(n.toLowerCase());