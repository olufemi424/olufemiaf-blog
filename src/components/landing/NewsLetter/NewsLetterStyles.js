import styled from "styled-components";

export const NewsLetterStyles = styled.div`
      height: 10rem;
      margin-top: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .news-letter-input {
         font-size: 2.5rem;
         font-family: inherit;
         color: inherit;
         padding: 1.2rem 2rem;
         border-radius: 2px;
         background-color: #eee;
         border: none;
         border-bottom: 3px solid transparent;
         display: block;
         transition: all 500ms;

         &:focus {
            outline: none;
            box-shadow: 1 1rem 2rem #eee;
            border-bottom: 3px solid blue;
         }
        
         &:focus:invalid {
            border-bottom: 3px solid red;
         }

         &::-webkit-input-placeholder {
            color: #ccc;
         }
      }

      .news-letter-input__label {
         display: none;
      }

      button {
         padding: 1.5rem 2rem;
         margin-left: 2rem;
         font-size: 2.5rem;
         border: none;
      }

      
`;
