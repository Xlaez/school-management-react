import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function ShowCaseFooter() {
  return (
    <Footer>
      <footer>
        <div id="container-footer">
          <div class="nav-bar">
            <div class="first-nav">
              <li>TOF MANAGEMENT</li>
            </div>
            <div className="second-nav">
              <ul>
                <li>
                  <Link to="/">About US</Link>
                </li>
                <li>
                  <Link to="/">Back To Top</Link>
                </li>
                <li>
                  <Link to="/articles">Go To Blog</Link>
                </li>
                <li>
                  <Link to="/">Go To Website</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Footer>
  );
}

const Footer = styled.div`
  #container-footer {
    background: #131324;
    color: #fff;
    width: 100%;
    padding: 2rem;

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
  }
`;

export default ShowCaseFooter;
