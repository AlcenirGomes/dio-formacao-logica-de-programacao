//  Desafio Classificador de nível de Herói

// Variáveis: nome e XP do herói.
// Para satisfazer  o requisito de "Laços de repetição".
// Vamos simular uma lista de heróis.

const herois = [
    { nome: "Aragorn", xp: 8500 },
    { nome: "Legolas", xp: 7500 },
    { nome: "Gimli", xp: 4500 },
    { nome: "Frodo", xp: 950 },
    { nome: "Gandalf", xp: 10001 },
    { nome: "Samwise", xp: 1500 },
    { nome: "Boromir", xp: 6500 },
    { nome: "Pippin", xp: 1000 }
];

// Laço de repetição para processar cada herói da lista.

for (let i = 0; i < herois.length; i++) {
    // Armazenando o nome e a quantidade de experiência (XP) de um herói.
    const nomeHeroi = herois[i].nome;
    const xpHeroi = herois[i].xp;
    let nivelHeroi = ""; // Variável para armazenar o nível do herói.

    // Classificador de nível de herói.

    if (xpHeroi < 1000) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {            // Ouro (abrange 5001 - 7000).
        nivelHeroi = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {            // Platina Diamante (abrange 7001 - 8000).
        nivelHeroi = "Platina Diamante";
    } else if (xpHeroi >= 8001 && xpHeroi <= 10000) {           // Imovel (abrange 8001 - 10000).
        nivelHeroi = "Imortal";
    } else if (xpHeroi >= 10001) {
        nivelHeroi = "Radiante";                                // Radiante (abrange > 10001).
    } else {
        nivelHeroi = "Não classificado (XP: " + xpHeroi + ")";  // Não classificado.
    }

    // Saida
    // Ao final deve ser exibir uma mensagem:
    // "O herói " + nomeHeroi + " possui o nível " + nivelHeroi + "."
    console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + ".");
}