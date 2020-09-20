import React, { useState } from "react";
import { Button, Input } from "antd";
import { useStore } from "../../stores/StoresProvider";

function SignInForm() {
  const { authStore } = useStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => setFormData({
    ...formData, [e.target.name] : e.target.value});

  return (
    <div>
      <Input name="email" placeholder="Email" type="email" onChange={onInputChange} />
      <Input name="password" placeholder="Password" type="password" onChange={onInputChange} autoComplete="new-password"/>
      <Button onClick={() => authStore.signIn(formData)}>Sign In</Button>
      <Button onClick={authStore.googleSignIn}>Google SignIn</Button>
    </div>
  );
}

export default SignInForm;