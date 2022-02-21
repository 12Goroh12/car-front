import styled from "styled-components";

export const Modal = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 8px;
  position: absolute;
  top: 60px;
  right: 142px;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 700px) {
    position: fixed;
    top: 65px;
    width: 200px;
    right: 86px;
  }
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding-bottom: 8px;
  border-bottom: 1px solid #171515;
`;

export const Name = styled.p`
  padding: 15px;
  background-color: #171515;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;

  @media (max-width: 700px) {
    font-size: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const Email = styled.p`
  font-size: 16px;
  font-weight: 500;

  span {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
