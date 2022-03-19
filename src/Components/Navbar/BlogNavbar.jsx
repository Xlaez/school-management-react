import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function BlogNavbar() {
  const Navigate = useNavigate();
  const isAcess = localStorage.getItem("x-access-token");
  const handleValidate = () => {
    function validate() {
      if (isAcess) {
        Navigate("/student");
      } else {
        Navigate("/login");
      }
    }
    validate();
  };
  return (
    <Container>
      <nav>
        <div className="nav-bar">
          <div className="first-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div className="second-nav">
            <ul>
              <li onClick={() => handleValidate()}>Dashboard</li>
              <li>
                <Link to="/">Notice</Link>
              </li>
              <li>
                <Link to="/">Website</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div`
  background: #131324;
  color: #fff;
  width: 1300px;
  margin: 2rem auto;
  border-radius: 5px;
  margin-bottom: 1rem;
  position: sticky;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;

    .second-nav {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
      }
      li {
        list-style: none;
        padding: 10px 15px;
        margin: 0 10px;
        display: inline-block;
        cursor: pointer;
        transition: all 3s ease-out;
        &:hover {
          background: #ffffff39;
          padding: 10px 15px;
          border-radius: 5px;
        }
      }
      a {
        text-decoration: none;
        color: #fff;
      }
    }
    .first-nav {
      list-style: none;
      padding: 10px 15px;
      margin: 0 10px;
      display: inline-block;
      transition: all 3s ease-out;

      li {
        list-style: none;
        padding: 10px 15px;
        margin: 0 10px;
        display: inline-block;
        transition: all 3s ease-out;
        &:hover {
          background: #ffffff39;
          padding: 10px 15px;
          border-radius: 5px;
        }
      }
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export default BlogNavbar;
