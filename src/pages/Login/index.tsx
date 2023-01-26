import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    pwd: "",
  });
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let body = {
      name: userInfo.name,
      pwd: userInfo.pwd,
    };
    axios
      .post("/api/login", body)
      .then((res) => res.status === 200 && navigate("/"));
    event.currentTarget.reset();
  };
  return (
    <div>
      <form name="loginSubmit" onSubmit={handleSubmit}>
        <input name="name" type="text" maxLength={12} onChange={handleChange} />
        <input name="pwd" type="number" maxLength={6} onChange={handleChange} />
        <button type="submit"> 제출 </button>
      </form>
    </div>
  );
};

export default Login;
