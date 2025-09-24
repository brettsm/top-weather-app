const app = document.getElementById("app");

export function displayWeather(model) {
    console.log(model);
    const div = document.createElement("div");
    div.id = "weather-display";

    clearDisplay();

    const temp = document.createElement("p");
    temp.textContent = `Current temperature in ${model.location}: ${isNaN(model.current.temp) ? "N/A" : model.current.temp + "°F"}`;
    div.appendChild(temp);

    app.appendChild(div);
}

function clearDisplay() {
    const existing = document.getElementById("weather-display");
    if (existing) {
        existing.remove();
    }
}