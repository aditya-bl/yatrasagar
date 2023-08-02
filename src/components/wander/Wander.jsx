import React from "react";
import Image from "next/image";
import Monk from './images/monk.png';
import Arrow from './images/arrow.png';
import styles from './wander.module.css';
import { Poppins,PT_Serif_Caption } from "next/font/google";
const ptserif = PT_Serif_Caption({
    weight: "400",
    subsets: ["latin"],
});
const poppins= Poppins({
    weight: "400",
    subsets: ["latin"],
})
  
const Wander =()=>{
    return(
        <div>
            <div className={styles.flexDiv}>
                <div>
                    <h1 style={ptserif.style}>Wander with Purpose</h1>
                    <br />
                    <p style={poppins.style}>Unleash Your Spirituality on our Travel Yatra.</p>
                    <br />
                    <button className={styles.flexDiv} style={poppins.style}>Explore More <Image id={styles.arrow} src={Arrow}></Image></button>
                </div>
                <Image id={styles.monk} src={Monk} />
            </div>
            <br />
        </div>
    )
}

export default Wander;