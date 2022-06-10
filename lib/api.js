const TempURL = "https://pokeapi.co/api/v2/pokemon"
const HumidityURL = "https://pokeapi.co/api/v2/pokemon"
const PressureURL = "https://pokeapi.co/api/v2/pokemon"

export async function getTemperature() {
    const response = await fetch(`${TempURL}/${Math.floor(Math.random() * 151 + 1)}`)

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function getHumidity() {
    const response = await fetch(`${HumidityURL}/${Math.floor(Math.random() * 151 + 1)}`)

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function getPressure() {
    const response = await fetch(`${PressureURL}/${Math.floor(Math.random() * 151 + 1)}`)

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}