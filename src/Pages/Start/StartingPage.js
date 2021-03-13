import React from "react";
import styles from "./StartingPage.module.css";
import { Link } from "react-router-dom";

function StartingPage() {
    return (
        <div className={styles.page}>
            <Link to="/accessible-view" className={styles.accessible}></Link>
            <Link to="/chaotic-view" className={styles.chaotic}></Link>
        </div>
    );
}

export default StartingPage;
