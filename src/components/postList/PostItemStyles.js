import styled from "styled-components";

export const PostListItemCard = styled.div`
  padding: 3rem 2.5rem;
  margin: 3rem 0;
  border-left: 5px solid var(--primary);
  background-color: var(--white);
  box-shadow: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);
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
