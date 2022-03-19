import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import image from "../../../public/assets/pics.jpg";
function MultipleBlog({ articles, handleSemiSubmit, setId, id }) {
  const handleNav = (e) => {
    setId(e.target.value);
  };
  // Date.UTC()
  return (
    <Wrapper>
      <section>
        <div className="blog-articles">
          {articles.map((article) => {
            return (
              <div className="blog-container" key={article._id}>
                <div className="blog-img-sect">
                  <img src={`http://localhost:8081/${article.image}`} alt="" />
                </div>
                <div className="blog-txt-sect">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <div className="view">
                    <form onSubmit={(e) => handleSemiSubmit(e)}>
                      <button
                        className=""
                        value={article._id}
                        onClick={(e) => handleNav(e)}
                        type="submit"
                      >
                        View
                      </button>
                    </form>
                  </div>
                  <div className="box">
                    <div className="avater">
                      <Avatar
                        src={`http://localhost:8081/${article.image}`}
                      ></Avatar>
                      <p>{article.author}</p>
                    </div>
                    <div className="date">
                      <small>
                        {new Date(article.createdAt).toLocaleDateString(
                          "en-US"
                        )}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="head">
        <h1>MOST LOVED ARTICLES</h1>
      </div>
      <section>
        <div className="blog-articles">
          {articles.map((article) => {
            return (
              <div className="blog-container" key={article._id}>
                <div className="blog-img-sect">
                  <img src={image} alt="" />
                </div>
                <div className="blog-txt-sect">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <div className="view">
                    <button className="">View</button>
                  </div>
                  <div className="box">
                    <div className="avater">
                      <Avatar src={""}></Avatar>
                      <p>{article.author}</p>
                    </div>
                    <div className="date">
                      <small>{new Date().toDateString()}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="head">
        <h1>LATEST NEWS FROM THE ADMINS</h1>
      </div>
      <section>
        <div className="blog-articles">
          {articles.map((article) => {
            return (
              <div className="blog-container" key={article._id}>
                <div className="blog-img-sect">
                  <img src={image} alt="" />
                </div>
                <div className="blog-txt-sect">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <div className="view">
                    <button className="">View</button>
                  </div>
                  <div className="box">
                    <div className="avater">
                      <Avatar src={""}></Avatar>
                      <p>{article.author}</p>
                    </div>
                    <div className="date">
                      <small>{new Date().toDateString()}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blog-articles {
    margin: 2rem auto;
    max-width: 1200px;
    padding: 0.3rem 2rem;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    padding-bottom: 5rem;

    grid-gap: 1rem;
    .blog-container {
      border-radius: 3px;
      background: #131324;
      display: flex;
      flex-direction: column;
      color: #fff;
      .blog-img-sect {
        img {
          width: 100%;
          height: 230px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          position: relative;
        }
      }
      .blog-txt-sect {
        padding: 2rem 0.8rem;
        text-align: center;
        line-height: 1.6;
        position: relative;
        .view {
          position: sticky;
          text-align: center;

          button {
            padding: 15px 25px;
            border-radius: 3px;
            cursor: pointer;
            border: #131324;
            color: #fff;
            background: #ffffff39;
            &:hover {
              opacity: 0.8;
            }
          }
        }
        h3 {
          padding-bottom: 1.2rem;
        }
        p {
          padding-bottom: 1rem;
        }
      }
      .box {
        text-align: left;
        padding-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .avater {
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            font-size: 12px;
          }
          img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            padding-bottom: 5px;
          }
        }
        .date {
          padding-top: 1.3rem;
          small {
            font-size: 12px;
          }
        }
      }
    }
  }
  .head {
    margin: 1rem auto;
    max-width: 1200px;
    padding: 2px 2rem;
    text-align: center;
    padding-bottom: 2rem;
  }
`;

export default MultipleBlog;
