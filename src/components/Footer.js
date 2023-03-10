import styles from '@/styles/Footer.module.css'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {

    return (
        <div className={styles.footer}>
            <p className={[styles.footerName]}>Gary Stroup &#169; 2023</p>
            <div className={[styles.footerIcons]}>
                <a href="https://medium.com/@stroup.uxuidesign"><AiFillMediumSquare className={styles.icons} /> </a>
                <a href="https://www.linkedin.com/in/gary-stroup-2317a247"><AiFillLinkedin className={styles.icons} /></a>
                <a href="https://www.instagram.com/gary.codez/"><AiOutlineInstagram className={styles.icons} /></a>  
            </div>
            
        </div>
    )
}
