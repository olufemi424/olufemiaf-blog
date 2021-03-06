import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts/Layout";
import Head from "../components/head/Head";
import LandingPage from "../components/landing/LandingPage/LandingPage";
 
const Index = ({ data }) => {
  const { site } = data;

  return (
    <Layout>
      <Head title="Home" />
      <LandingPage site={ site } />
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
        landingPageTitle
        landingPageDes
      }
    }
  }
`;

export default Index;

//  Need to draw out whats next and moving forward with this application, remove this comment when you make significant progress. 
//  Keep Each task as small and simpl as possible
// Design Flows 
