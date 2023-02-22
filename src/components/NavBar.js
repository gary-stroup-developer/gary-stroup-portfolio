import Link from 'next/link';
import { useState,useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";


export default function NavBar() {

    const [isMobile, setIsMobile] = useState(false);

    function mobileNav() {
        setIsMobile(!isMobile)
    }

    function updateMenu() {
        let view = window.innerWidth;
        if (view > 800) {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateMenu);
        return () => window.removeEventListener("resize", updateMenu);
    }, [])

    return (
        <div className="navbar">
            <p className="navbar_author">Gary Stroup</p>
            <ul className={isMobile? "navbar_list mobile":"navbar_list"}>
                <li className={isMobile? "navbar_link mobile" : "navbar_link"}>
                    <Link href="/about">About</Link>
                </li>
                <li className={isMobile? "navbar_link mobile" : "navbar_link"}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={isMobile? "navbar_link mobile" : "navbar_link"}>
                    <Link href="/resume">Resume</Link>
                </li>
            </ul>
            <div className="menuicon" onClick={mobileNav}>
               <AiOutlineMenu />
            </div>
            
        </div>
    )
}