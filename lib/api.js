const URL = "http://78.46.95.141:8000"

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