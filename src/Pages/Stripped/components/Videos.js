import React from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

const Videos = () => {
    let match = useRouteMatch();
    let name = useParams();
    return <div>Videos</div>;
};

export default Videos;
