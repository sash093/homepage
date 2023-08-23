{
    const welcome = () => {
        console.log("Welcome!");
    };

    const buttonElement = document.querySelector(".js-button");

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const themeNameElement = document.querySelector(".js-themeName");

        bodyElement.classList.toggle("darkBackgroundWrapper");
        buttonElement.classList.toggle("header__button--light");
        themeNameElement.innerText = bodyElement.classList.contains(
            "darkBackgroundWrapper"
        )
            ? "jasny"
            : "ciemny";
    };

    const init = () => {
        buttonElement.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
