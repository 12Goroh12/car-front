import styled from "styled-components";

export const Wrap = styled.div<{ imgUrl: string }>`
  min-height: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
`;

export const Someting = styled.h1`
  font-size: 32px;
  padding: 20px;
  color: white;
`;
