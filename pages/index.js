import Head from 'next/head'
import AppPreview from './Views/AppPreview'
import AppCard from './Views/AppCard'

export default function Home() {

  const imageURL = (path) => {
    return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
  }

  return (
    <div className="container mx-auto md:px-40 px-5 py-10">
      <Head>
        <title>Ethan Lipnik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta property="og:title" content="Ethan Lipnik" key="title" />
        <meta property="og:description" content="Developer, Designer, Creator" key="description" />
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
      <div>
        <img src="https://res.cloudinary.com/dz3gbu49x/image/upload/v1622338324/Profile%20Pic.jpg" alt="Profile Picture" width={512} height={512} className="shadow rounded-xl max-w-full h-auto align-middle border-none mx-auto" />
        <h1 className="text-center text-4xl my-5 font-bold">Ethan Lipnik</h1>
      </div>
      <div className="py-5 space-y-20">
        <div className="space-y-8">
          <h2 className="text-3xl">My Apps</h2>
          <div className="space-y-20">
            <AppPreview appName="Neptune" imageURL={imageURL("v1622404904/Neptune.png")} gradient={["neptune-primary", "neptune-secondary"]} description="Neptune is a smooth and beautiful Twitter app built just for you. No more ads or non-chronological home feed. See what YOU expect to see. It's time to take control of your timeline." />
            <AppPreview reversedRotation={true} appName="Syndromi" imageURL={imageURL("v1622405112/Syndromi.png")} gradient={["syndromi-primary", "syndromi-secondary"]} description="An amazing app to watch your favorite videos, with a beautiful design, for iOS. Syndromi gives you a great YouTube viewing experience." />
            <AppPreview appName="Kairos" imageURL={imageURL("v1622405112/Kairos.png")} gradient={["kairos-primary", "kairos-secondary"]} description="Kairos is a beautiful weather app that brings accurate and important information at a glance. See what you need to see without any complex layouts and weird interfaces." />
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl">In Development</h2>
          <div className="lg:flex">
            <AppCard appName="Kano" imageURL={imageURL('v1622405113/Kano.png')} gradient={['kano-primary', 'kano-secondary']} />
            <AppCard appName="Sakka" imageURL={imageURL('v1622405112/Sakka.png')} gradient={['sakka-primary', 'sakka-secondary']} reversedRotation={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
