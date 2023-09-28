import { Link } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Learn about Gatsby? <Link to="/documentation">Click Here</Link>
      </p>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
