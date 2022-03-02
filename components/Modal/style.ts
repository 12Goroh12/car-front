import { Field, Form } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 360px;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, 0.5);

  @media (max-width: 765px) {
    padding: 10px;
  }
`;

export const ModalForm = styled.div`
  padding: 1rem;
`;

export const CloseModal = styled.div`
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  left: 320px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }

  @media (max-width: 765px) {
    top: 5px;
    left: 288px;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FormBlock = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  span {
    margin-left: 70px;
  }
`;

export const Input = styled(Field)`
  padding: 0.5rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #171515;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px solid #4285f4;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 15px 15px;
  color: white;
  outline: none;
  border: none;
  background-color: #171515;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }

  &:active {
    opacity: 1;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 10px;
`;
