const URL = "https://pokeapi.co/api/v2/pokemon/ditto"

export async function getTemperature() {
    const response = await fetch(`${URL}`)

    if (!response.ok) {
        return Promise.reject(response)
    }

    const data = await response.json()
    return data
}