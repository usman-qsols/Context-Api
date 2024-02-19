import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password }, "username");
    setUser({ username, password });
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
