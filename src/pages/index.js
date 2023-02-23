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
          <p className={styles.details}>I am a self-taught web developer </p>
          <div className={styles.details}>
            <p>I enjoy writing code to build statuc websites and dynamic web applications</p>
            <p>You can find my blogs on Medium, where I share my knowledge of web development</p>
          </div>
        </div>
      </main>
      
    </>
  )
}