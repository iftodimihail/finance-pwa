import React from "react";
import styled from "styled-components";
import { red } from "../../../utils/colors";

const ErrorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;

  > div {
    margin-bottom: 16px;
    color: ${red};
  }
`;

function Error({ errors }) {
  return (
    <ErrorsWrapper>
      {errors.map((error) => (
        <div>{error.message}</div>
      ))}
    </ErrorsWrapper>
  );
}

export default Error;
