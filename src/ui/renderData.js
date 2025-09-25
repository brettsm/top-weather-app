const app = document.getElementById("app");


// weatherDisplay
//  -> currentCard
//  -> forecastDiv
//      --> day1 forecast | day2 forecast | day3 forecast

export async function displayWeather(model) {
    console.log(model);
    const div = document.createElement("div");
    div.id = "weather-display";

    clearDisplay();

    const currentCard = document.createElement("div");
    currentCard.className = "weather-card current";

    const locationHeader = document.createElement("h3");
    locationHeader.className = "current location";
    locationHeader.textContent = capitalize(model.location);
    currentCard.appendChild(locationHeader);

    const currentTemp = document.createElement("h2");
    currentTemp.className = "current temp";
    currentTemp.textContent = model.current.temp;
    currentCard.appendChild(currentTemp);
    
    const currentConditions = document.createElement("h3");
    currentConditions.className = "current conditions";
    currentConditions.textContent = capitalize(model.current.description);
    currentCard.appendChild(currentConditions);

    const currentTempRangeDiv = document.createElement("div");
    currentTempRangeDiv.className = "current temp-range";

    const currentLowTemp = document.createElement("p");
    currentLowTemp.className = "current low-temp";
    currentLowTemp.textContent = "LOW: " + model.forecast[0].low;
    currentTempRangeDiv.appendChild(currentLowTemp);

    const currentHighTemp = document.createElement("p");
    currentHighTemp.className = "current high-temp";
    currentHighTemp.textContent = "HIGH: " + model.forecast[0].high;
    currentTempRangeDiv.appendChild(currentHighTemp);

    currentCard.appendChild(currentTempRangeDiv);

    const weatherIcon = document.createElement("img");
    weatherIcon.src = await iconUrl(model.current.icon);

    currentCard.appendChild(weatherIcon);
    
    // TODO: Use assets/vendor/weathericons/4th Set to have an img "weatherIcon" that changes based on the conditions



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

async function iconUrl(iconName) {
    const mod = await import(
        `../assets/vendor/weathericons/4th-set-color/${iconName}.png`
    );
    return mod.default;
}