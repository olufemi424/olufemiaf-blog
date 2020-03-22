import styled from "styled-components";
export const AppWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: var(--background);
  color: var(--text);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

export const AppMainStyle = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 100px;
`;
