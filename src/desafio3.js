// Definição da classe Heroi.
class Heroi {
     // Construtor para inicializar as pripriedades do herói.
     constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar.
    atacar(){
        let ataqueDescricao = ""; // Variável para armazenar a descrição do ataque.

        // Estrutura de decisão para determinar o tipo de ataque.
        switch (this.tipo) {
            case "mago":
                ataqueDescricao = "magia";
                break;
            case "guerreiro":
                ataqueDescricao = "espada";
                break;
            case "monge":
                ataqueDescricao = "artes marciais";
                break;
            case "ninja":
                ataqueDescricao = " shuriken";
                break;
            default:
                ataqueDescricao = "um ataque desconhecido";
        }

        // Exibe a mensagem do ataque.
        console.log(`O ${this.tipo} atacou usando ${ataqueDescricao}.`);
    }
}

// Exemplo de uso da classe:

// Criando uma instância de um herói do tipo mago.
const heroi1 = new Heroi("Merlin", 150, "mago");
heroi1.atacar(); // Saída esperada: O mago atacou usando usou magia.

// Criando uma instância de um herói do tipo guerreiro.
const heroi2 = new Heroi("Arthur", 30, "guerreiro");
heroi2.atacar(); // Saída esperada: O guerreiro atacou usando usou espada.

// Criando uma instância de um herói do tipo monge.
const heroi3 = new Heroi("Lee", 45, "monge");
heroi3.atacar(); // Saída esperada: O monge atacou usando usou artes marciais.

// Criando uma instância de um herói do tipo ninja.
const heroi4 = new Heroi("Hanzo", 28, "ninja");
heroi4.atacar(); // Saída esperada: O ninja atacou usando usou shuriken.

// Criando uma instância de um herói do tipo desconhecido.
const heroi5 = new Heroi("Legolas", 22, "arqueiro");
heroi5.atacar(); // Saída esperada: O herói arqueiro atacou usando um ataque desconhecido.