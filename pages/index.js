import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>South Austin Commander</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ready to play some Commander in South Austin?" />
        <p className="description">
          We're a group of Magic the Gathering players who meet to at various places in South Austin and play the <a href="https://magic.wizards.com/en/formats/commander">Commander</a> format. We're also new player friendly!
        </p>
        <a href="https://discord.southaustincommander.com">
          <button className="blurple-button">Come join us on Discord!</button>
        </a>
      </main>
    </div>
  )
}
