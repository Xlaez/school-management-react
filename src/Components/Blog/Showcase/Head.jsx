import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import image from "../../../../public/assets/pics.jpg";
function Head() {
  return (
    <Wrapper>
      <div className="main">
        <h3>VIEW ARTICLES FROM STUDENTS ACROSS ALL CLASSES</h3>
        <p>
          Get to read more innovative, inspiring, educative and enlightening
          articles from across all students in your school. Get to read more
          innovative, inspiring, educative and enlightening articles from across
          all students in your school.Get to read more innovative, inspiring,
          educative and enlightening articles from across all students in your
          school.
        </p>
        <div className="navigate">
          <button>
            <Link to="/articles">View all articles</Link>
          </button>
        </div>
        <div className="head">
          <h1>MOST VIEWED ARTICLES</h1>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .main {
    max-width: 1200px;
    margin: 1rem auto;
    padding: 5rem 2rem 2rem 2rem;
    text-align: center;
    h3 {
      font-size: 1.8rem;
      font-weight: 800;
      padding-bottom: 2rem;
    }
    p {
      padding: 2px 2rem;
      line-height: 1.6;
      font-weight: 500;
    }
    .navigate {
      padding: 4rem;

      button {
        padding: 20px 40px;
        color: #ffffff;
        border-radius: 5px;
        border: 1px solid #131324;
        background: #131324;
        cursor: pointer;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-delay: 3ms;
        transition-duration: 1s;
        transform-style: flat;
        &:hover {
          opacity: 0.9;
        }
        a {
          color: #ffffff;
          text-decoration: none;
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
`;

export default Head;
