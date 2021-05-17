{
    const welcome = () => {
        console.log("Witam wszystkich serdecznie! :)");
    }
    welcome();

    const onQuoteShowClick = () => {
        const button = document.querySelector(".js-showQuoteButton");
        const hideText = "Chcesz poznać mój ulubiony cytat?";
        const showText = "Ukryj cytat";
        button.innerText = hideText;
        const quoteAction = document.querySelector(".js-quoteAction");
        quoteAction.classList.toggle("quote--hidden");
        button.innerText = quoteAction.classList.contains("quote--hidden") ? hideText : showText;
    };

    const init = () => {
        const button = document.querySelector(".js-showQuoteButton");
        const hideText = "Chcesz poznać mój ulubiony cytat?";
        button.innerText = hideText;
        button.addEventListener("click", onQuoteShowClick);
    };
    init();
}