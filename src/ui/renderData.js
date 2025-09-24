const app = document.getElementById("app");

export function displayWeather(model) {
    console.log(model);
    const div = document.createElement("div");
    div.id = "weather-display";

    clearDisplay();

    const locationHeader = document.createElement("h2");
    locationHeader.textContent = capitalize(model.location);
    const currentCard = document.createElement("div");
    currentCard.className = "weather-card current";

    currentCard.appendChild(locationHeader);
    
    // const temp = document.createElement("p");
    // temp.textContent = `Current temperature in ${model.location}: ${isNaN(model.current.temp) ? "N/A" : model.current.temp + "°F"}`;
    // div.appendChild(temp);

    div.appendChild(currentCard);

    app.appendChild(div);
}

function clearDisplay() {
    const existing = document.getElementById("weather-display");
    if (existing) {
        existing.remove();
    }
}

function capitalize(words) {
    return words
                .split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(' ');
}