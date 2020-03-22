import React from "react";
import { Link } from "gatsby";
import Layout from "../layouts/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>olufemiaf - blog</h1>
      <h2>I'm Olufemi Afolabi, a full-stack developer.</h2>
      <p>
        Need a developer ? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
