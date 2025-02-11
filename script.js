document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".header-text").innerHTML = config.headerText;
    document.querySelector(".yes-header-text").innerHTML = config.yesHeaderText;
    document.querySelector(".gif").src = config.gifURL;
    document.querySelector(".yes-gif").src = config.yesGifURL;

    let messageIndex = 0;

    document.querySelector(".no-button").addEventListener("click", function () {
        this.textContent = config.messages[messageIndex];
        messageIndex = (messageIndex + 1) % config.messages.length;

        const yesButton = document.querySelector(".yes-button");
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    });

    document.querySelector(".yes-button").addEventListener("click", function () {
        document.querySelector(".yes-container").style.display = "flex";
        document.querySelector(".container").style.display = "none";
    });
});