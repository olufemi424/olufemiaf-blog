import styled from "styled-components";

export const CountDownStyles = styled.div`

   .comingsoon {
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      margin: 10rem 0;
   }
   .countdown {
      font-size: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
   }
   
   .countdown div {
      padding: 20px;
      border: 1px salmon solid;
      border-radius: 15px;
      margin: 5px;
      opacity: 0.7;
      background: #000;
   }
   
   .countdown div:first-child {
      background: #fcca6f;
   }
   
   .countdown div span {
      display: block;
      font-size: 25px;
   }
`;
