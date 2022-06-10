import styles from "./index.module.css"
import Header from "../components/Header";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getTemperature} from "../lib/api";

export default function IndexPage() {

    const [temp, setTemp] = useState()

    useEffect(() => {
        const loadTemperature = async () => {
            try {
                const temp = await getTemperature()
                setTemp(temp)
            } catch (e) {
                alert("Could not load temperature!")
            }
        }
        loadTemperature()
    }, [])

    return temp && (
        <div className={styles.index}>
            <h1>{temp.name}</h1>
            <h2>Hallo</h2>
        </div>
    )
}
