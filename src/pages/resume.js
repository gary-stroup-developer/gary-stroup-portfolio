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
            Gary is a self-taught web developer with knowledge to build full-stack applications.
            Gary is focusing on adding value at his current employer by building a job management application 
            for his department. 
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
            <li>Project Management</li>
          </ul>
        </div>
        <div className='container'>
          <p className={styles.header}>Soft Skills</p>
          <ul className={styles.skillsList}>
            <li>Team Work</li>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Organization</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

