import styled from "styled-components";

export const LandingPageContainer = styled.div`
  margin-top: 10rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1rem solid var(--white);
  }

  .title-bg {
    display: flex;
    padding: 20px;
    background-color: #ff7979;
    border-radius: 20px;

    .landing-title {
      flex-basis: 70%;
      grid-area: title;
      font-size: 5rem;
      line-height: 1.2;
      font-weight: 600;
      color: var(--white);
    }
  }

  .space {
    flex-basis: 30%;
    background-color: #ff7979;
  }

  .landing-text-container {
    display: flex;
    margin-top: 20px;
    font-size: 2rem;
  }

  .landing-text {
    flex-basis: 70%;
    position: absolute;
    left: 30%;
  }

  .landing-img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 290px;
    height: 400px;
    margin: 20px 0 0 20px;
  }
`;
