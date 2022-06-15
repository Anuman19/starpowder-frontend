const URL = "http://127.0.0.1:8000"
const pokeURL = "https://pokeapi.co/api/v2/pokemon"

export async function getTemperature() {
    const response = await fetch(`${URL}/temperature`)

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function getHumidity() {
    const response = await fetch(`${URL}/humidity`)

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}

export async function getPressure() {
    const response = await fetch(`${URL}/pressure`)

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}