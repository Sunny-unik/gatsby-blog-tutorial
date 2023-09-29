import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function blog({ data: { allFile } }) {
  return (
    <Layout pageTitle="Blog Page">
      <h4>All blog links are:</h4>
      <ul>
        {allFile.nodes.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const defaultQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
        id
      }
    }
  }
`;
