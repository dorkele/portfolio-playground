import React from "react";
import Nav from "./Nav";

const StrippedContent = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    );
};

export default StrippedContent;
