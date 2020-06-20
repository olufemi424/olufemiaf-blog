import styled from "styled-components";

export const PostListItemCard = styled.div`
   display: flex;
   border-bottom: 1px solid #B8B8B8;
   padding: 0 0 20px 0;
   
   &:not(last-child) {
      margin-bottom: 32px;
   }

   a {
      text-decoration: none;
      color: #000;
   }

  .post-list-item__image {
     height: 200px;
     display: flex;
     margin-right: 32px;

     img {
      max-width:300px;
      max-height:250px;
      width: auto;
      height: auto;
      align-self: flex-start;
     }
   }

   .post-list-item__info {
      .title {
         font-size: 32px;
         font-weight: 600;
         margin-bottom: 16px;
      }

      .description {
         font-size: 18px;
      }

      .post-info {
         display: flex;
         font-size: 16px;
         color: darkblue;
         margin-top: 16px;
      }

      .post-info-name {
         margin-right: 16px;
      }

      
   }
`;
