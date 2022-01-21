import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SG Covid Vaccine Expiry Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SG Covid Vaccine Expiry Checker" />
        <p className="description">
          Date of last primary series dose : 
        </p>
      </main>

      <Footer />
    </div>
  )
}
