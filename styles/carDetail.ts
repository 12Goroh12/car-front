import styled from "styled-components";

export const Container = styled.div<{ imgUrl: string }>`
  padding: 3rem 1.5rem;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
`;
