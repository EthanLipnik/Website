import * as React from 'react'
import Head from 'next/head'

export default class NeptunePage extends React.Component {
    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10">
                <Head>
                    <title>Neptune for Twitter</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta property="og:title" content="Neptune for Twitter" key="title" />
                    <meta property="og:description" content="Neptune is a smooth and beautiful Twitter app built just for you. No more ads or non-chronological home feed. See what YOU expect to see. It's time to take control of your timeline." key="description" />
                    <meta name="description" content="Developer, Designer, Creator" />
                    <meta name="robots" content="index" />
                    <meta name="language" content="English" />
                    <meta name="keywords" content="ethanlipnik, ethan, lipnik, apps, developer, designer" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />

                    <meta name="twitter:title" content="Ethan Lipnik" />
                    <meta name="twitter:card" value="Developer, Designer, Creator" />
                    <meta name="twitter:site" content="@EthanLipnik" />
                    <meta name="twitter:creator" content="@EthanLipnik" />

                    <meta property="og:url" content="https://ethanlipnik.com" />
                    <meta property="og:image" content="https://ethanlipnik.com/android-chrome-512x512.png" />
                </Head>
            </div>
        )
    }
}