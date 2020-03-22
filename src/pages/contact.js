import React from "react";
import Layout from "../layouts/Layout";

function ContactPage() {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a
          href="https://twitter.com/@afofm"
          target="_blank"
          rel="noopener noreferrer"
        >
          @afofm
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  );
}

export default ContactPage;
