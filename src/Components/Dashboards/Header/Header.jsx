/*eslint-disable*/
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import {
  BsDashSquare,
  BsFillInfoCircleFill,
  BsHouse,
  BsPersonCircle,
} from "react-icons/bs";
import Logout from "../../Auth/App/Logout";
function Header() {
  return (
    <HeaderApp>
      <div className="dashboard-head">
        <div className="display-name">
          <div className="icon">
            <BsFillInfoCircleFill />
          </div>
          <div className="text">
            <span>Dashboard</span>
          </div>
        </div>
        <div className="display-icons">
          <div className="icons">
            <div className="icon">
              <Link to="/showcase">
                <BsHouse />
              </Link>
            </div>
            <div></div>
          </div>
          <div className="icons">
            <div className="icon">
              <BsDashSquare />
            </div>
            <div></div>
          </div>
          <div className="icons">
            <div className="icon">
              <BsPersonCircle />
            </div>
            <div></div>
          </div>
          <div className="icon">
            <Logout />
          </div>
          <div></div>
        </div>
      </div>
    </HeaderApp>
  );
}

const HeaderApp = styled.div`
  .dashboard-head {
    padding: 1rem 2rem 4rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #131313;
    color: #fff;

    .display-name {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .icon {
        padding-right: 1.2rem;
        svg {
          cursor: pointer;
          font-size: 1.2rem;
          color: red;
        }
      }
      span {
        font-size: 16px;
        color: #fff;
      }
    }
    .display-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icons {
        padding: 0 20px;
        display: flex;
        align-items: center;
      }
      .icon {
        /* display: block; */
        svg {
          display: block;
          font-size: 1.2rem;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
`;

export default Header;
