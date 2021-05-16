import React from "react";
import { useRouteMatch } from "react-router-dom";

const Prose = () => {
    let match = useRouteMatch();
    console.log(match);
    return <div>Prose</div>;
};

export default Prose;
