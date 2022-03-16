//Array é uma constante, é declarado com uma instrução conts
//Dentro do array vai uma coleção de valores

//Array de strings
//ARRAY é um objeto
//Declarando o array e buscando ele
//Começa na posição 0


//UM VETOR É UM OBJETO NO JS

const carros = ["Renegade", "Toro", "Ranger"];

//De outro jeito para declarar
const carros = [
    "Renegade",
    "Toro",
    "Ranger"
];


//Array vazio
const carros = [];

//Declarando arrays e populando ele
carros = [0] = "Renegade";
carros = [0] = "Touro";
carros = [0] = "Ranger";


// está sendo utilizada a classe array
const carros = new Array("Renegade", "Toro", "Ranger");


//Acessando um elemento de um array 
//Pegar um elemento das posições

const carros = ["Renegade", "Toro", "Ranger"];
let x = carros[0]; //pegando um elemento que está na posição zero. (Renegade)
alert(x);


//Alterar um elemento no meu array

const carros = ["Renegade", "Toro", "Ranger"];
let x = carros[0];

//Esta indo no vetor zero e trocando o valor do zero
carros[0] = "Onix";

//Mais direto 
carros[0] = "Onix";
alert(carros[0]);


//Acessar todo o vetor
const carros = ["Renegade", "Toro", "Ranger"];
alert(carros);


//Guarda string e numero da mesma forma
//Pode guardar o que vc quiser
const pessoas = ["Jose", "Rua X", 46];
alert(pessoas);


//Como organizar os vetores
//Usar a chave e não o colchetes se quiser puxar pelo nome do vetor e não pela posição dele
const pessoas = { primeiroNome: "Jose", endereco: "Rua X", Idade: 46 };
alert(pessoas.primeiroNome);


//Consigo guardar um array dentro de outro array

const meuArray = [];
const carros = ["Renegade", "Toro", "Ranger"];

meuArray[0] = "Alex";
meuArray[1] = carros;
alert(meuArray[0]);

//Muita coisa pronta, propriedades e metodos que podem ser usados dentro do array
//Chamar o lenght daquele vetor vai chamar o tamanho dele
const frutas = ["Banana", "Laranja", "Maça", "Manga"];
alert(frutas.lenght);

//Pegar sempre uma posção diferente
const frutas = ["Banana", "Laranja", "Maça", "Manga"];
let posicao = parseInt(prompt("Digite a posição:"))
alert(frutas[posicao]);

//Acrescentar um item ao fim da lista
const frutas = ["Banana", "Laranja", "Maça", "Manga"];
alert(frutas);
frutas.push("Morango");
alert(frutas);

// Tira o ultimo valor do array
const frutas = ["Banana", "Laranja", "Maça", "Manga"];
alert(frutas);
frutas.pop();
alert(frutas);

// Tira o primeiro valor do array
const frutas = ["Banana", "Laranja", "Maça", "Manga"];
alert(frutas);
frutas.shift();
alert(frutas);

// Acrescenta no incio da lista
const frutas = ["Banana", "Laranja", "Maça", "Manga"];
alert(frutas);
frutas.unshift("Morango");
alert(frutas);

// Abrir meu vetor para inseir no meio 
//A primeiro parametro é a posção onde serão inseridos
//Segundo paramentro é quantos elementos vc quer remover
//Adicione a partir do segundo sem apagar nada
//SE você inserir que quer remover: Sempre remove depois do que você inseriu
const frutas = ["Banana", "Laranja", "Maça", "Manga"];
alert(frutas);
frutas.slice(2, 0, "limão", "kiwi");
alert(frutas);