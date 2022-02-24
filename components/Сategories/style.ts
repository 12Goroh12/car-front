import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const MediaMenu = styled.div`
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 30%;

    padding: 10px;
    width: 200px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    z-index: 1;
    top: 100px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);

    a {
      color: white;
    }
  }
`;

export const ItemMenu = styled.img<{ visible: boolean }>`
  display: none;

  @media (max-width: 650px) {
    display: block;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    transform: rotate(${(props) => (props.visible ? "180deg" : "0deg")});
  }
`;

export const Item = styled.a`
  color: black;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  border-bottom: ${(props) => props.className};
`;
