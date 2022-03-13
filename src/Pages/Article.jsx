/*eslint-disable*/
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { blogRoute } from "../utils/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Article() {
  const Navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let articles;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = "POST";
    const formData = new FormData();
    const { title, description, image, content } = inputs;
    const data = await axios.post(blogRoute, {
      title,
      description,
      image,
      content,
    });
    if (data.request.status === 400) {
      alert("An error has occured");
    }
    if (data.request.status === 201) {
      var dataRetrieved = data.data.articles;
      articles = {
        title: dataRetrieved.title,
        description: dataRetrieved.description,
        content: dataRetrieved.content,
        image: dataRetrieved.image,
        _id: dataRetrieved._id,
        userId: dataRetrieved.userId,
        createdAt: dataRetrieved.createdAt,
      };
    }
    Navigate("/article");
  };
  return (
    <div>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-elements">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-elements">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-elements">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              name="content"
              id="content"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-elements">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="fomrm-elements">
            <button type="submit">Create Article</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

const Container = styled.div``;

export default Article;
