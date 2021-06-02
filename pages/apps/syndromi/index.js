import * as React from 'react'
import Head from 'next/head'
import AppView from '../../AppView'

export default class SyndromiPage extends React.Component {
    imageURL = (path) => {
        return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Syndromi</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta property="og:title" content="Syndromi" key="title" />
                    <meta property="og:description" content="An amazing app to watch your favorite videos, with a beautiful design, for iOS. Syndromi gives you a great YouTube viewing experience." key="description" />
                    <meta name="description" content="An amazing app to watch your favorite videos, with a beautiful design, for iOS. Syndromi gives you a great YouTube viewing experience." />
                    <meta name="robots" content="index" />
                    <meta name="language" content="English" />
                    <meta name="keywords" content="ethanlipnik, ethan, lipnik, apps, developer, designer, syndromi, youtube" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />

                    <meta name="twitter:title" content="Syndromi" />
                    <meta name="twitter:card" value="Third party YouTube client" />
                    <meta name="twitter:site" content="@EthanLipnik" />
                    <meta name="twitter:creator" content="@EthanLipnik" />

                    <meta property="og:url" content="https://ethanlipnik.com/apps/syndromi" />
                    <meta property="og:image" content="https://ethanlipnik.com/apps/syndromi/android-chrome-512x512.png" />
                </Head>
                <AppView
                    title="Syndromi"
                    subtitle="Third party YouTube Client"
                    icon="v1622405112/Syndromi.png"
                    link="https://apps.apple.com/us/app/syndromi/id1547850133"
                    details={[
                        {
                            title: "What is Syndromi?",
                            text: "An amazing app to watch your favorite videos, with a beautiful design, for iOS. Syndromi gives you a great YouTube viewing experience. Everything is private and secure."
                        },
                        {
                            title: "Features you'll love",
                            text: "A unified subscriptions feed shows the videos you want to see. A beautiful and flexible player gives you the power over the video. Play videos in Picture in Picture or in full screen."
                        },
                        {
                            title: "A bright future",
                            text: "Syndromi is already planned to have many upcoming features such as playlists, comments, recomendations, managing channels and subscriptions, and more!"
                        }
                    ]}
                />
            </div>
        )
    }
}