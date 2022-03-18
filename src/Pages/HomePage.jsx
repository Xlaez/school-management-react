/*eslint-disable*/
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const Navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("app-user"));
  //   Navigate("/student");
  // });
  return (
    <Container>
      <div className="welcome-text">
        <h1>Wecome to TOF Schools Management system</h1>
        <p>Easy Management and accessibilty of school data </p>
        <div className="btn">
          <button>
            {" "}
            <Link to="/register">Register</Link>{" "}
          </button>
          <button>
            {" "}
            <Link to="/login">Login</Link>{" "}
          </button>
          <button>
            {" "}
            <Link to="/showcase">Blog</Link>{" "}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  background: #131324;
  color: #fff;
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .welcome-text {
    padding: 1rem;
    h1 {
      text-transform: uppercase;
      padding: 2rem 1rem;
      font-size: 2.4rem;
    }
    p {
      max-width: 500px;
      color: #4e0eff;
      font-size: 1.5rem;
      line-height: 1.7;
      padding: 1rem;
      paddin-bottom: 2rem;
    }
    .btn {
      padding: 1rem;
    }
    button {
      padding: 15px 40px;
      border-radius: 5px;
      border: 1px solid #00000076;
      background: #00000076;
      color: #fff;
      margin-right: 1rem;
      a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
      }
    }
  }
`;
