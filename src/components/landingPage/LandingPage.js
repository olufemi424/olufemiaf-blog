import React from "react";
import { Link } from "gatsby";
import { LandingLayout } from "./LandingLayout";
import profileImage from "../../images/profileImage.jpg";

const LandingPage = ({ site }) => {
  const { title, description, descriptionSub } = site.siteMetadata;
  return (
    <LandingLayout>
      <section className="landing">
        <div className="landing-image">
          <img src={profileImage} alt="" />
        </div>
        <div className="landing-title">
          <h1 className="title">{title}</h1>
          <div className="description">
            <p>{description}</p>
            <p>{descriptionSub}</p>
          </div>
        </div>
      </section>
      <section className="expect">
        <div className="expect-title">Lorem ipsum dolor sit.</div>
        <div className="expect-cards">
          <div className="expect-card">card 1</div>
          <div className="expect-card">card 2</div>
          <div className="expect-card">card 3</div>
          <div className="expect-card">card 4</div>
          <div className="expect-card">card 5</div>
          <div className="expect-card">card 6</div>
        </div>
      </section>
      <section className="features">
        <div className="features-card">card 1</div>
        <div className="features-card">card 2</div>
        <div className="features-card">card 3</div>
        <div className="features-card">card 4</div>
      </section>
      {/* <div className="landing-img">
        <img src={profileImage} alt={site.siteMetadata.author} />
      </div>
      <h1 className="landing-title">{site.siteMetadata.title}</h1>
      <div className="landing-text">
        <p>{site.siteMetadata.description}</p>
        <p>{site.siteMetadata.descriptionSub}</p>
        <p>
          Need a developer ? <Link to="/contact">Contact me.</Link>
        </p>
      </div> */}
    </LandingLayout>
  );
};

export default LandingPage;
