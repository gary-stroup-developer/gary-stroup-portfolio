import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';

const SpaceTourism = () => {
    return (
        <div className={'container'}>
            <Link className='link' href="/projects">  Projects </Link>
            <h1 className={styles.title}>Space Tourism Multi-Page Website</h1>
            <h3 className={styles.subtitle}>Frontend Mentor Challenge</h3>
            <div className='flex-container margin'> 
                <Image
                    className={styles.projectImage}
                    src="/images/destination.png"
                    alt="the destination page of the space tourism website. The destination shown is Mars"
                    width={600}
                    height={450}
                    />
            </div>
            <div className='container'>
                <p className={styles.projectSummary}>
                    This project is part of the frontend Mentor challenge. The goal of this project was to create a website based on
                    a given design. I did not use any frameworks for this project. The tools used was HTML, CSS, and vanilla JavaScript.
                    A second attempt at this challenge will be performed using React and focus on improving the design.
                </p>
                 <p className={styles.projectSummary}>
                    I had made an attempt in the past to complete this challenge, but found the CSS for the responsive navbar challenging. After 
                    stepping away to learn more about CSS, I decided to try the challenge again. This current attempt I found to be a better experience 
                    since I did not start off coding right away.
                </p>
                <p className={styles.projectSummary}>
                    Before I attempted to write code, I would start by analyzing the images of the finished product at both mobile and desktop 
                    views. From here, I would draw the layout out and look for patterns in the design as well as game plan how I would structure 
                    each page. Planning the details out makes writing code much easier. One key takeaway from completing this project 
                    is that I need to improve my naming convention and refactor the CSS code to minimize the number of class names and other identifiers 
                    used. 
                </p>
                <p className={styles.projectSummary}>
                    A link to the repository can be found <Link className='bio-link' href="https://github.com/gary-stroup-developer/space-tourism">here.</Link>
                    The actual website can be found here at <Link className='bio-link' href="https://gary-stroup-developer.github.io/space-tourism/">Space Tourism website.</Link>
                </p>
              
            </div>
            
        </div>
    )
}

export default SpaceTourism;
