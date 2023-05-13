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
        <section>
          <div className='flex-container'> 
            <Image
              className={styles.projectImage}
              src="/images/login.svg"
              alt="login screen of the application."
              width={350}
              height={300}
            />
            <p className={`${styles.ImageSummaryTop} ${styles.ImageSummary}`}>
              This is the login screen of the application. Credentials stored and accessed in MongoDB. The backend used for this 
              project was Golang.
            </p>
          </div>
          <div>
            
            <Image
              className={styles.projectImage}
              src="/images/dashboardPage.svg"
              alt="dashboard screen of the app. Routed to this page after successful login."
              width={350}
              height={300}
            />
            <p className={`${styles.ImageSummaryTop} ${styles.ImageSummary}`}>
              This is the dashboard page where users can access forms or view their workflow.
            </p>
          </div>
          <div className='flex-container'>
            <Image
              className={styles.projectImage}
              src="/images/createNewJobRequest.svg"
              alt="dashboard screen of the app. Routed to this page after successful login."
              width={350}
              height={300}
            />
            <p className={styles.ImageSummary}>
              This is the form to create a new job request. User can search product by part number. Once the part number is found 
              in the database, the product description, cell line description, and cell line part numebr fields are auto-populated 
              with the respective information.
            </p>
          </div>
          <div className='flex-container'>
            <Image
              className={styles.projectImage}
              src="/images/capacity.svg"
              alt="dashboard screen of the app. Routed to this page after successful login."
              width={350}
              height={300}
            />
            <p className={styles.ImageSummary}>
              This image shows the current capacity. Below, the capacity will be updated and the user is notified by a message in the top 
              left corner of the screen.
            </p>
          </div>
          <div className='flex-container gap'>
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