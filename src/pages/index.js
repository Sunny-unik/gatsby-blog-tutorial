import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site!</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
