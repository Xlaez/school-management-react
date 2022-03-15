import React from "react";
/*eslint-disable*/
import styled from "styled-components";
import CreateArticle from "../../Blog/CreateArticle/CreateArticle";
import Drafts from "../../Drafts/Drafts";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

function Student() {
  return (
    <Dashboard>
      <div className="grid">
        <SideBar />
        <div className="grid-child-two">
          <Header />
          {/* <CreateArticle /> */}
          <Drafts />
        </div>
      </div>
    </Dashboard>
  );
}

const Dashboard = styled.div`
  font-family: "Open Sans", sans-serif;
  background: #fff;
  width: 100vw;
  overflow-x: hidden;
  .grid {
    display: grid;
    grid-template-columns: 15% 85%;
    .grid-child-two {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Student;
