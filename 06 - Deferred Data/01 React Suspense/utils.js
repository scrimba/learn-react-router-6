export async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

export async function getWeather() {
    await sleep(2000)
    const res = await fetch(
        "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Salt+Lake+City&units=imperial"
    )
    if (!res.ok) {
        throw {
            error: "Problem getting weather info",
        }
    }
    const data = await res.json()
    return data
}