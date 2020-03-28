import React from "react";
import { Link } from "gatsby";
import { LandingPageContainer } from "./LandingPageStyles";
import profileImage from "../../images/profileImage.jpg";

const LandingPage = ({ site }) => {
  return (
    <LandingPageContainer>
      <div className="title-bg">
        <div className="space"></div>
        <h1 className="landing-title">{site.siteMetadata.title}</h1>
      </div>
      <div className="landing-img">
        <img src={profileImage} alt={site.siteMetadata.author} />
      </div>

      <div className="landing-text-container">
        <div className="space"></div>
        <div className="landing-text">
          <p>{site.siteMetadata.description}</p>
          <p>{site.siteMetadata.descriptionSub}</p>
          <p>
            Need a developer ? <Link to="/contact">Contact me.</Link>
          </p>
        </div>
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
