import styled from "styled-components";

export const PostListItemCard = styled.div`
  margin: 3rem 0;
  max-width: 75rem;
  padding: 3rem 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  border-radius: 0 1rem 1rem 0;
}

  :hover{
    background-color: grey;
    color: white;
  }

  a {
    text-decoration:none;
    color:var(--black);
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .post-details-group {
    display: flex;
    align-items: center;
    margin-bottom:2rem;
  }

  .post-author {
    font-size: 1.5rem;
    margin-right:2rem;
  }

  .post-date {
    font-size: 1.4rem;
  }

  .post-excerpt {
    font-size: 1.5rem;
  }
`;
