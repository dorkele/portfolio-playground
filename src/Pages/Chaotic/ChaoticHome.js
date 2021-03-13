import React from "react";
import styles from "./ChaoticHome.module.css";

function ChaoticHome() {
    return (
        <div className={styles.home}>
            <h1>You are home.</h1>
            <img src="public/images/20180517_211443.jpg" />
        </div>
    );
}

export default ChaoticHome;
