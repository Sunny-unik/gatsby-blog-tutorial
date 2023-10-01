import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

export default function blog({ data: { allMdx } }) {
  return (
    <Layout pageTitle="Blog Page">
      <h4>All blog links are:</h4>
      <ul>
        {allMdx.nodes.map(({ frontmatter, id }) => (
          <li key={id}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <Link to={frontmatter.slug}>{frontmatter.title}</Link>
              {frontmatter.date}
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const defaultQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(fromNow: true)
          slug
        }
        id
      }
    }
  }
`;
