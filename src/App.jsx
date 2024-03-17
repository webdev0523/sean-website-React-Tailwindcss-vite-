import React from "react";
import "./App.css";
import { EVLandingPage, GiveawayPage } from "./pages";
import Layout from "./layout/layout";

function App() {

  return (
    <Layout>
      <GiveawayPage />
      {/* <EVLandingPage /> */}
    </Layout>
  );
}

export default App;
