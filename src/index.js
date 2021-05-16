import React from "react";
import ReactDom from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import secret from "../secret.json";
import "./index.css";

import StartingPage from "./Pages/Start/StartingPage";
import StrippedHome from "./Pages/Stripped/StrippedHome";
import ChaoticHome from "./Pages/Chaotic/ChaoticHome";

const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${secret.SPACE_ID}`,
    credentials: "same-origin",
    headers: {
        Authorization: `Bearer ${secret.CONTENT_DELIVERY_API_ACCESS_TOKEN}`,
    },
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Route exact path="/">
                    <StartingPage />
                </Route>
                <Route path="/stripped">
                    <StrippedHome />
                </Route>
                <Route path="/chaotic-view">
                    <ChaoticHome />
                </Route>
            </HashRouter>
        </ApolloProvider>
    );
}

ReactDom.render(<App />, document.getElementById("root"));
