import React from "react";
import styles from "./StartingPage.module.css";
import { Link } from "react-router-dom";

function StartingPage() {
    return (
        <div className={styles.page}>
            <Link to="/stripped" className={styles.accessible}>
                <p>Stripped Content</p>
            </Link>
            <Link to="/chaotic-view" className={styles.chaotic}>
                <p>Content with some drama</p>
            </Link>
        </div>
    );
}

export default StartingPage;
