import React, { useState } from "react";
import { Button, Input } from "antd";
import { useStore } from "../../stores/StoresProvider";

function SignUpForm() {
  const { authStore } = useStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const onInputChange = (e) => setFormData({
    ...formData, [e.target.name] : e.target.value});

  return (
    <div>
      <Input name="email" placeholder="Email" type="email" onChange={onInputChange} />
      <Input name="password" placeholder="Password" type="password" onChange={onInputChange} />
      <Input name="passwordConfirm" placeholder="Confirm Password" type="password" onChange={onInputChange}/>
      <Button onClick={() => authStore.signUp(formData)}>Sign Up</Button>
    </div>
  );
}

export default SignUpForm;