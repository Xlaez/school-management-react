/* eslint-disable*/
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { registerRoute, signinRoute } from "../utils/api";
import Logo from "../../public/assets/facebook.png";

function Signin() {
  const Navigate = useNavigate();
  let message;
  let token;
  let userId;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [headers, setHeaders] = useState({
    userAccess: userId,
  });

  const toastOptions = {
    position: "bottom-right",
    draggable: true,
    pauseOnHover: true,
    autoClose: 8000,
    theme: "dark",
  };

  //   useEffect(() => {
  //     if (localStorage.getItem("app-user")) {
  //       Navigate("/");
  //     }
  //   }, []);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, email } = inputs;
    if (password <= 7) {
      toast.error(
        "Password cannot contain less than 7 characters",
        toastOptions
      );
      return false;
    } else if (email <= 3) {
      toast.error("Check the email provided again.", toastOptions);
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, password } = inputs;
      const data = await axios.post(signinRoute, {
        email,
        password,
      });

      if (data.request.status === 400) {
        toast.error(data.message, toastOptions);
      }
      if (data.request.status === 201 || data.request.status === 200) {
        localStorage.setItem("app-user", JSON.stringify(data.data));
        const pass = localStorage.getItem("app-user");
        message = pass.message;
        token = pass.token;
        userId = pass.userId;
      }
      Navigate("/");
    }
  };

  return (
    <Container>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <img src={Logo} alt="Logo" />
          <h1>TOF MANAGER</h1>
        </div>
        <input
          type="text"
          name="email"
          id=""
          placeholder="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="password"
          id=""
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">SignIn</button>
        <span>
          Don't have an account ? <Link to="/register">Register</Link>
          {""}
        </span>
      </form>
      <ToastContainer />
    </Container>
  );
}

export default Signin;

const Container = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #ffffff;
      text-transform: uppercase;
    }
  }
    form{
      display:flex;
      flex-direction:column;
      gap:2rem;
      background:#00000076;
      border-radius:2rem;
      padding:2rem 5rem;
      input{
        background:transparent;
        padding:1rem;
        border:1px solid #4e0eff;
        border-radius:0.4rem;
        color:#ffffff;
        width:100%;
        font-size:1rem;
        
        &:focus{
          border:1px solid #997af0;
          outline:none;
        }
      }
      button{
        background:#997af0;
        color:#fff;
        padding:1rem 2rem;
        border:none;
        font-weight:bold;
        cursor:pointer;
        border-radius:0.4rem;
        font-size:1rem;
        text-transform:uppercase;
        transition:0.5s ease-in;
        &:hover{
          background:#4e0eff;
        }
      }
      span{
        color:#ffffff;
        text-transform:uppercase;
        text-align:center;
        a{
          color:#4e0eff;
          text-decoration:none;
          font-weight:bolder;
        }
      }
`;
