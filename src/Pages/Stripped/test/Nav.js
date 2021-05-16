import React from "react";
import styles from "./Nav.module.css";

const Nav = ({ children }) => {
    return <div className={styles.nav}>{children}</div>;
};

export default Nav;
