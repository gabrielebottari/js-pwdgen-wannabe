const nome = prompt("inserisci il tuo nome", "nome");
console.log(nome);

const cognome = prompt("inserisci il tuo cognome", "cognome");
console.log(cognome);

const colorePreferito = prompt("inserisci il tuo colore preferito", "colore");
console.log(colorePreferito);

const password = `
    l'utente si chiama ${nome} ${cognome}
    il suo colore preferito è ${colorePreferito}
`;
console.log(password);

document.getElementById("password").innerHTML = `${nome}${cognome}${colorePreferito}114`;