import styled from "styled-components";

export const Container = styled.div<{ imgUrl: string }>`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
`;
export const Heading = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.2);

  p {
    font-size: 22px;
    color: white;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
  span {
    color: white;
  }
`;
export const SpeedBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    font-size: 14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #171515;
  outline: none;
  width: 50%;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid #df0000;
    color: #df0000;
  }
  &:active {
    background-color: #171515;
  }
`;
