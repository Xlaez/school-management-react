import React from "react";
import styled from "styled-components";
import { profileRoute } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function SetProfile({ studentData }) {
  const Navigate = useNavigate();
  const AccessToken = localStorage.getItem("x-access-token");
  const userId = localStorage.getItem("app-user");

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    var image = document.querySelector('input[type="file"]').files[0];
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var role = document.getElementById("role").value;
    var classs = document.getElementById("classs").value;
    var username = document.getElementById("username").value;

    formData.append("image", image);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("classs", classs);
    formData.append("username", username);

    e.preventDefault();
    fetch(`${profileRoute}/${userId}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: AccessToken,
        userAccess: userId,
      },
    })
      .then((res) => {
        if (!res.ok) {
          console.log("An error occured");
        }
        if (res.ok) {
          Navigate("/showcase");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Profile>
      <div className="header">
        <h2>{studentData.fullname} set a profile first</h2>
        <p>Note: the would be a penalty for wrong information supply</p>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmitProfile(e);
        }}
      >
        <div className="grid-items">
          <div className="grid-child">
            <div className="grid-item1">
              <label htmlFor="age">What is your age?</label>
              <input type="number" name="age" id="age" />
            </div>
            <div className="grid-item1">
              <label htmlFor="phone">Your personal phone number</label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="grid-item2">
              <label htmlFor="role">Role in Tof Academy</label>
              <select name="role" id="role">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <div className="grid-child">
            <div className="grid-item2">
              <label htmlFor="class">What class are you</label>
              <select name="classs" id="classs">
                <option value="junior1">Jss one</option>
                <option value="junior2">Jss two</option>
                <option value="junior3">Jss three</option>
                <option value="senior1">Sss one</option>
                <option value="senior2">Sss two</option>
                <option value="senior3">Sss three</option>
              </select>
            </div>
            <div className="grid-item2">
              <label htmlFor="Gender">Specify yout gender</label>
              <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="grid-item2">
              <label htmlFor="username">Set a username for messenger</label>
              <input type="text" name="username" id="username" />
            </div>
          </div>
          <div className="grid-item2">
            <label htmlFor="image">Upload a profile picture</label>
            <input type="file" name="image" id="image" />
          </div>
          <button type="submit">Finish</button>
        </div>
      </form>
    </Profile>
  );
}

const Profile = styled.div`
  background: steelblue;
  height: 80vh;
  margin: auto;
  padding: 1rem;
  color: #fff;
  .header {
    margin-bottom: 2rem;
    padding: 1rem;
    text-align: center;
    h2 {
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
    p {
      padding: 1rem;
      color: green;
      font-size: 15px;
      font-weight: 500;
    }
  }
  .grid-items {
    display: grid;
    grid-template-columns: 50% 50%;

    label {
      font-size: 15px;
      font-weight: 500;
      padding-right: 10px;
      display: grid;
    }
    .grid-item1,
    .grid-item2 {
      padding: 10px 20px;
      label {
        display: block;
      }
      input,
      select {
        display: block;
        border: 1px solid #fff;
        border-radius: 3px;
        padding: 2px 10px;
        width: 90%;
        height: 30px;
      }
    }
  }
  button {
    width: 85%;
    margin: auto 0;
    margin-left: 1rem;
    padding: 10px 40px;
    color: #fff;
    background: green;
    border: 1px solid green;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default SetProfile;
