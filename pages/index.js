import styles from "./index.module.css"
import {useEffect, useState} from "react";
import {getHumidity, getPressure, getTemperature} from "../lib/api";

export default function IndexPage() {

    const [temp, setTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [pressure, setPressure] = useState(0)

    useEffect(() => {
        const loadTemperature = async () => {
            try {
                const temp = await getTemperature()
                setTemp(temp)
            } catch (e) {
                alert("Could not load temperature!")
            }
        }
        const loadHumidity = async () => {
            try {
                const humidity = await getHumidity()
                setHumidity(humidity)
            } catch (e) {
                alert("Could not load humidity!")
            }
        }
        const loadPressure = async () => {
            try {
                const pressure = await getPressure()
                setPressure(pressure)
            } catch (e) {
                alert("Could not load pressure!")
            }
        }
        loadTemperature()
        loadHumidity()
        loadPressure()
    }, [])

    async function loadNewTemperature() {
        try {
            const temp = await getTemperature()
            setTemp(temp)
        } catch (e) {
            alert("Could not load temperature!")
        }
    }

    async function loadNewHumidity() {
        try {
            const humidity = await getHumidity()
            setHumidity(humidity)
        } catch (e) {
            alert("Could not load humidity!")
        }
    }

    async function loadNewPressure() {
        try {
            const pressure = await getPressure()
            setPressure(pressure)
        } catch (e) {
            alert("Could not load pressure!")
        }
    }

    return (
        <div className={styles.index}>
            <h1 className={styles.title}>Data</h1>

            <h2 className={styles.title}>Temperature</h2>
            <p className={styles.text}>{temp}°C</p>
            <button className={styles.button} onClick={loadNewTemperature}>Reload!</button>

            <h2 className={styles.title}>Humidity</h2>
            <p className={styles.text}>{humidity}%</p>
            <button className={styles.button} onClick={loadNewHumidity}>Reload!</button>

            <h2 className={styles.title}>Pressure</h2>
            <p className={styles.text}>{pressure} Pa</p>
            <button className={styles.button} onClick={loadNewPressure}>Reload!</button>
        </div>
    )
}
