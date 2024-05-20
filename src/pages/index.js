import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar';



export default function Home() {
  return (
    <>
      <Head>
        <title>Gary Stroup Developer</title>
        <meta name="description" content="Gary Stroup web development portfolio" />
        <meta name="description" content="Gary Stroup frontend developer" />
        <meta property="og:site_name" content="Gary Stroup " />
        <meta property="og:title" content="Gary Stroup " />
        <meta property="og:url" content="https://www.garystroupdeveloper.com" />
        <meta property="og:type" content="website" />
        <meta itemprop="name" content="Gary Stroup " />
        <meta itemprop="url" content="https://www.garystroupdeveloper.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <img
          className='profilepic'
          src="/images/gary.jpg"
          alt="gary stroup profile picture"
        />
        <div>
          <p className={styles.introduction}>Hi! I'm Gary</p>
          <p className={styles.details}>I am a process engineer by day and self-taught software developer by night</p>
          <div className={styles.details}>
            <p>Process engineering and software development allow me to blend analytical skills with creativity.</p>
            <p>Both allow me to create solutions that provide a positive impact in the lives of others.</p>
          </div>
        </div>
      </main>
      
    </>
  )
}