import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { blogRoute } from "../../../utils/api";
function SingleArticle({ singleArticles, userId, id }) {
  const Navigate = useNavigate();
  const AccessToken = localStorage.getItem("x-access-token");
  const userids = localStorage.getItem("app-user");
  const images = `http://localhost:8081/${singleArticles.image}`;
  const [isEdit, setIsEdit] = useState(undefined);
  const handleDelteArticle = (e) => {
    e.preventDefault();
    fetch(`${blogRoute}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: AccessToken,
        userAccess: userids,
      },
    })
      .then((res) => {
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditArticle = (e) => {
    e.preventDefault();
    setIsEdit("editing");
  };
  const handleSubmitEdit = (e) => {
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
    fetch(`${blogRoute}/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: AccessToken,
        userAccess: userids,
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
    <Wrapper>
      {isEdit === "editing" ? (
        <div className="edit-article">
          <form
            encType="multipart/form-data"
            onSubmit={(e) => handleSubmitEdit(e)}
          >
            <div className="header">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name=""
                id="title"
                defaultValue={singleArticles.title}
              />
            </div>
            <div className="image">
              <input type="file" name="" id="image" />
            </div>
            <div className="description">
              <input
                type="text"
                id="descr"
                defaultValue={singleArticles.description}
              />
            </div>
            <div className="content">
              <input
                type="text"
                id="content"
                defaultValue={singleArticles.content}
              />
            </div>
            <button type="submit">Make changes</button>
          </form>
        </div>
      ) : (
        <div className="single-blog-post">
          <div className="header">
            <h1>{singleArticles.title}</h1>
          </div>
          <div className="img">
            <img src={images} alt="" />
          </div>
          <div className="content">
            <h3>{singleArticles.description}</h3>
            <p>{singleArticles.content}</p>
          </div>
          <div className="spec">
            <div>
              <h5>
                Published by: <small>{singleArticles.author}</small>
              </h5>
            </div>
            <div>
              <h5>
                Date:{" "}
                <small>
                  {new Date(singleArticles.updatedAt).toLocaleDateString(
                    "en-US"
                  )}
                </small>
              </h5>
            </div>
          </div>
          {singleArticles.userId === userId ? (
            <div className="links">
              <div>
                <form onSubmit={(e) => handleDelteArticle(e)}>
                  <button type="submit" value={singleArticles._id}>
                    Delete
                  </button>
                </form>
              </div>
              <div>
                <form onSubmit={(e) => handleEditArticle(e)}>
                  <button type="submit" value={singleArticles._id}>
                    Edit
                  </button>
                </form>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #fff;
  font-family: "poppins", sans-serif;
  .single-blog-post {
    background: #131324;
    max-width: 1100px;
    margin: 2rem auto;
    padding: 1rem 0.1rem;
    .header {
      text-align: center;
      h1 {
        color: #fff;
        font-size: 1.5rem;
        padding: 1rem 0;
      }
    }
    .img {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 2rem;
      img {
        width: 100%;
        height: 500px;
      }
    }
    .content {
      text-align: center;
      padding: 1rem 2rem;
      h3 {
        color: #fff;
        padding: 1rem;
      }
      p {
        line-height: 1.6;
        padding-bottom: 2rem;
        color: #fff;
      }
    }
    .spec {
      padding: 1rem 2rem 2rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h5 {
        font-weight: 700;
        font-size: 15px;
        color: #fff;
        small {
          font-size: 14px;
          color: #ccc;
        }
      }
    }
    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 1rem;
      align-items: center;
      width: 300px;
      margin: 0 auto;
      button {
        /* color:#ffffff39; */
        background: purple;
        cursor: pointer;
        border: purple;
        color: #fff;
        padding: 15px 40px;
        border-radius: 5px;
      }
    }
  }
`;

export default SingleArticle;
