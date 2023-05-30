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
                width={350}
                height={300}
                />
              </Link>
          </div>
        </section>
      </div>
      
    </div>
  )
}