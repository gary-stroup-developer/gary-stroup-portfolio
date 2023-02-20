import styles from '@/styles/Home.module.css'


export default function Footer() {

    return (
        <div className="footer">
            <p className={styles.details}>Gary Stroup &#169; 2023</p>
            <div className={styles.flex}>
                <a href="https://medium.com/@stroup.uxuidesign">Medium  </a>
                <a href="https://www.linkedin.com/in/gary-stroup-2317a247">LinkedIn </a>
                <a href="https://www.instagram.com/gary.codez/">Instagram </a>  
            </div>
            
        </div>
    )
}
