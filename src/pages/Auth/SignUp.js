import React, { useState } from "react";
import { Input } from "antd";
import { RouterLink } from "mobx-state-router";

import { useStore } from "../../stores/StoresProvider";
import Form from "./components/Form";
import Button from "../../components/Button";
import Error from "./components/Error";
import { useObserver } from "mobx-react";

function SignUpForm() {
  const { authStore } = useStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
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
      />
      <Input
        name="passwordConfirm"
        placeholder="Confirm Password"
        type="password"
        onChange={onInputChange}
      />
      {authStore.errors.length > 0 && <Error errors={authStore.errors} />}
      <Button onClick={() => authStore.signUp(formData)}>Sign Up</Button>
      <RouterLink routeName="signIn">Sign in</RouterLink>
    </Form>
  ));
}

export default SignUpForm;
