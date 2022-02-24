import styled from "styled-components";

export const Container = styled.div<{ imgUrl?: string, isLoading: boolean }>`
  padding: 6rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => !props.isLoading ? '100vh' : ''};
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;

  @media (max-width: 650px) {
  }
  @media (max-width: 400px) {
  }
`;
