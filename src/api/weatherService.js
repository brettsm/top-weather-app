const API_KEY = process.env.API_KEY;
const BASE = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" // needs [location]?key=API_KEY

export async function getWeatherIn(cityName) {
    const safeCity = encodeURIComponent(normalizeCity(cityName));
    const completeUrl = buildUrl(BASE, safeCity, API_KEY);
    const response = await fetch(completeUrl);
    if (!response.ok) {
        let detail = "";
        try {
            detail = (await response.text()).slice(0, 120);
        } catch {}
        throw new Error(`Weather lookup failed (${response.status}) ${detail}`);
    }
    const weatherData = await response.json();
    console.log(weatherData);
    return mapToModel(weatherData);
}

function mapToModel(raw) {
    const current = raw?.currentConditions ?? {};
    const days = Array.isArray(raw?.days) ? raw.days : [];
    return {
        location:   raw?.resolvedAddress ?? "",
        current: {
            temp:           Number(current.temp ?? NaN),
            description:    current.conditions ?? "",
            icon:           current.icon ?? "",
        },
        forecast: days.slice(0, 3).map(d => ({
            date:   d?.datetime ?? "",
            low:    Number(d?.tempmin ?? NaN),
            high:    Number(d?.tempmax ?? NaN),
            icon:   d?.icon ?? ""
        }))
    };
}

function buildUrl(base, endpoint, key) {
   return base + endpoint + "?key=" + key;
}

function normalizeCity(input) {
    return input
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[\u2018\u2019]/g, "'")   // ’ → '
    .replace(/[\u201C\u201D]/g, '"');  // ” → "
}