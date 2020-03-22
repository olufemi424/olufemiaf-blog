import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { LandingPageContainer } from "./LandingPageStyles";

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <LandingPageContainer>
      <h1>{data.site.siteMetadata.author} - blog</h1>
      <h2>I'm Olufemi Afolabi, a full-stack developer.</h2>
      <p>
        Need a developer ? <Link to="/contact">Contact me.</Link>
      </p>
    </LandingPageContainer>
  );
};

export default LandingPage;
