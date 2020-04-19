import React from "react";
import Layout from "../layouts/Layout";
import Head from "../components/head/Head";

import { Link } from "gatsby";

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h3 style={{ fontSize: "40px", color: "red" }}>Page Not Found</h3>
      <p>
        <Link to="/">Go Back Home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
