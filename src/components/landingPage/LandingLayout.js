import styled from "styled-components";

export const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;

  .landing {
    display: flex;
    margin: 4rem 0;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 200px;
      width: 100%;
      background-color: var(--secondary);
      border-radius: 1rem;
    }

    &-image {
      margin: 20px;
      flex: 0 0 30%;
      z-index: 1;

      img {
        width: 100%;
        border: 10px solid #fff;
        border-radius: 1rem;
      }
    }

    &-title {
      z-index: 1;
      font-size: 3rem;
      margin: 20px;
      flex: 1;
    }

    h1 {
      color: var(--white);
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .description {
      font-size: 2rem;
      margin-top: 4rem;
      p {
        margin: 1rem 0;
      }
    }
  }

  .expect {
    border: 4px solid blue;
    margin-bottom: 4rem;

    &-title {
      margin: 2rem 0;
    }

    &-cards {
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;
    }

    &-card {
      border: 4px solid cyan;
      height: 20vh;
      width: 100%;
    }
  }

  .features {
    border: 4px solid blue;
    padding: 2rem;
    margin-bottom: 4rem;
    min-height: 60vh;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem;

    &-card {
      border: 4px solid green;
    }
  }
`;
