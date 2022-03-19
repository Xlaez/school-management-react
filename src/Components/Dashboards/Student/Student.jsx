/*eslint-disable*/
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { studentRoute } from "../../../utils/api";
import CreateArticle from "../../Blog/CreateArticle/CreateArticle";
import CreateForm from "../../Blog/CreateArticle/CreateForm";
import Drafts from "../../Drafts/Drafts";
import StudentProfile from "../../Profiles/StudentProfile";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

function Student() {
  const [studentData, setStudentData] = useState([]);
  const [display, setDisplay] = useState(undefined);
  const authorization = localStorage.getItem("x-access-token");
  const userId = localStorage.getItem("app-user");
  const handleProfileDisplay = () => {
    setDisplay("profile");
  };
  const handleDraftDisplay = () => {
    setDisplay("draft");
  };
  const handleArticleDisplay = () => {
    setDisplay("article");
  };
  // const switchToArticle = () =>{
  //   setDisplay("")
  // }
  useEffect(() => {
    axios
      .get(studentRoute, {
        headers: {
          Authorization: authorization,
          userAccess: userId,
        },
      })
      .then((res) => {
        if (res.status === 400) {
          console.log(res.data.err);
        }
        if (res.status === 200 || res.status === 201) {
          const studentInfo = res.data.data;
          setStudentData(studentInfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Dashboard>
      <div className="grid">
        <SideBar
          studentData={studentData}
          handleProfileDisplay={handleProfileDisplay}
          handleDraftDisplay={handleDraftDisplay}
          handleArticleDisplay={handleArticleDisplay}
          // switchToArticle={switchToArticle}
        />
        <div className="grid-child-two">
          <Header studentData={studentData} />
          {display === "article" ? (
            <CreateForm />
          ) : (
            <div>
              {display === "profile" ? (
                <StudentProfile studentData={studentData} />
              ) : (
                <Drafts studentData={studentData} />
              )}
            </div>
          )}
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
