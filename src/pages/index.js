import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts/Layout";
import Head from "../components/head/Head";

const Index = ({ data }) => {
  const { site } = data;

  return (
    <Layout>
      <Head title="Home" />
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

export default Index;
