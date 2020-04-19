import styled from "styled-components";

export const PostListItemCard = styled.div`
  flex-basis: 50%;
  max-width: 45%;

  :nth-of-type(3n) {
    flex-basis: 100%;
  }

  padding: 3rem 2.5rem;
  margin: auto;
  margin-bottom: 3rem;
  background-color: var(--white);
  border-radius: 1rem;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  transition: 300ms ease-in;

  :hover {
    background-color: grey;
    color: white;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .post-details-group {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .post-author {
    font-size: 1.5rem;
    margin-right: 2rem;
  }

  .post-date {
    font-size: 1.4rem;
  }

  .post-excerpt {
    font-size: 1.5rem;
  }
`;
