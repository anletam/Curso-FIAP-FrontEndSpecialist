var numeroMes = parseInt(prompt("Digite o mes de referencia: "));
var referenciaMes;

switch (numeroMes) {
    case 1:
        referenciaMes = "Janeiro";
        break;
    case 2:
        referenciaMes = "Fevereiro";
        break;
    case 3:
        referenciaMes = "Março";
        break;
    case 4:
        referenciaMes = "Abril";
        break;
    case 5:
        referenciaMes = "Maio";
        break;
    case 6:
        referenciaMes = "Junho";
        break;
    case 7:
        referenciaMes = "Julho";
        break;
    case 8:
        referenciaMes = "Agosto";
        break;
    case 9:
        referenciaMes = "Setembro";
        break;
    case 10:
        referenciaMes = "Outubro";
        break;
    case 11:
        referenciaMes = "Novembro";
        break;
    case 12:
        referenciaMes = "Dezembro";
        break;
    default:
        referenciaMes = "Opa, esse mes que voce digitou nao existe. Tente novamente."

}

alert(referenciaMes);