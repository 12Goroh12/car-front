import styled from "styled-components";

export const List = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding-right: 1rem;
  border-radius: 10px;

  img {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-right: 0rem;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0;
      width: 100%;
      height: 300px;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 100%;
      height: 200px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 2rem;
  padding-left: 1rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Name = styled.h1`
  font-size: 24px;
  text-align: center;

  @media (max-width: 765px) {
    font-size: 14px;
  }
`;

export const Price = styled.div`
  text-align: center;

  @media (max-width: 765px) {
    font-size: 14px;
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
  display: flex;
  flex-direction: column;

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

export const TestDrive = styled.button`
  display: flex;
  padding: 5px;
  background-color: #171515;
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 10px;

  @media (max-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    width: 90%;
  }
`;
