import React from "react";
import StrippedContent from "./components/StrippedContent";
import Videos from "./components/Videos";
import Nav from "./components/Nav";
import styles from "./StrippedHome.module.css";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

const StrippedHome = () => {
    let match = useRouteMatch();
    let name = useParams();
    console.log(match);

    return (
        <div className={styles.page}>
            <Nav />
            <Route path="/stripped/:category" component={StrippedContent} />
            kljalsjöl
        </div>
    );
};

export default StrippedHome;
