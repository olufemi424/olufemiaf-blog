import styled from "styled-components";

export const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;

  .landing {
    display: flex;
    margin: 4rem 0;
    position: relative;
    min-height: 55vh;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 200px;
      width: 100%;
      background-color: var(--primary);
      border-radius: 1rem;
    }

    &-image {
      margin: 20px;
      flex: 0 0 30%;
      z-index: 1;
      position: relative;

      img {
        width: 100%;
        border: 10px solid #fff;
        //   border-radius: 1rem;
        border-radius: 50%;
      }

      ::after {
        content: "";
        background: var(--primary);
        height: 20rem;
        width: 100%;
        position: absolute;
        bottom: 3.3rem;
        left: 0;
        border: 10px solid #fff;
        z-index: -1;
      }
    }

    &-title {
      z-index: 1;
      font-size: 3rem;
      margin: 20px;
      flex: 1;

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
  }

  .tech-stack {
    margin-bottom: 4rem;

    &-title {
      font-size: 3rem;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;
      margin: 2rem;
      text-align: center;
    }

    &-cards {
      display: grid;
      grid-column: 1/-1;
      -ms-grid-columns: (minmax(100px, 1fr)) [auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      background: #fff;
      grid-gap: 2rem;
      padding: 2rem;
      perspective: 1000px;
    }

    &-card {
      background: #fff;
      border-radius: 20px;
      padding: 1rem;
      padding-top: 1rem;
      text-align: center;
      padding-top: 3rem;
      position: relative;
      transform-origin: top center;
      --rotate: 10deg;
      transform: rotateX(var(--rotate));
      transition: transform 0.2s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      :hover {
        transform: rotateX(-20deg);
      }

      img {
        height: 80px;
        width: 100%;
        -o-object-fit: contain;
        object-fit: contain;
      }

      p {
        font-size: 1.7rem;
        font-weight: 700;
        margin: 1rem 0;
      }

      &::before,
      &::after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: var(--primary);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        top: 15px;
        position: absolute;
      }
      &::after {
        right: 20px;
      }
      &::before {
        left: 20px;
      }
    }
  }

  .features {
    border: 4px solid blue;
    padding: 2rem;
    margin-bottom: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem;

    &-card {
      border: 4px solid green;
      display: flex;

      &-container {
        display: flex;
        flex-direction: column;

        h4 {
          font-size: 2.5rem;
          font-weight: bold;
          font-style: italic;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }
      }

      &-image {
        width: 20rem;
        height: 15rem;

        img {
          max-width: 100%;
          max-height: 100%;
          border: 1px solid grey;
        }
      }
    }
  }
`;
