import styled from "styled-components";

export const Container = styled.div`
  padding: 6rem 0.5rem;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1rem;
  margin-bottom: 0rem;
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
