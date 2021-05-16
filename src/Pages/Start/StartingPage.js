import React from "react";
import styles from "./StartingPage.module.css";
import { Link } from "react-router-dom";

function StartingPage() {
    return (
        <div className={styles.page}>
            <Link to="/stripped" className={styles.accessible}>
                <p>Stripped</p>
            </Link>
            <Link to="/chaotic-view" className={styles.chaotic}>
                <p>Drama</p>
            </Link>
        </div>
    );
}

export default StartingPage;
