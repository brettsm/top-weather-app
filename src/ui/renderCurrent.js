import "../styles/components/weather.css";

const app = document.getElementById("app");

export async function displayCurrentWeather(model) {


    clearDisplay();

    const currentCard = document.getElementById("current");

    const locationHeader = document.createElement("span");
    locationHeader.className = "current location";
    locationHeader.textContent = capitalize(model.location);
    currentCard.appendChild(locationHeader);

    const currentTemp = document.createElement("span");
    currentTemp.className = "current temp";
    currentTemp.textContent = model.current.temp;
    currentCard.appendChild(currentTemp);
    
    const currentConditions = document.createElement("span");
    currentConditions.className = "current conditions label";
    currentConditions.textContent = capitalize(model.current.description);
    currentCard.appendChild(currentConditions);

    const weatherIcon = document.createElement("img");
    weatherIcon.className = "icon";
    weatherIcon.alt = model.current.description;
    weatherIcon.src = await iconUrl(model.current.icon);
    currentCard.appendChild(weatherIcon);

    
    const currentTempRangeDiv = document.createElement("div");
    currentTempRangeDiv.className = "current temp-range";

    const currentLowTemp = document.createElement("span");
    currentLowTemp.className = "current low-temp";
    currentLowTemp.textContent = "LOW: " + model.forecast[0].low;
    currentTempRangeDiv.appendChild(currentLowTemp);

    const currentHighTemp = document.createElement("span");
    currentHighTemp.className = "current high-temp";
    currentHighTemp.textContent = "HIGH: " + model.forecast[0].high;
    currentTempRangeDiv.appendChild(currentHighTemp);

    currentCard.appendChild(currentTempRangeDiv);

}

function clearDisplay() {
    const existing = document.getElementById("current");
    if (existing) {
        existing.innerHTML = ``;
    }
}

function capitalize(words) {
    return words
                .split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(' ');
}

async function iconUrl(iconName) {
    const mod = await import(
        `../assets/vendor/weathericons/4th-set-color/${iconName}.png`
    );
    return mod.default;
}