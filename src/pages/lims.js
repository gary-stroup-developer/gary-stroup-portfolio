import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';

const lims = () => {
  return (
    <div className={'container'}>
      <Link className='link' href="/projects">  Projects </Link>
      <h1 className={styles.title}>Job Management Database</h1>
      <div className='container'>
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
        <section>
          <div className='flex-container margin'> 
            <Image
              className={styles.projectImage}
              src="/images/login.svg"
              alt="login screen of the application."
              width={350}
              height={300}
            />
            <p className={`${styles.ImageSummaryTop} ${styles.ImageSummary}`}>
              This is the login screen of the application. Credentials stored and accessed in MongoDB. The backend used for this 
              project was Golang. The backend determines whether the user is an admin, regular department user, or outside department 
              user. 
            </p>
          </div>

          <div className='flex-container margin'>
            <Image
              className={styles.projectImage}
              src="/images/dashboardPage.svg"
              alt="dashboard screen of the app. Routed to this page after successful login."
              width={350}
              height={300}
            />
            <p className={`${styles.ImageSummaryTop} ${styles.ImageSummary}`}>
              This is the dashboard page where users can access forms in the side naviagtion. The main section of the dashboard
              displays employee tiles that displays the name, current capacity, and a link to view their workflow. The key highlight 
              of the dashboard is that it is the central location of the app where all features are routed from. This addresses the confusion 
              of the user navigating the current live application.
            </p>
          </div>
          <div className='flex-container margin'>
            <Image
              className={styles.projectImage}
              src="/images/createNewJobRequest.svg"
              alt="dashboard screen of the app. Routed to this page after successful login."
              width={350}
              height={300}
            />
            <p className={styles.ImageSummary}>
              This is the form to create a new job request. User can search product by part number. Once the part number is found 
              in the database, the product description, cell line description, and cell line part number fields are auto-populated 
              with the respective information.
            </p>
          </div>
          <div className='flex-container margin'>
            <Image
              className={styles.projectImage}
              src="/images/capacity.svg"
              alt="dashboard screen of the app. Routed to this page after successful login."
              width={350}
              height={300}
            />
            <p className={styles.ImageSummary}>
              The image above shows the current capacity at 15.38%. Below, the capacity was updated to 0.00% and the user is notified by a message in the top 
              left corner of the screen. I decided to build the workflow like a kanban system, where the user can move the job through the 
              different stages of the production cycle. Video demonstration can be found on my instagram (link in footer).
            </p>
          </div>
          <div className='flex-container margin'>
            <Image
              className={styles.projectImage}
              src="/images/updatedCapacity.svg"
              alt="dashboard screen of the app. Routed to this page after successful login."
              width={350}
              height={300}
            />
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default lims