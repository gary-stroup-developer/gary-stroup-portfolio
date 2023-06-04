import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';


export default function Projects() {
  return (
    <div className={'container'}>
      <Link className='link' href="/">  Home </Link>
      <h1 className={styles.title}>Projects</h1>
      <div className='container'>
        <section className='flex-container'>
          <h1 className={styles.projectHeader}>Job Management Database</h1>
          <div>
            <Link className='link' href="/lims">    
              <Image
                className={styles.projectImage}
                src="/images/login.svg"
                alt="login screen of the application."
                width={600}
                height={450}
                />
              </Link>
          </div>
        </section>
        <section className='flex-container'>
          <h1 className={styles.projectHeader}>Frontend Mentor Challenge: Space Tourism</h1>
          <div>
            <Link className='link' href="/spaceTourism">    
              <Image
                className={styles.projectImage}
                src="/images/space-tourism.png"
                alt="a frontend mentor challenge of creating a furniture store landing page."
                width={600}
                height={450}
                />
            </Link>
           
          </div>
        </section>
      </div>
      
    </div>
  )
}
