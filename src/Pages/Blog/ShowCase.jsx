/* eslint-disable */
import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Head from "../../Components/Blog/Showcase/Head";
import BlogNavbar from "../../Components/Navbar/BlogNavbar";
// import styled from "styled-components";
// import image from "../../../public/assets/pics.jpg";
import { blogRoute } from "../../utils/api";
import ShowCaseFooter from "../../Components/Footer/ShowCaseFooter";
import SingleArticle from "../../Components/Blog/SingleArticle/SingleArticle";
import MultipleBlog from "./MultipleBlog";
import { toast } from "react-toastify";
export default function ShowCase() {
  const toastOptions = {
    position: "bottom-right",
    draggable: true,
    pauseOnHover: true,
    autoClose: 800,
    theme: "dark",
  };
  const Navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [singleArticles, setSingleArticles] = useState([]);
  let isPage = false;
  const [id, setId] = useState(undefined);
  const AccessToken = localStorage.getItem("x-access-token");
  const userId = localStorage.getItem("app-user");
  useEffect(() => {
    axios
      .get(blogRoute + "?page=1")
      .then((res) => {
        console.log(res.status);
        if (res.status === 400) {
          console.log("An error has occured");
        }
        if (res.status === 200) {
          setArticles(res.data.articles);
        }
      })
      .catch((err) => {
        console.log(err);
        Navigate("/");
        return toast.info("Login or signup to continue", toastOptions);
      });
  }, []);

  const handleSemiSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${blogRoute}/${id}`, {
        headers: {
          Authorization: AccessToken,
          userAccess: userId,
        },
      })
      .then((res) => {
        if (res.status === 400) {
          console.log(res.status);
          isPage = false;
        }
        if (res.status === 403) {
          console.log(res.status);
        }
        if (res.status === 200) {
          isPage = true;
          setSingleArticles(res.data.article);
        }
      })
      .catch((err) => {
        console.log(err);
        isPage = false;
        Navigate("/");
        toast.info("Login or signup to continue", toastOptions);
      });
  };

  return (
    <div>
      <BlogNavbar />
      {singleArticles.length == 0 ? (
        <div>
          <Head />
          <MultipleBlog
            articles={articles}
            setId={setId}
            id={id}
            handleSemiSubmit={handleSemiSubmit}
          />
        </div>
      ) : (
        <SingleArticle
          singleArticles={singleArticles}
          userId={userId}
          id={id}
        />
      )}
      <ShowCaseFooter />
    </div>
  );
}

// const Logic = () => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     axios.get(...).then(setData).catch(...)
//   }, [])
//   return <View data={data.map((item) => ({...item, title: item.title.toUpperCase()})} />
// }

// const View = ({data}) => (
//   <>
//     {data.map(item => <div>{item.title</div>)}
//   </>
// )
