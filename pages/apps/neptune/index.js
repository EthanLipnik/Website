import * as React from 'react'
import Head from 'next/head'
import AppView from '../../AppView'

export default class NeptunePage extends React.Component {
    imageURL = (path) => {
        return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Neptune for Twitter</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta property="og:title" content="Neptune for Twitter" key="title" />
                    <meta property="og:description" content="Neptune is a smooth and beautiful Twitter app built just for you. No more ads or non-chronological home feed. See what YOU expect to see. It's time to take control of your timeline." key="description" />
                    <meta name="description" content="Neptune is a smooth and beautiful Twitter app built just for you. No more ads or non-chronological home feed. See what YOU expect to see. It's time to take control of your timeline." />
                    <meta name="robots" content="index" />
                    <meta name="language" content="English" />
                    <meta name="keywords" content="ethanlipnik, ethan, lipnik, apps, developer, designer, neptune for twitter, neptune" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />

                    <meta name="twitter:title" content="Ethan Lipnik" />
                    <meta name="twitter:card" value="Developer, Designer, Creator" />
                    <meta name="twitter:site" content="@EthanLipnik" />
                    <meta name="twitter:creator" content="@EthanLipnik" />

                    <meta property="og:url" content="https://ethanlipnik.com/apps/neptune" />
                    <meta property="og:image" content="https://ethanlipnik.com/apps/neptune/android-chrome-512x512.png" />
                </Head>
                <AppView
                    title="Neptune"
                    subtitle="Out of this World"
                    icon="v1622675445/Neptune_hd.png"
                    link="https://apps.apple.com/us/app/neptune-for-twitter/id1506841953"
                    details={[
                        {
                            title: "Clean user interface",
                            text: "Everything has a beautiful and functional purpose. Tweets are laid out cleanly while still delivering the details you want."
                        },
                        {
                            title: "View where you want",
                            text: "Neptune is made for iPhone, iPad, and macOS giving a premium experience to all platforms with designs made specifically for them."
                        },
                        {
                            title: "Syncronize feeds",
                            text: "Sync your feeds across all your devices so you can start right where you left off."
                        }
                    ]}
                />
            </div>
        )
    }
}