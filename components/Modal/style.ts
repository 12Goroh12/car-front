import { Field, Form } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
`;

export const ModalForm = styled.div`
  padding: 2rem;
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
