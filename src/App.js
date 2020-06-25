import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Test from "./components/test";

const client = new ApolloClient({
  uri: "https://metaphysics-staging.artsy.net",
  request: (operation) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZWY0ZThlN2E3ZjQ5ODAwMGU1ODEwODAiLCJzYWx0X2hhc2giOiI5NGMyZDNjNWI1ZmE2MzdmNzYyMWMyMzk0OGE1MTViOCIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwib3RwIjpmYWxzZSwiZXhwIjoxNTk4MjkyNzEyLCJpYXQiOjE1OTMxMDg3MTIsImF1ZCI6IjVkNDA5OTZlNmU2MDQ5MDAwNzQ5MGZhMiIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZWY0ZThlODVjMTg4YTAwMTIzYTdmMTEifQ.LDF08d-IlOG6v41D26EBT7CUxfVQD4f1GVFo9ovQn18";

    operation.setContext({
      headers: {
        "x-access-token": token,
      },
    });
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Test />
      </div>
    </ApolloProvider>
  );
}

export default App;
