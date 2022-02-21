import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Item = styled.a`
  color: white;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  border-bottom: ${(props) => props.className};
`;
