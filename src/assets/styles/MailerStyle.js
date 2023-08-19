import styled, { css } from "styled-components";
import {
  ErrorMessage as FormikError,
  Field as FormInput,
  Form as FormikForm,
} from "formik";

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
  padding-bottom: 10px;
`;

export const FormHeader = styled.h1`
  text-align: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 20px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Field = styled(FormInput)`
  padding: 20px;
  margin-bottom: 10px;
  height: ${(props) => (props.$isTextArea ? "50px" : "26px")};
  border: solid 1px #d4d4d4;
  background-color: "#efefef";
  color: "#d4d4d4";
  font-family: "Roboto", sans-serif;
  resize: none;
`;

export const FormButton = styled.button`
  background-color: #292929;
  color: white;
  font-family: "Roboto", sans-serif;
  border: solid 1px #d4d4d4;
  padding: 10px;

  ${(props) =>
    props.disabled &&
    css`
      color: #e0e0e0;
      background-color: #6b6b6b;
    `}
`;

export const MessageSent = styled.h1`
  font-size: 24px;
  color: #4f4f4f;
  margin: 0;
  text-align: center;
  padding: 10px;
`;

export const MessageSentDescription = styled.p`
  font-size: 18px;
  color: #686868;
  margin: 0;
  text-align: center;
  padding: 6px;
`;
