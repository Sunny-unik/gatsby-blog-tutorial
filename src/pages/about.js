import * as React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout pageTitle="About Page">
      <h1>Welcome to my Gatsby site!</h1>
    </Layout>
  );
}

export const Head = () => <title>About Page</title>;
