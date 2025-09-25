function dayName(isoDate) {
    try {
        return new Date(isoDate + "T00:00").toLocaleDateString(undefined, { weekday: "short" });
    } catch { return""; }
}

async function iconUrlFor(iconName) {
    const mod = await import(
        `../assets/vendor/weathericons/4th-set-color/${iconName}.png`
    );
    return mod.default;
}

const fmt = (n) => Number.isFinite(n) ? Math.round(n) + "°" : "—";

export async function renderForecast(ul, items) {
    const cards = await Promise.all(items.map(async (it) => {
    const url = await iconUrlFor(it.icon);   // async
    return `
      <li class="card">
        <div class="day">${dayName(it.date)}</div>
        <img class="icon" alt="${it.description ?? ""}" src="${url}">
        <div><span class="hi">${fmt(it.high)}</span> <span class="lo">/ ${fmt(it.low)}</span></div>
      </li>`;
     }));
    ul.style.setProperty("--days", items.length || 1);
    ul.innerHTML = cards.join("");
}
