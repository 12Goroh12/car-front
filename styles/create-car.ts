import { Field, Form } from "formik";
import styled from "styled-components";

export const Container = styled.div<{ imgUrl: string }>`
  padding: 3rem 1.5rem;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imgUrl}) center center/cover no-repeat;
`;

export const Block = styled.div`
  display: flex;
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
export const BlockImage = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image}) center center/cover no-repeat;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 34px;
    color: black;
    font-weight: 600;
    padding: 0 2rem;
  }

  @media (max-width: 765px) {
    display: none;
  }
`;

export const FormBlock = styled(Form)`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 765px) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.h2`
  color: black;
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

export const File = styled(Field)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 148px;
  height: 46px;
`;

export const FileLabel = styled.label`
  background: #4285f4;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
  font-weight: 400;
  padding: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 70px;

  span {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 18px;
  color: white;
  background-color: #4285f4;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Error = styled.div`
  color: #df0000;
  font-size: 12px;
`;
