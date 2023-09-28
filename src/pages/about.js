import * as React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout pageTitle="About Page">
      <h4>Created using gatsby official documentations.</h4>
    </Layout>
  );
}

export const Head = () => <title>About Page</title>;
