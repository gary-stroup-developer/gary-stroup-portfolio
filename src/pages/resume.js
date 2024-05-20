import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Resume.module.css';
import home from '@/styles/Home.module.css';

export default function Resume() {
  return (
    <div className='container'>
      <Link className= 'link' href="/">  Home </Link>
      <div className={home.flex}>
        <div className='flex-container'>
          <Image
            className={styles.resumePhoto}
            src="/images/gary-stroup-resume.jpeg"
            alt="resume photo"
            width={350}
            height={300}
          />
        </div>
        <div>
          <h2 className={home.introduction}>Gary Stroup</h2>
          <p className={home.details}>
            Gary is a highly motivated process engineer and self-taught web developer with a strong focus on delivering value.
            By leveraging his technical expertise and problem-solving skills, Gary aims to streamline and optimize operations,
            resulting in enhanced efficiency and productivity. Committed to staying at the forefront of industry trends, he
            actively seeks out opportunities to learn new concepts and acquire additional skills, maintaining a continuous
            improvement mindset to consistently deliver exceptional results.
          </p>
        </div>
      </div>
      <div className={home.flex}>
        <div className='container'>
          <p className={styles.header}>Education</p>
          <ul className={styles.skillsList}>
            <li>University of California, Riverside</li>
            <li>B.S. Bioengineering</li>
            <li>2010</li>
          </ul>
        </div>
        <div className='container'>
          <p className={styles.header}>Experience</p>
          <ul className={styles.skillsList}>
            <li>Angela Yu 2021 Web Development Bootcamp</li>
            <li>Udemy 2021</li>
          </ul>
        </div>
        <div className='container'>
          <p className={styles.header}>Technical Skills</p>
          <ul className={styles.skillsList}>
            <li>Sketch</li>
            <li>CSS3 + HTML5</li>
            <li>JavaScript</li>
            <li>React / NextJS</li>
            <li>Golang</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Canva</li>
            <li>UX Design</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Version Control</li>
          </ul>
        </div>
        <div className='container'>
          <p className={styles.header}>Other Skills</p>
          <ul className={styles.skillsList}>
            <li>Project Management</li>
            <li>Lean Six Sigma Green Belt</li>
            <li>Communication</li>
            <li>Organization</li>
            <li>Teacher/Mentor to empower others</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

