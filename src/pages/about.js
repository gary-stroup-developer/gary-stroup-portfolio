import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import aboutCSS from '@/styles/About.module.css';

export default function About() {
  return (
    <div className={'container'}>
      <Link className= 'link' href="/">  Home </Link>
      <div className="topSection">
        <div>
          <Image
            className={aboutCSS.aboutmeHobbyPhoto}
            src="/images/aboutmephoto1.jpg"
            alt="my wife and I on a date"
            width={300}
            height={250}
          />
        </div>
        <div>
          <h2 className={styles.introduction}>Gary Stroup</h2>
          <p className={styles.details}>
            Gary is someone who is naturally curious about the world, which drives his desire to always learn and grow as a person.
            In the past few years, Gary has spent time learning about data science, web development, UX design, and project management.
            His patience and ability to create strong bonds amongst friends and coworkers contributes to his success in a team environment.
            Some of Gary’s hobbies include reading, writing, photography, and hiking.
          </p>
        </div>
      </div>


      <div className="readingListHeader">
        Current Reading List
      </div>


      <div className="readingList">
        <section>
          <p className="title">Temple Of The Winds</p>
          <p className={styles.details}>
            Fictional story involving the quest of one man to pursue justice and lead his people.
            Involves magic, adventure, and mystery.
          </p>
        </section>
        <section>
          <p className="title">Stoicism And The Art Of Happiness</p>
          <p className={styles.details}>
            Learn to face adversity, to accept what you can’t change and change what you can
          </p>
        </section>
        <section>
          <p className="title">Mans Search For Meaning</p>
          <p className={styles.details}>
            Detailed account of life in a Nazi Death Camp providing lessons for survival and how to cope with suffering.
          </p>
        </section>
        
      </div>


      <div className={aboutCSS.hobby}>
        <Image
          className={aboutCSS.aboutmeHobbyPhoto}
          src="/images/aboutmehobby1.jpg"
          alt="restaurant bar area"
          width={300}
          height={250}
        />
        <Image
          className={aboutCSS.aboutmeHobbyPhoto}
          src="/images/aboutmehobby2.jpg"
          alt="round strawberry cheesecake"
          width={300}
          height={250}
        />
        <Image
          className={aboutCSS.aboutmeHobbyPhoto}
          src="/images/aboutmehobby3.jpg"
          alt="road leading down from mountain. Snow plowed to both sides."
          width={300}
          height={250}
        />
        <Image
          className={aboutCSS.aboutmeHobbyPhoto}
          src="/images/aboutmehobby4.jpg"
          alt="museum room recreating life in 1800's"
          width={300}
          height={250}
        />
      </div>
    </div>
  )
}