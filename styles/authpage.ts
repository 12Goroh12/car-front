import { Field, Form } from "formik";
import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  border-radius: 8px;

  @media (max-width: 550px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const FormBlock = styled(Form)`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  margin-right: 1.5rem;

  label {
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 550px) {
    border-right: none;
    margin-right: 0;
  }
`;

export const Header = styled.div`
  text-align: center;
`;

export const Heading = styled.h1`
  color: #000;
  margin-bottom: 1rem;

  @media (max-width: 550px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Links = styled.a`
  background-color: #4285f4;
  color: white;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 12px;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  @media (max-width: 550px) {
    font-size: 10px;
  }
  @media (max-width: 350px) {
    font-size: 8px;
  }

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

export const Input = styled(Field)`
  padding: 1rem 2rem;
  margin-bottom: 0.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 13px -10px rgba(0, 0, 0, 0.5);
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 1rem;
  background-color: #171515;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.2;
  }
`;

export const Error = styled.p`
  font-size: 10px;
  color: red;
`;
