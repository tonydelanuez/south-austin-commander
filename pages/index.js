import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>South Austin Commander: A Friendly Magic the Gathering Group for Players in the South Austin, Texas area</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Join our Commander format Magic: The Gathering group in South Austin, Texas! We're a group of dedicated players who meet up regularly to play and socialize. Whether you're a seasoned player or just starting out, we welcome all players who are looking for a fun and friendly gaming experience. Find new friends and opponents, learn new strategies, and enjoy the thrill of playing one of the most popular and exciting formats in Magic: The Gathering."></meta>
        <meta name="keywords" content="commander, magic the gathering, MTG, EDH, South Austin, Texas, group, players, meetup, social"></meta>
      </Head>

      <main>
        <Header title="Ready to play some Commander/EDH in South Austin?" />
        <p className="description">
          We're a group of Magic the Gathering players who meet to at various places in South Austin and play the <a href="https://magic.wizards.com/en/formats/commander">Commander</a> format. New player friendly!
        </p>
        <a href="https://discord.southaustincommander.com">
          <button className="blurple-button">Come join us on Discord!</button>
        </a>
      </main>
    </div>
  )
}
