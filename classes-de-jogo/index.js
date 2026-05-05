class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    //Ataque do herói
    attack() {
        let attackDescription = "";

        // Escolhe o ataque baseado na classe do herói
        if (this.type === "mago") {
            attackDescription = "magia";
        } else if (this.type === "guerreiro") {
            attackDescription = "espada";
        } else if (this.type === "monge") {
            attackDescription = "artes marciais";
        } else if (this.type === "ninja") {
            attackDescription = "shuriken";
        } else {
            attackDescription = "os punhos";
        }

        // Exibe a mensagem final
        console.log(`O ${this.type} atacou usando ${attackDescription}`);
    }
}

// --- TESTE DE EXECUÇÃO ---
// Criei dois heróis
let meuMago = new hero("Merlin", 150, "mago");
let meuNinja = new hero("Hanzo", 30, "ninja");
let meuAndarilho = new hero("Puna", 20, "andarilho");

// Chamei o método de ataque para cada herói
meuMago.attack();
meuNinja.attack();
meuAndarilho.attack();