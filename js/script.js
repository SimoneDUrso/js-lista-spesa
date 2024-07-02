// LISTA DELLA SPESA
const ingredienti = ["spaghetti", "uova", "pecorino", "guanciale", "pepe"]

// RECUPERO L'ELEMENTO CHE DEVE CONTENERE LA MIA LISTA DELLA SPESA
const lista_spesa = document.getElementById("lista-spesa");

// CICLO L'ARRAY CON UN WHILE
let i = 0;
while (i < ingredienti.length) {

    // CREO IL LIST-ITEM
    const li = document.createElement("li");

    // INSERIMENTO DEL TESTO ALL'INTERNO
    li.innerText = ingredienti[i];

    // APPENDO IL LIST-ITEM DENTRO LA UL
    lista_spesa.append(li);

    i++;
}