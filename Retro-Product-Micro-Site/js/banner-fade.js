const bannerText = document.getElementById("banner-text");
const textArray = ["Experience the best sound quality", "Enjoy your favorite records", "Get lost in the music with Spin City"];

let currentIndex = 0;

function updateBannerText() {
    const nextText = textArray[currentIndex];

    bannerText.classList.add("fade-out");
    bannerText.addEventListener("animationend", () => {

        bannerText.textContent = nextText;
        bannerText.classList.remove("fade-out");
        bannerText.classList.add("fade-in");

        bannerText.addEventListener("animationend", () => {
            bannerText.classList.remove("fade-in");
        }, { once: true });

        currentIndex = (currentIndex + 1) % textArray.length;
    }, { once: true });
}

// waits 3 sec before starting
setTimeout(() => {
    updateBannerText();

    // repeats method with 4 sec intervals
    setInterval(updateBannerText, 4000);
}, 3000);