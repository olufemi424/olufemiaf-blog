import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts/Layout";
import LandingPage from "../components/landingPage/LandingPage";

const IndexPage = ({ data }) => {
  const { site } = data;

  return (
    <Layout>
      <LandingPage site={site}></LandingPage>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        descriptionSub
      }
    }
  }
`;

export default IndexPage;
