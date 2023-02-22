import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = () => {
    toast.error("🦄 Please Give Valid data", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function HandleSubmit(e) {
    e.preventDefault();
    let user = "admin@gmail.com";
    let password = "@123admin";
    if (email === user && password === Password) {
      let data = {
        email: email,
        password: Password,
      };
      localStorage.setItem("UserDetails", JSON.stringify(data));
      navigate("/");
    } else {
      notify();
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-1">
      <h1>Login</h1>
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="d-flex justify-content-between align-items-center flex-column mt-1"
      >
        <div className="py-3">
          <TextField
            id="outlined-basic"
            label="Email"
            type={"text"}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-3">
          <TextField
            id="outlined-basic"
            label="Password"
            type={"password"}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="py-3">
          <Button type="submit" variant="contained">
            Login
          </Button>
        </div>
      </form>

      <ToastContainer />

    </div>
  );
};

export default Login;
