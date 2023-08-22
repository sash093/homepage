console.log("Hello!");

let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let themeNameElement = document.querySelector(".js-themeName");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("darkBackgroundWrapper");
    buttonElement.classList.toggle("header__button--light");
    themeNameElement.innerText = bodyElement.classList.contains(
        "darkBackgroundWrapper"
    )
        ? "jasny"
        : "ciemny";
});
