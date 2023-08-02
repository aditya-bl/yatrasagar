import React from "react";
import styles from './footer.module.css'
import { Poppins, Angkor } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Facebook from './images/fb.png';
import Instagram from './images/insta.png';
import Twitter from './images/twitter.png';

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const angkor = Angkor({
  weight: "400",
  subsets: ["latin"],
});


const Footer=()=>{
    return(
        <div id={styles.footer}>
            <h1 style={angkor.style} className={styles.flexDiv}>YatraSagar</h1>
            <div className={styles.flexDiv} id={styles.links} style={poppins.style}>
                <Link rel="stylesheet" href="" >Support Center</Link>
                <Link rel="stylesheet" href="" >Invoicing</Link>
                <Link rel="stylesheet" href="" >Contact</Link>
                <Link rel="stylesheet" href="" >Careers</Link>
                <Link rel="stylesheet" href="" >Blogs</Link>
                <Link rel="stylesheet" href="" >FAQs</Link>
            </div>
            <br />
            <div className={styles.flexDiv} id={styles.socials}>
                <Image src={Facebook} width={48} height={48}></Image>
                <Image src={Instagram} width={48} height={48}></Image>
                <Image src={Twitter} width={48} height={48}></Image>
            </div>
            <br />
            <div className={styles.flexDiv}>Copyright © 2022 FASCO . All Rights Reseved.</div>
            <br />
        </div>
    )
}

export default Footer;