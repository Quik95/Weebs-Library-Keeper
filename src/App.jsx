import React from "react";
import store from "./store";
import { StoreProvider } from "easy-peasy";
import { GraphQLClient, ClientContext } from "graphql-hooks";

// MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import palette from "./palette";

// Custom components
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const client = new GraphQLClient({ url: "https://graphql.anilist.co" });

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={palette}>
        <StoreProvider store={store}>
          <ClientContext.Provider value={client}>
            <Header />
            <Main />
          </ClientContext.Provider>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
}
