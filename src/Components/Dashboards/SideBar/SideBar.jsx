import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import {
  BsAlarmFill,
  BsBook,
  BsChatText,
  BsFile,
  BsFillGearFill,
  BsNewspaper,
  BsPen,
} from "react-icons/bs";
function SideBar({
  studentData,
  handleProfileDisplay,
  handleDraftDisplay,
  handleArticleDisplay,
}) {
  const images = `http://localhost:8081/${studentData.image}`;
  const handleAnimation = () => {};
  return (
    <Wrapper>
      <div className="content-header">
        {studentData.image ? (
          <div className="avatar">
            <img src={images} alt="" />
          </div>
        ) : (
          <Avatar />
        )}
        <h3>{studentData.fullname}</h3>
      </div>
      <div className="content-list">
        <ul>
          <div className="list">
            <li
              onClick={() => {
                handleProfileDisplay();
              }}
            >
              <div className="icon">
                <BsBook />
              </div>
              <Link to="#">Profile</Link>
            </li>
            {studentData.role === "student" ? (
              <li
                onClick={() => {
                  handleAnimation();
                }}
              >
                <div className="icon">
                  <BsFile />
                </div>

                <Link to="/">Subjects</Link>
              </li>
            ) : (
              <li
                onClick={() => {
                  handleAnimation();
                }}
              >
                <div className="icon">
                  <BsFile />
                </div>

                <Link to="/">Time table</Link>
              </li>
            )}
            <li
              onClick={() => {
                handleDraftDisplay();
              }}
            >
              <div className="icon">
                <BsChatText />
              </div>
              <Link to="#">Drafts</Link>
            </li>
          </div>

          <div className="list">
            <li
              onClick={() => {
                handleAnimation();
              }}
            >
              <div className="icon">
                <BsFillGearFill />
              </div>
              <Link to="/">Settings</Link>
            </li>
            <li
              onClick={() => {
                handleAnimation();
              }}
            >
              <div className="icon">
                <BiChat />
              </div>
              <Link to="/messaging">Messenger</Link>
            </li>
            <li
              onClick={() => {
                handleAnimation();
              }}
            >
              <div className="icon">
                <BsNewspaper />
              </div>

              <Link to="/workspace">Work Space</Link>
            </li>
          </div>
          <div className="list">
            <li
              onClick={() => {
                handleArticleDisplay();
              }}
            >
              <div className="icon">
                <BsPen />
              </div>
              <Link to="#">Create Article</Link>
            </li>
            <li
              onClick={() => {
                handleAnimation();
              }}
            >
              <div className="icon">
                <BiChat />
              </div>
              <Link to="/">Assignments</Link>
            </li>
          </div>
        </ul>
        <div className="alert">
          <li>
            <Link to="/">
              <BsAlarmFill />
            </Link>
          </li>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #131324;
  color: #fff;
  height: 100vh;
  .content-header {
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #444;
    display: flex;
    align-items: center;
    .avatar {
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
    }
    h3 {
      font-size: 14px;
      padding-left: 10px;
    }
  }
  .content-list {
    /* padding: 2rem 0.3rem; */
    ul {
      display: flex;
      flex-direction: column;
      .list {
        border-bottom: 1px solid #444;
      }
      li {
        display: grid;
        /* justify-content: space-around; */
        padding: 1rem;
        grid-template-columns: 30% 70%;
        align-items: center;
        width: 100%;
        font-size: 15px;
        font-weight: 500;
        background: #131324;
        .icon {
          svg {
            font-size: 20px;
          }
        }
        &:hover {
          background: #ffffff39;
          border-radius: 5px;
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: #fff;
          /* padding-right: -2rem; */
        }
      }
    }
    .alert {
      padding: 1rem 0;
      text-align: center;
      li {
        padding: 10px 25px;
        margin: 0 auto;
        width: 70%;
        list-style: none;
        color: #fff;
        background: purple;
        border: 1px solid #131324;
        border-radius: 20px;

        :hover {
          cursor: pointer;
          opacity: 0.8;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
`;

export default SideBar;
