import * as React from 'react'
import Head from 'next/head'
import AppView from '../../AppView'
import Link from 'next/link'

export default class SyndromiPage extends React.Component {
    imageURL = (path) => {
        return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Kairos</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta property="og:title" content="Kairos" key="title" />
                    <meta property="og:description" content="No more ugly, non-native, custom UIs that just feel gross. Time for your weather to look beautiful. Get details without sacrificing design." key="description" />
                    <meta name="description" content="No more ugly, non-native, custom UIs that just feel gross. Time for your weather to look beautiful. Get details without sacrificing design." />
                    <meta name="robots" content="index" />
                    <meta name="language" content="English" />
                    <meta name="keywords" content="ethanlipnik, ethan, lipnik, apps, developer, designer, kairos, weather" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />

                    <meta name="twitter:title" content="Kairos" />
                    <meta name="twitter:card" value="Beautiful weather at a glance." />
                    <meta name="twitter:site" content="@KairosWeather" />
                    <meta name="twitter:creator" content="@EthanLipnik" />

                    <meta property="og:url" content="https://ethanlipnik.com/apps/kairos" />
                    <meta property="og:image" content="https://ethanlipnik.com/apps/kairos/android-chrome-512x512.png" />
                </Head>
                <Link href={"/apps/kairos/privacy"}>
                    <h1>Privacy</h1>
                </Link>
                <AppView
                    title="Kairos"
                    subtitle="Beautiful weather at a glance"
                    icon="v1622675445/Kairos_hd.png"
                    link="https://res.cloudinary.com/dz3gbu49x/image/upload/v1622675445/Kairos_hd.png"
                    details={[
                        {
                            title: "Beautiful design",
                            text: "No more ugly, non-native, custom UIs that just feel gross. Time for your weather to look beautiful. Get details without sacrificing design."
                        },
                        {
                            title: "Glanceable data",
                            text: "Easily view the weather of the places most important to you with the information most important to you. Smooth animations guide you to where you want to go."
                        },
                        {
                            title: "Privacy without worry",
                            text: "Unlike other weather apps, your location and user data are never saved and used. You are not the product. All Kairos is made for is to bring beauty back to the weather."
                        }
                    ]}
                />
            </div>
        )
    }
}