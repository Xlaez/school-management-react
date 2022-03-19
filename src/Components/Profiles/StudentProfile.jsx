// import { Avatar } from "@material-ui/core";
import { BsFillPersonFill } from "react-icons/bs";
import React from "react";
import styled from "styled-components";
import SetProfile from "./SetProfile";
function StudentProfile({ studentData }) {
  const images = `http://localhost:8081/${studentData.image}`;
  return (
    <Container>
      {studentData.role !== undefined ? (
        <div className="profile-display">
          <div className="profile-img">
            <img src={images} alt="Not showing" />
          </div>
          <div className="profile">
            <h1>{studentData.fullname}, Your Data</h1>

            <div className="profile-grid">
              <div className="display-one">
                <div>
                  {/* <button> */}
                  Name: <small>{studentData.fullname}</small>
                  {/* </button> */}
                </div>
                <div>
                  {/* <button> */}
                  Phone: <small>{studentData.phone}</small>
                  {/* </button> */}
                </div>
                <div>
                  {/* <button> */}
                  Email: <small>{studentData.email}</small>
                  {/* </button> */}
                </div>
              </div>
              <div className="display-one">
                <div>
                  {/* <button> */}
                  Class: <small>{studentData.classs}</small>
                  {/* </button> */}
                </div>
                <div>
                  {/* <button> */}
                  Age: <small>{studentData.age}</small>
                  {/* </button> */}
                </div>
                <div>
                  {/* <button> */}
                  Gender: <small>{studentData.gender}</small>
                  {/* </button> */}
                </div>
              </div>
              <div className="display-one">
                <div>
                  {/* <button> */}
                  Role: <small>{studentData.role}</small>
                  {/* </button> */}
                </div>
                <div>
                  {/* <button> */}
                  Username: <small>{studentData.username}</small>
                  {/* </button> */}
                </div>
                <div>
                  {/* <button> */}
                  TeacherId: <small>{studentData.teacherId}</small>
                  {/* </button> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="notice">
          <small>Please upload a profile image</small>
        </div> */}
        </div>
      ) : (
        <SetProfile studentData={studentData} />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  .profile-display {
    display: flex;
    flex-direction: column;
    .profile-img {
      padding-top: 2rem;
      text-align: center;
      height: 5rem;
      margin-bottom: 4rem;
      img {
        width: 100px;
        border-radius: 50%;
      }
    }
    .profile {
      margin: 1rem 2rem;
      padding: 2rem;
      background: #131324;

      h1 {
        font-size: 1.4rem;
        color: #fff;
        text-align: center;
        padding: 1rem 0 2rem 0;
      }
    }
    .profile-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      /* grid-column-gap: 7px; */
      background: #131324;

      .display-one {
        div {
          background: #fff;
          padding: 15px 5px;
          width: 100%;
          border: 1px solid #ccc;
          color: #131324;
          font-weight: 600;
          border-radius: 5px;
          margin-bottom: 7px;
          cursor: pointer;
          transition: all 1s ease-out;
          &:hover {
            background: #ccc;
          }
          small {
            font-size: 15px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export default StudentProfile;
