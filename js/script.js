console.log("Witam wszystkich cieplutko! :)");

let button = document.querySelector(".js-showQuoteButton");
let quoteAction = document.querySelector(".js-quoteAction");


let showText = "Ukryj cytat";
let hideText = "Chcesz poznać mój ulubiony cytat?";

button.innerText = hideText;

button.addEventListener("click", () => {
    quoteAction.classList.toggle("quote--hidden");
    button.innerText = quoteAction.classList.contains("quote--hidden") ? hideText : showText;
});