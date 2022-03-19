import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { blogRoute } from "../../../utils/api";
function CreateForm() {
  const Navigate = useNavigate();
  const AccessToken = localStorage.getItem("x-access-token");
  const UserId = localStorage.getItem("app-user");
  const handlePostArticles = (e) => {
    const formData = new FormData();
    var image = document.querySelector('input[type="file"]').files[0];
    var title = document.getElementById("title").value;
    var descr = document.getElementById("descr").value;
    var content = document.getElementById("content").value;

    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", descr);
    formData.append("content", content);
    e.preventDefault();
    fetch(blogRoute, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: AccessToken,
        userAccess: UserId,
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
    <FormBody>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => handlePostArticles(e)}
      >
        <div className="form-body ">
          <div className="form-element">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Article title"
            />
          </div>
          <div className="form-element">
            <input
              type="text"
              name="description"
              id="descr"
              placeholder="Article description"
            />
          </div>
          <div className="form-element">
            <input type="file" name="image" id="file" />
          </div>
          <div className="form-element">
            <textarea
              name="content"
              cols="30"
              rows="10"
              id="content"
            ></textarea>
          </div>
          <div className="form-element form-button">
            <button type="submit">Publish</button>
          </div>
        </div>
      </form>
    </FormBody>
  );
}

const FormBody = styled.div`
  .form-body {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    margin: 1rem 3rem;
    .form-element {
      /* padding: 1rem 0; */
      margin-bottom: 2px;
      #title,
      #description {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 5px;
        height: 30px;
        padding: 3px 10px;
        &:focus {
          outline: none;
        }
      }
      #file {
        width: 100%;
        height: 30px;
        border: none;
        border-radius: none;
      }
      textarea {
        border: 1px solid #ddd;
        border-radius: 3px;
        background: transparent;
        width: 100%;
        height: 300px;
        padding: 1rem 10px;
        overflow: auto;
        max-height: 320px;
        &:focus {
          outline: none;
        }
        &::-webkit-scrollbar {
          width: 0.3rem;
          cursor: pointer;
          &-thumb {
            background: #333;
            cursor: pointer;
            border-radius: 3px;
            color: #333;
            width: 0.3rem;
          }
        }
      }
      button {
        padding: 15px 30px;
        background: #131324;
        color: #fff;
        border: 1px solid #131324;
        border-radius: 5px;
        margin-top: 1rem;
      }
    }
    .form-button {
      text-align: center;
    }
  }
`;

export default CreateForm;
