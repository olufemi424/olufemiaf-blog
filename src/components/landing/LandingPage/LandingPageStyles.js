import styled from "styled-components";

export const LandingPageStyles = styled.div`
      .landing-page__container {
         // height: 80vh;
         display:flex;
         flex-direction: column;
         align-items center;
         justify-content: center;
      }

      .landing-page__title {
         font-size: 6.5rem;
         font-weight: 700;
         text-align: center;
         text-transform: uppercase;
         margin-top: 7rem;
      }

      .landing-page__image {
         max-width: 30rem;
         width: auto;
         height: auto;
      }

      .landing-page__description {
         font-size: 4rem;
         font-weight: 300;
         max-width: 70rem;
         text-align: center;
      }
`;
