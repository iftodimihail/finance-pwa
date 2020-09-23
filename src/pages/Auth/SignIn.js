import React, { useState } from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useStore } from "../../stores/StoresProvider";
import { google_orange } from "../../utils/colors";

const GoogleButton = styled(Button)`
  background: ${google_orange};
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

  return (
    <div>
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
      <Button onClick={() => authStore.signIn(formData)}>Sign In</Button>
      <GoogleButton type="primary" onClick={authStore.googleSignIn}>
        <FontAwesomeIcon icon={faGoogle} />
        Google
      </GoogleButton>
    </div>
  );
}

export default SignInForm;
