import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EditorApp from "../../Editor/Editor";
// import Stepper from "./Stepper";
function Navigation() {
  const toggleDropDown = () => {
    var tool = document.getElementsByClassName("tools-set");
    tool.style.display = "initial";
  };
  var editor = false;
  const displayEditor = () => {
    editor = true;
  };
  return (
    <Navwrap>
      <div className="nav">
        <div className="nav-contents">
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/student"> Dashboard </Link>
            </li>
            <li className="toggle-tools" onClick={toggleDropDown}>
              Tools
              <ul className="tools-set">
                <li>Calculator</li>
                <li onClick={displayEditor}>Text Editor</li>
                <li>Send Mail</li>
                <li>Temporary storage</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {editor ? <EditorApp /> : ""}
    </Navwrap>
  );
}

const Navwrap = styled.div`
  .nav {
    background: #131324;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .nav-contents {
      width: 800px;
      margin: 0 auto;
      padding: 1rem 0;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .toggle-tools {
          &:hover .tools-set {
            display: initial;
          }
        }
        li {
          list-style: none;
          padding: 0 10px;
          margin: 0 10px;
          display: inline-block;
          position: relative;
          cursor: pointer;
          ul {
            margin-top: 10px;
            padding: 1rem;
            flex-direction: column;
            justify-content: center;
            background: purple;
            color: #fff;
            position: absolute;
            width: 300px;
            display: none;
            li {
              display: block;
              padding: 5px 0;
              border-bottom: 1px dashed #ddd;
            }
          }
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }
`;

export default Navigation;
