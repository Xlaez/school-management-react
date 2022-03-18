import React from "react";
import styled from "styled-components";
import image from "../../../../public/assets/pics.jpg";
function SingleArticle({ singleArticles, userId }) {
  return (
    <Wrapper>
      <div className="single-blog-post">
        <div className="header">
          <h1>{singleArticles.title}</h1>
        </div>
        <div className="img">
          <img src={image} alt="" />
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
              Date: <small>{singleArticles.updatedAt}</small>
            </h5>
          </div>
        </div>
        {singleArticles.userId === userId ? (
          <div className="links">
            <div>
              <form>
                <button type="submit" value={singleArticles._id}>
                  Delete
                </button>
              </form>
            </div>
            <div>
              <form>
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
