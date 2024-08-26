function setFavicon() {
    const favicon = document.getElementById("favicon");
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    console.log("Dark mode detected:", darkModeMediaQuery.matches);
    
    if (darkModeMediaQuery.matches) {
        favicon.href = "Wheel-Dark.png";
        console.log("Dark mode icon set");
    } else {
        favicon.href = "Wheel-Light.png";
        console.log("Light mode icon set");
    }

    darkModeMediaQuery.addEventListener("change", (e) => {
        console.log("Color scheme changed:", e.matches ? "Dark" : "Light");
        favicon.href = e.matches ? "Wheel-Dark.png" : "Wheel-Light.png";
    });
}

setFavicon();
