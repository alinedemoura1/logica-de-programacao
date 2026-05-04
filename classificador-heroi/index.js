//Classificador de nível de herói
console.log ("Classificador de nível de herói")

//Declaração de variáveis
let nomeHeroi = "Siv"  //nome do herói
let generoHeroi = "F" //gênero do herói 
let xpHeroi = 12000 //experiência do herói
let classificacao = "" //classificação do herói

//Estrutura de decisão para classificar o herói
switch (true) {

case xpHeroi <=1000:
    classificacao = "Ferro";
    break;

case xpHeroi >= 1001 && xpHeroi <= 2000:
    classificacao = "Bronze";
    break;

case xpHeroi >= 2001 && xpHeroi <= 5000:
    classificacao = "Prata";
    break;    

case xpHeroi >= 5001 && xpHeroi <= 7000:
    classificacao = "Ouro";
    break;     

case xpHeroi >= 7001 && xpHeroi <= 8000:
    classificacao = "Platina";
    break;   
    
case xpHeroi >= 8001 && xpHeroi <= 9000:
    classificacao = "Ascendente";
    break;    
    
case xpHeroi >= 9001 && xpHeroi <= 10000:
    classificacao = "Imortal";
    break; 
    
case xpHeroi >=10001:
    classificacao = "Radiante";
    break;     
}

//Estrutura de decisão para ajustar a saída com base no gênero do herói
if (generoHeroi === "F") {
    console.log (`A heroína ${nomeHeroi} tem ${xpHeroi} de experiência e é classificada como ${classificacao}.`)
}
else {
    console.log (`O herói ${nomeHeroi} tem ${xpHeroi} de experiência e é classificado como ${classificacao}.`)
}

//A saída exibe a classificação do herói com base na experiência acumulada
//Eu não havia visto esse recurso ${variável} na aula, mas o copilot sugeriu e eu achei mais clean e interessante. Só funciona usando o sinal ` de crase, e não aspas simples ou duplas.

//Fim