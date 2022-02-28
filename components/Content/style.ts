import styled from "styled-components";

export const Container = styled.div<{ imgUrl: string }>`
  padding: 3rem 1.5rem;
  height: 100vh;
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 200px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #171515;
  color: white;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid white;
    color: white;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
