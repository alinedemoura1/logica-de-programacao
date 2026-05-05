// Função que recebe os parâmetros solicitados
function calcRank(wins, losses) {
    let winBalance = wins - losses;  // Calcula o saldo
    let level = ""; // Variável para armazenar o nível do herói, que será decidido na estrutura de decisão abaixo

    // Estrutura que define o nível do herói com base no número de vitórias
    if (wins <= 10) {
        level = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
        level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        level = "Prata";
    } else if (wins >= 51 && wins <= 80) {
        level = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
        level = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    return `O Herói tem de saldo de ${winBalance} está no nível de ${level}`;
}

// Saída
let result = calcRank(60, 20);
console.log(result);