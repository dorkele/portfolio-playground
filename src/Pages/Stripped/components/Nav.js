import React from "react";
import styles from "./Nav.module.css";
import { useParams, useRouteMatch } from "react-router-dom";

const Nav = () => {
    let name = useParams();
    let match = useRouteMatch();
    console.log(match);
    console.log(name);
    return <div className={styles.nav}>Nav</div>;
};

export default Nav;
