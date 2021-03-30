import React from "react";
import styles from "./Nav.module.css";
import { Link, useRouteMatch } from "react-router-dom";

const Nav = ({ data }) => {
    let match = useRouteMatch();
    console.log(match);
    return (
        <div className={styles.nav}>
            {data.poemCollection.items.map((item) => {
                return (
                    <Link key={item.sys.id} to={`${match.url}/${item.sys.id}`}>
                        {item.title}
                    </Link>
                );
            })}
        </div>
    );
};

export default Nav;
