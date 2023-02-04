// Fie următorul string

let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu";

//1.1 Verifica daca numele “Daniel” se afla pe lista
//1.2 Dacă numele “Daniel” se afla pe lista, modifica string-ul, astfel incat in locul lui “Daniel” să fie “Gigel”

// 1.1
console.log(badKids.includes("Daniel"));

// 1.2
badKids = badKids.replace("Daniel", "Gigel");
console.log(badKids);

// Fie urmatorul string

const testGrades = "9.80/6.85/9.10/7.80/8.20";
//Sa se calculeze media aritmetica a notelor
//TIP: Transforma elementele in array si apoi itereaza prin array

const gradesArray = testGrades.split("/");
console.log(gradesArray); // doar pt a verifica daca valorile sunt afisate corect in array-uri.


const mediaAritmetica = gradesArray.reduce((acc, curr) => acc + parseFloat(curr), 0) / gradesArray.length;
console.log(mediaAritmetica);


//Fie urmatorul obiect
const props = {
    nume: 'Minge fotbal Nike T90',
    price: 220,
    currency: "RON",
    brand: "Nike"
}
//3.1 Destructureaza din obiect urmatoarele proprietati: name, price, currency
//3.2 Folosind proprietatile destructurate, afiseaza un mesaj in forma “Produsul {name} are pretul {price}”

const { nume, price, currency } = props
console.log(nume, price, currency);

const message = `Produsul ${nume} are pretul de ${price} ${currency}.`;
console.log(message);

// Fie urmatorul obiect

const additionalProps = {
    isAvailable: true
}

//Creeaza un obiect nou, care sa contina proprietatile
//obiectelor props si aditionalProps

const combinedProps = Object.assign({}, props, additionalProps);
console.log(combinedProps);

/*
Sa se scrie un regex pentru a valida daca un string este un CNP valid.
Un CNP este valid daca respecta urmatoarele reguli:

Formatul este SAALLZZJJNNNC, unde 
S reprezinta o valoare intre 1 si 8
AA reprezinta o valoare intre 00 si 99
LL reprezinta o luna valida, valoare intre 01 si 12
ZZ reprezinta ultimele dou cifre ale anului, valoare intre 00 si 99
JJ reprezinta codul judetului, valoare intre 01 si 52
NNN reprezinta orice numar intre 001 si 999
C reprezinta orice cifra intre 0 si 9

*/

/^[1-8][0-9]{2}(0[1-9]|1[0-2])([0-9]{2})([0-9]{2}|52)([0-9]{3})[0-9]$/


//Cerinte optionale:
//Sa se scrie o functie cu un numar nedeterminat de parametri.
//Primul parametru va reprezenta o descriere a operatiei(un string),
// care va fi afisat, iar restul de parametrii vor fi numere reale.
// Sa se inmulteasca aceste numere si sa se afiseze descrierea
// ex apelare
//multiply("Inmultire", 1, 2, 3) // va produce
// afiseaza: `Inmultire: 6` 6 find 1*2*3

function multiply(description, ...numbers) {
    let result = 1;
    for (const num of numbers) {
      result *= num;
    }
    console.log(`${description}: ${result}`);
  }
multiply("Inmultire", 1, 2, 3)


// Verificare ca sa inteleg ce face for-ul vietii
const numbers = [1, 2, 3];

for (const num of numbers) {
  console.log(num);
}

//Fie urmatorul array
const values = [-1, 100, -500, 2, 3, 4, 5];
//
//Folosind spread operator, sa se afiseze cea mai mica valoare din array
console.log(Math.min(...values))