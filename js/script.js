{
    const toggleBackground = () => {
        const buttonElement = document.querySelector(".js-button");
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
        const buttonElement = document.querySelector(".js-button");

        buttonElement.addEventListener("click", toggleBackground);
    };

    init();
}
