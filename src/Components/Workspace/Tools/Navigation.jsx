import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Navigation({ toggleNoteEditor }) {
  return (
    <nav>
      <Nav>
        <div className="nav-contents">
          <div className="flex-items">
            <div className="logo">
              <h5>TOF MANAGER</h5>
            </div>
            <div className="other-items">
              <div className="first-items">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/showcase">Blog</Link>
                  </li>
                  <li>
                    <Link to="/student">Dashboard</Link>
                  </li>
                </ul>
              </div>
              <div className="second-items">
                <ul>
                  <li className="tools">
                    Tools{" "}
                    <span>
                      <BsArrowDown />
                    </span>{" "}
                    <ul className="tool-box">
                      <li>Calculator</li>
                      <li>Converter</li>
                    </ul>
                  </li>
                  <li onClick={() => toggleNoteEditor()}>Note Editor</li>
                  <li>
                    Teachers Workshop
                    <span>
                      <BsArrowDown />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </nav>
  );
}

const Nav = styled.div`
  background: #131324;
  padding: 1rem;
  .nav-contents {
    margin: 0 auto;
    max-width: 85vw;
    padding: 1rem;
    color: #fff;
    .flex-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .other-items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .first-items,
        .second-items {
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              list-style: none;
              padding: 0 10px;
              margin: 0 5px;
              cursor: pointer;
              span {
                padding-top: 1rem;
                svg {
                  font-size: 10px;
                }
              }
            }
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
        .first-items {
          margin-right: 3rem;
        }
      }
      .tools {
        position: relative;
        .tool-box {
          position: absolute;
          margin-top: 1rem;
          padding: 2rem 1rem;
          background: #131315;
          color: #fff;
          display: none;

          li {
            padding: 10px 20px;
            margin: 0 5px;
            background: #fff;
            color: #131324;
          }
        }
      }
      &:hover .tool-box {
        display: flex;
      }
    }
  }
`;

export default Navigation;
