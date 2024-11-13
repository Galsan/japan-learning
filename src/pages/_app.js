import "../styles/globals.css";
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
    return (
        <SessionProvider >
            <SWRConfig value={{ fetcher }}>
                <Component {...pageProps} />
            </SWRConfig>
        </SessionProvider>
    )
}
