import * as React from 'react'
import Head from 'next/head'
import DetailView from './DetailView'

export default class NeptunePage extends React.Component {
    imageURL = (path) => {
        return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
    }

    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10 space-y-20">
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
                <div className="space-y-16">
                    <img src={this.imageURL('v1622404904/Neptune.png')} width={330} height={330} className="rounded-xl shadow-neptune mx-auto" />
                    <div className="space-y-4 p-8">
                        <h1 className="text-5xl text-center font-bold">Neptune</h1>
                        <h2 className="text-3xl text-center">Out of this world</h2>
                    </div>
                    <a href="https://apps.apple.com/us/app/neptune-for-twitter/id1506841953" target="_blank">
                        <div className="mx-auto bg-gradient-to-b from-neptune-primary to-neptune-secondary shadow-neptune rounded md:w-1/2 lg:w-1/4 w-full py-4 transform transition-transform duration-500 ease-in-out scale-100 hover:scale-90">
                            <h1 className="text-center text-4xl font-bold text-white">Get now</h1>
                        </div>
                    </a>
                </div>
                <div className="space-y-10">
                    <DetailView title="Clean user interface" text="Everything has a beautiful and functional purpose. Tweets are laid out cleanly while still delivering the details you want." />
                    <div className="flex">
                        <div className="lg:w-1/2" />
                        <DetailView reversedRotation={true} title="View where you want" text="Neptune is made for iPhone, iPad, and macOS giving a premium experience to all platforms with designs made specifically for them." />
                    </div>
                    <DetailView title="Syncronize feeds" text="Sync your feeds across all your devices so you can start right where you left off." />
                </div>
            </div>
        )
    }
}