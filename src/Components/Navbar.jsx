import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const Navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <Container>
      <div className="nav-bar">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/article">Write Article</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            {" "}
            <Link to="/login">Login</Link>{" "}
          </li>
          <li onClick={logoutHandler}>Logout</li>
        </ul>
      </div>
    </Container>
  );
}
const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #131324;
  margin: 0 auto;
  .nav-bar {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      li {
        cursor: pointer;
        color: #fff;
        list-style: none;
        padding: 3px;
        margin: 0 10px;
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
`;
