import React from "react";
import styles from "./StrippedHome.module.css";
import { useQuery } from "@apollo/client";
import query from "../../queries/FETCH_POEMS";
import query2 from "../../queries/FETCH_POEM";
import { Switch, Route } from "react-dom";

import Nav from "./components/Nav";

function AccessibleHome({ children }) {
    const { loading, error, data } = useQuery(query);

    if (loading) {
        return "Loading...";
    }
    if (error) {
        return <div>Error</div>;
    }
    const onTitleClick = (id) => {
        const { load, err, poem } = useQuery(query2, { variables: id });
        console.log(id);
    };
    return (
        <div className={styles.page}>
            {/* {children} */}
            <Switch>
                <Route>
                    <Nav data={data} />
                </Route>
            </Switch>
        </div>
    );
}

export default AccessibleHome;
