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
        <section>
          <h1 className={styles.projectHeader}>Job Management Database</h1>
          <p className={styles.projectSummary}>This project was built to address user experience feedback on a newly designed web
            application for my department at work. The web application created by my company was modeled
            after our current Lotus Notes LIMS desktop application. The feedback was gathered from 3 interviews with employers.
            The main concerns expressed by the users was the lack of functionality amongst the features offerred,
            poor user interface, and difficulty navigating the application to find information.
          </p>
          <p className={styles.projectSummary}>
            I built this application to be user friendly. My main focus was to create a centralized location where
            the information users need can be accessed quickly. To accomplish this feature, I created a dashboard page that users 
            are routed to once login is successful. The dashboard has a side navigation that is split between two sections, the Users 
            and the Admin. The Users section is available to all users in the department, which features links to all forms and data they
            would need to access. The Admin section is only displayed if the user logged in has admin privileges.
          </p>
          <p className={styles.projectSummary}>
            The main section displays tiles that pertain to each user. The tile displays the name, current job capacity, and a link to view their
            jobs currently in production. Clicking the link routes the user to the user dashboard where they can view their open jobs, create a new job,
            or update their capacity by dragging and dropping the job cards into a different section of the workflow. The feedback I received after demonstration 
            was positive. Everyone enjoyed how everything was centralized and the app was easy to navigate. 
          </p>
          <div className='flex-container'>
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