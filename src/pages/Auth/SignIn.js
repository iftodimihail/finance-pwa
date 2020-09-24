import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useStore } from "../../stores/StoresProvider";
import { google_orange } from "../../utils/colors";
import Button from "../../components/Button";
import Color from "color";
import { RouterLink } from "mobx-state-router";
import Form from "./components/Form";
import Error from "./components/Error";
import { useObserver } from "mobx-react";

const GoogleButton = styled(Button)`
  background: ${google_orange};
  margin-top: 50px;

  :hover {
    background: ${Color(google_orange).darken(0.15)};
  }

  > svg {
    margin-right: 10px;
  }
`;

function SignInForm() {
  const { authStore } = useStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return useObserver(() => (
    <Form>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        onChange={onInputChange}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={onInputChange}
        autoComplete="new-password"
      />

      {authStore.errors.length > 0 && <Error errors={authStore.errors} />}
      <Button onClick={() => authStore.signIn(formData)}>Sign In</Button>
      <GoogleButton onClick={authStore.googleSignIn}>
        <FontAwesomeIcon icon={faGoogle} />
        Google
      </GoogleButton>
      <RouterLink routeName="signUp">Sign up</RouterLink>
    </Form>
  ));
}

export default SignInForm;
