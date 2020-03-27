import styled from "styled-components";

export const LandingPageContainer = styled.div`
  background-color: var(--background);
  font-size: 2rem;
  margin-top: 10rem;
  height: 100%;
  with: 100%;
  display: grid;
  grid-template-columns: 0 min-content minmax(300px, 900px) 0;
  grid-template-areas: ". image title ." ". image text .";

  .landing-img {
    grid-area: image;
    margin-right: 3rem;
    width: 350px;
    height: 350px;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      // border-radius: 20px;
      border: 0.5rem solid var(--white);
    }
  }

  .landing-title {
    grid-area: title;
    font-size: 5rem;
    line-height: 1.2;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 2rem;
  }

  .landing-text {
    grid-area: text;
    font-size: 2rem;

    p {
      margin-bottom: 2rem;
    }
  }
`;
