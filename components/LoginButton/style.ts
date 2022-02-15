import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  width: 100%;
  padding: 1.5rem 3rem;
  border: none;
  font-size: 22px;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: all 0.25s ease-in-out;

  @media (max-width: 550px) {
    padding: 1rem 2rem;
    font-size: 16px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
    padding: 0.5rem 1.5rem;
  }

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;
