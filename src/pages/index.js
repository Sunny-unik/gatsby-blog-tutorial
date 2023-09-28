import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h4>Created using gatsby official documentations.</h4>
      <br />
      <StaticImage
        src="https://hips.hearstapps.com/hmg-prod/images/2019-dodge-challenger-srt-hellcat-redeye-comparison-104-1581425446.jpg?crop=0.651xw:0.489xh;0.0928xw,0.333xh&resize=1200:*"
        alt="Dodge Hellcat"
        loading="eager"
        placeholder="blurred"
      />
      <StaticImage src="../images/icon.png" alt="icon" loading="lazy" placeholder="tracedSVG" />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
