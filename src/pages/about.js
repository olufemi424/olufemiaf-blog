import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts/Layout";
import LandingPage from "../components/about/About";
import Head from "../components/head/Head";

const About = ({ data }) => {
  const { site } = data;

  return (
    <Layout>
      <Head title="Home" />
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

export default About;
