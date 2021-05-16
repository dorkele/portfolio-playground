import React from "react";
import styles from "./StrippedHome.module.css";
import {
    Link,
    useRouteMatch,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

import Nav from "./Nav";
import Videos from "./components/Videos";
import Photos from "./components/Photos";
import Poetry from "./components/Poetry";
import Prose from "./components/Prose";
import Newsfeed from "./components/Newsfeed";
import View from "./components/View";

const StrippedHome = () => {
    let match = useRouteMatch();
    let params = useParams();
    console.log(params);
    const children = (
        <div>
            <Link to={`${match.url}/video`}>Video/Film/Footage</Link>
            <Link to={`${match.url}/images`}>
                Pictures/Photography/Snapshots
            </Link>
            <Link to={`${match.url}/poetry`}>Poetry/Sentences</Link>
            <Link to={`${match.url}/prose`}>
                Prose/Stories/Nonsense Fiction
            </Link>
            <Link to={`${match.url}/newsfeed`}>Comments/Letters/Essays</Link>
        </div>
    );
    return (
        <div className={styles.page}>
            <Nav>{children}</Nav>

            <Switch>
                <Route exact path={`${match.url}/`}>
                    <h3>Welcome</h3>
                </Route>
                <Route
                    path={`${match.url}/video`}
                    component={View}
                    children={[Nav, Videos]}
                />
                <Route path={`${match.url}/images`} component={Photos} />
                <Route path={`${match.url}/poetry`} component={Poetry} />
                <Route path={`${match.url}/prose`} component={Prose} />
                <Route path={`${match.url}/newsfeed`} component={Newsfeed} />
            </Switch>
        </div>
    );
};

export default StrippedHome;
