console.log("Test");

class Persona {
    constructor(nome, cognome, eta){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    saluta(){
        console.log(`${this.nome} ti saluta!`);
    }
}

const persona1 = new Persona("Marco", "Esempio", 24);

persona1.saluta();

class Libro {
    constructor(titolo, autore, annoPubblicazione){
        this.titolo = titolo;
        this.autore = autore;
        this.annoPubblicazione = annoPubblicazione;
    }

    descrizione(){
        return `${this.titolo}, ${this.autore}, ${this.annoPubblicazione}`;
    }

    static anniPassati(libro){
        let years = 2024 - libro.annoPubblicazione;
        return years;
    }

}

const libro1 = new Libro("IT", "Steven", 1984);

console.log(libro1.descrizione());
console.log(Libro.anniPassati(libro1));


class Studente extends Persona {
    constructor(nome, cognome, eta, corsoDiStudi){
        super(nome, cognome, eta);
        this.corsoDiStudi = corsoDiStudi;
    }

    descrizione(){
        return `${this.nome}, ${this.cognome}, ${this.eta}, ${this.corsoDiStudi}`;
    }
}

const studente1 = new Studente("Elisa", "Rossi", 32, "Filosofia");

console.log(studente1.descrizione());