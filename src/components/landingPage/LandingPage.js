import React from "react";
import { Link } from "gatsby";
import { LandingPageContainer } from "./LandingPageStyles";
import profileImage from "../../images/profileImage.jpg";

const LandingPage = ({ site }) => {
  return (
    <LandingPageContainer>
      <div className="landing-img">
        <img src={profileImage} alt={site.siteMetadata.author} />
      </div>
      <h1 className="landing-title">{site.siteMetadata.title}</h1>
      <div className="landing-text">
        <p>{site.siteMetadata.description}</p>
        <p>{site.siteMetadata.descriptionSub}</p>
        <p>
          Need a developer ? <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
