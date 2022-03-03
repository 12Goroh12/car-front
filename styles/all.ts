import styled from "styled-components";

export const Container = styled.div<{ car: number; imgUrl: string }>`
  padding: 6rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => props.car === 0 && 0};
  left: ${(props) => props.car === 0 && 0};
  right: ${(props) => props.car === 0 && 0};
  bottom: ${(props) => props.car === 0 && 0};
  width: 100%;
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const SortWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const SortButton = styled.div`
  background-color: #171515;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
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
