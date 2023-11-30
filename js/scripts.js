let nome = prompt("inserisci il tuo nome", "nome");
console.log(nome);

let cognome = prompt("inserisci il tuo cognome", "cognome");
console.log(cognome);

let colorePreferito = prompt("inserisci il tuo colore preferito", "colore");
console.log(colorePreferito);

document.getElementById("password").innerHTML = nome + cognome + colorePreferito + "114";