import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks"; 
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ArtistsPage from "pages/Artists";
import CurrentArtist from "pages/Artists/Current";
import { client } from "api/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/:id"} component={CurrentArtist} />
          <Route exact path={"/"} component={ArtistsPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
