import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #171515;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
