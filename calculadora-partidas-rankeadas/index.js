// Função que recebe os parâmetros solicitados
function calcRank(wins, losses) {
    let winBalance = wins - losses;  // Calcula o saldo
    let level = ""; // Variável para armazenar o nível do herói, que será decidido na estrutura de decisão abaixo

    // Estrutura que define o nível do herói com base no número de vitórias
    if (winBalance <= 10) {
        level = "Ferro";
    } else if (winBalance >= 11 && winBalance <= 20) {
        level = "Bronze";
    } else if (winBalance >= 21 && winBalance <= 50) {
        level = "Prata";
    } else if (winBalance >= 51 && winBalance <= 80) {
        level = "Ouro";
    } else if (winBalance >= 81 && winBalance <= 90) {
        level = "Diamante";
    } else if (winBalance >= 91 && winBalance <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    return `O Herói tem de saldo de ${winBalance} está no nível de ${level}`;
}

// Saída
let result = calcRank(60, 20);
console.log(result);