import Head from 'next/head'
import AppPreview from './AppPreview'

export default function Home() {
  return (
    <div className="container mx-auto md:px-40 px-5 py-10">
      <Head>
        <title>Ethan Lipnik</title>
        <meta name="description" content="Developer, designer, creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img src="https://res.cloudinary.com/dz3gbu49x/image/upload/v1622338324/Profile%20Pic.jpg" alt="Profile Picture" width={512} height={512} className="shadow rounded-xl max-w-full h-auto align-middle border-none mx-auto" />
        <h1 className="text-center text-4xl my-5 font-bold">Ethan Lipnik</h1>
      </div>
      <div className="py-5 space-y-8">
        <h2 className="text-3xl">My Apps</h2>
        <AppPreview appName="Neptune" />
      </div>
    </div>
  )
}
