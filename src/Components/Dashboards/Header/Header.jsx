import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
function Header() {
  return (
    <HeaderApp>
      <div className="collection">
        <div className="collection-items">
          <div className="collections-portal">
            <ul>
              <li>
                <Link to="/">
                  <div className="text">Blog</div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="text">Notice Portal</div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="text">Assignment Portal</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout">
            <ul>
              <li>
                <Link to="/">
                  <div className="icons">
                    <BsHouse />
                  </div>
                  <div className="text">Home </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="icons">
                    <BiPowerOff />
                  </div>
                  <div className="text">Logout</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="date">
            <small>| {new Date().toDateString()}</small>
          </div>
        </div>
      </div>
    </HeaderApp>
  );
}

const HeaderApp = styled.div`
  padding: 1.3rem;
  border-bottom: 1px solid #444;
  background: #131324;
  color: #fff;
  .collection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif !important;
    .collection-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .collections-portal {
        padding: 0 2rem 0 4rem;
        ul {
          display: flex;
          flex-direction: row;
          align-items: center;

          li {
            list-style: none;
            padding: 3px 15px;
            margin: 0 10px;
            color: #fff;
            a {
              align-items: center;
              font-size: 15px;
              justify-content: space-around;
              display: flex;
              flex-direction: row;
              color: #fff;
              text-decoration: none;
              transition: all 1s ease-in;

              &:hover {
                color: purple;
              }
            }
          }
        }
      }
      .logout {
        padding-right: 1rem;
        margin-right: 2rem;
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        li {
          padding: 3px 15px;
          margin: 0 10px;
          list-style: none;
          a {
            display: flex;
            font-size: 15px;
            justify-content: space-around;
            flex-direction: row;
            align-items: center;
            color: purple;
            text-decoration: none;
            transition: all 1s ease-in;

            svg {
              padding-right: 7px;
              font-size: 24px;
            }
            &:hover {
              color: #fff;
            }
          }
        }
      }
      .date {
        padding-right: 7px;
      }
    }
  }
`;

export default Header;
