/**
 * Desafio 2 Calculadora de partidas Rankeadas
 * 
 * Calcula o saldo de vitórias e o nível de um jogador em partidas rankeadas.
 *
 * @param {number} vitorias - A quantidade de vitórias do jogador.
 * @param {number} derrotas - A quantidade de derrotas do jogador.
 * @returns {string} Uma mensagem informando o saldo de vitórias e o nível do jogador.
 */

function calcularNivelRankeada(vitorias, derrotas) {
    // Calcula o saldo de vitórias.
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estrutura de decisão para determinar o nível com base nas vitórias.
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Não classificado";
    }

    // Retorna a mensagem formatada
    return `O Herói tem de saldo ${saldoVitorias} vitórias, está no nível ${nivel}.`;
}

// Exemplos de uso da função:

// Exemplo 1:
let vitoriasJogador1 = 75;
let derrotasJogador1 = 20;
let resultadoJogador1 = calcularNivelRankeada(vitoriasJogador1, derrotasJogador1);
console.log(resultadoJogador1); // Saída esperada: O Herói tem de saldo 55 está no nível Ouro.

// Exemplo 2:
let vitoriasJogador2 = 95;
let derrotasJogador2 = 10;
let resultadoJogador2 = calcularNivelRankeada(vitoriasJogador2, derrotasJogador2);
console.log(resultadoJogador2); // Saída esperada: O Herói tem de saldo 85 está no nível Diamante.

// Exemplo 3:
let vitoriasJogador3 = 101;
let derrotasJogador3 = 0;
let resultadoJogador3 = calcularNivelRankeada(vitoriasJogador3, derrotasJogador3);
console.log(resultadoJogador3); // Saída esperada: O Herói tem de saldo 101 está no nível Imortal.

// Exemplo 4:
let vitoriasJogador4 = 10;
let derrotasJogador4 = 1;
let resultadoJogador4 = calcularNivelRankeada(vitoriasJogador4, derrotasJogador4);
console.log(resultadoJogador4); // Saída esperada: O Herói tem de saldo 9 está no nível Não classificado.

// Exemplo 5:
let vitoriasJogador5 = 100;
let derrotasJogador5 = 10;
let resultadoJogador5 = calcularNivelRankeada(vitoriasJogador5, derrotasJogador5);
console.log(resultadoJogador5); // Saída esperada: O Herói tem de saldo 90 está no nível Diamante.