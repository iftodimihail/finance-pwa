import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 20px;
    height: 40px;
    border-radius: 4px;
  }

  a {
    text-align: center;
    margin-top: 24px;
  }
`;

const Form = styled.div`
  width: 400px;
  padding: 52px 24px 28px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: inset 0px 0px 4px 0px rgba(140, 140, 140, 0.5);
`;

export default ({ children }) => (
  <FormWrapper>
    <Form>{children}</Form>
  </FormWrapper>
);
