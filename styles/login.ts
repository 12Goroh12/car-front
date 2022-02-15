import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 34px;
  margin-bottom: 2rem;
  color: white;

  @media (max-width: 550px) {
    font-size: 24px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
