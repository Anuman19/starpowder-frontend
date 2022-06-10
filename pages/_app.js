import Header from "../components/Header";
import Link from "next/link"
import "./_app.css"
import {useEffect} from "react";
import {getTemperature} from "../lib/api";

export default function App({ Component, pageProps }) {

    const newPageProps = {
        ...pageProps
    }

    return (
        <>
            <Header>
                <Link href="/" passHref>
                    Cool Temperatures
                </Link>
            </Header>

            <main className="page">
                <Component {...newPageProps} />
            </main>
        </>
    )
}