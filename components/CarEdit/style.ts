import { Field, Form } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 500px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 1px 10px -4px rgba(0, 0, 0, 0.5);

  @media (max-width: 765px) {
    padding: 0;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }
`;

export const Block = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  max-height: 600px;
  height: 100%;
  width: 100%;

  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormBlock = styled(Form)`
  padding: 20px;
  width: 129%;
  height: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 765px) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    gap: 5px;
  }
`;

export const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 680px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Text = styled.h2`
  color: black;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

export const Label = styled.label`
  color: black;
  font-weight: 500;
  cursor: pointer;
`;

export const Input = styled(Field)`
  padding: 1rem;
  outline: none;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;

  &:focus {
    border: 2px solid #4285f4;
  }

  @media (max-width: 800px) {
    padding: 8px;
  }
`;

export const CheckboxLabel = styled.label`
  p {
    font-size: 14px;
  }
`;

export const CeckboxSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 18px;
  color: white;
  background-color: #171515;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const Error = styled.div`
  color: #df0000;
  font-size: 12px;

  @media (max-width: 800px) {
    font-size: 8px;
  }
`;
