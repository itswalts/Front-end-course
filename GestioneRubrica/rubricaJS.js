//Classe contatto
class Contatto {
    constructor(nome, telefono, email){
        this.nome = nome;
        this.telefono = telefono;
        this.email = email;
    }
}

const andrea = new Contatto("Andrea", 3921111111, "andrea@esempio.it");
const elisa = new Contatto("Elisa", 38822222222, "elisa@esempio.com");
const vittorio = new Contatto("Vittorio", 344333333, "vittorio@esempio.it");

// Array di oggetti contatto
const rubrica = [andrea, elisa, vittorio];

// Funzione creaContatto
function aggiungiContatto(nome, telefono, email){
    const nuovoContatto = new Contatto(nome, telefono, email);
    rubrica.push(nuovoContatto);
}

aggiungiContatto("Marco", 32255555555, "marco@esempio.it");


console.log("Stampo contenuto rubrica: ")
//ciclo forEach che stampa ogni singolo contatto presente nell'array rubrica
function visualizzaRubrica() {
    rubrica.forEach(function(Contatto){
        console.log(Contatto);
    });
}

visualizzaRubrica();

console.log("Cerco contatto con nome 'Andrea': ");
//CercaContatto
function cercaContatto(rubrica, nome){
    rubrica.forEach(function(Contatto){
        if(Contatto === nome){
            console.log(Contatto);
        } 
    });
}

cercaContatto(rubrica, andrea);

console.log("Modifico contatto con nome 'Elisa' in 'Anna: ");
//modificaContatto
function modificaContatto(nome, nuovoNome, nuovoTelefono, nuovaEmail){
    rubrica.forEach(function(Contatto){
        if(Contatto.nome === nome){
            Contatto.nome = nuovoNome;
            Contatto.telefono = nuovoTelefono;
            Contatto.email = nuovaEmail;
        }
    });
}

modificaContatto("Elisa", "Anna", 99824321, "anna@esempio.it");
visualizzaRubrica();

console.log("Elimino contatto in rubrica con nome 'Vittorio': ");
//eliminaContatto
function eliminaContatto(rubrica, nome){
    const indice = rubrica.findIndex(function (Contatto){
        return Contatto.nome === nome;
    });
    rubrica.splice(indice, 1);
}

eliminaContatto(rubrica, "Vittorio");
visualizzaRubrica();