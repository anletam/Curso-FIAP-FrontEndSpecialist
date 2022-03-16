let InicioKM = parseFloat(prompt("Digite quantos KM o seu carro esta: "));
let FinalKM = parseFloat(prompt("Digite quantos KM o carro esta no final do percuso: "));
let LitrosAbastecidos = parseFloat(prompt("Digite quantos litros de gasolina foram abastecidos:"));

alert(`O seu carro usa ${FinalKM-InicioKM/LitrosAbastecidos} litros por KM.`)