import React from "react";
import { LandingLayout } from "./LandingLayout";
import profileImage from "../../images/profileImage.jpg";
import reactImage from "../../images/logo-react.svg";
import angularImage from "../../images/logo-angular.png";
import typeScriptImage from "../../images/logo-typescript.png";
import vueImage from "../../images/logo-vue.png";
import vanilaImage from "../../images/logo-vanila.png";
import nodeImage from "../../images/logo-node.png";
import youtubeImage from "../../images/youtube-img.png";
import blogImage from "../../images/blog-img.jpg";

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
      <section className="tech-stack">
        <h4 className="tech-stack-title">Learn more about these techs</h4>
        <div className="tech-stack-cards">
          <div className="tech-stack-card">
            <img src={reactImage} alt="React Framework" />
            <p>React</p>
          </div>
          <div className="tech-stack-card">
            <img src={vueImage} alt="Vue Framework" />
            <p>Vue</p>
          </div>
          <div className="tech-stack-card">
            <img src={angularImage} alt="" />
            <p>Angular</p>
          </div>
          <div className="tech-stack-card">
            <img src={typeScriptImage} alt="Typescript" />
            <p>Typescript</p>
          </div>
          <div className="tech-stack-card">
            <img src={nodeImage} alt="NodeJS" />
            <p>Node</p>
          </div>
          <div className="tech-stack-card">
            <img src={vanilaImage} alt="Vanila Javascript" />
            <p>Vanila</p>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="features-card">
          <div className="features-card-container">
            <h4>Youtube</h4>
            <div className="features-card-image">
              <img src={youtubeImage} alt="Youtube" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            sapiente error quia reiciendis! Voluptatibus saepe ipsam sapiente
            architecto numquam soluta?
          </p>
        </div>
        <div className="features-card">
          <div className="features-card-container">
            <h4>Blog</h4>
            <div className="features-card-image">
              <img src={blogImage} alt="Youtube" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            sapiente error quia reiciendis! Voluptatibus saepe ipsam sapiente
            architecto numquam soluta?
          </p>
        </div>
        <div className="features-card">card 3</div>
        <div className="features-card">card 4</div>
      </section>
    </LandingLayout>
  );
};

export default LandingPage;
