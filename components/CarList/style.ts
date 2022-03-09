import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 110px 75px;
  grid-auto-rows: minmax(100%, auto);
  grid-gap: 1rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 7px -4px #000;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Name = styled.h1`
  font-size: 20px;
  text-align: center;

  @media (max-width: 765px) {
    font-size: 14px;
  }
`;

export const Price = styled.div`
  text-align: center;
  font-size: 14px;

  @media (max-width: 765px) {
    font-size: 12px;
  }
`;

export const Speed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (max-width: 765px) {
    img {
      width: 30px;
      height: 20px;
    }
  }
`;
export const SpeedBlock = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;

  p {
    font-size: 10px;
  }

  span {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 300;
  }
`;

export const Reserve = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (max-width: 765px) {
    img {
      width: 20px;
      height: 30px;
    }
  }
`;
export const ReserveBlock = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 300;
  }
`;

export const Mileage = styled.div``;

export const TestDrive = styled.button`
  display: flex;
  padding: 10px;
  background-color: #171515;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 10px;
  margin: 1rem;

  @media (max-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    margin: 8px;
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
