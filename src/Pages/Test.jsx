/*eslint-disable*/
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Styles/Blog.css";
import { blogRoute } from "../utils/api";
import image from "../../public/assets/demo.png";
// import SingleArticle from "./SingleArticle";

function Blog() {
  const Navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    fetch(blogRoute, {
      headers: { "Content-Type": "multipart/form-data " },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((resdata) => {
        setArticles(
          resdata.articles.map((article) => {
            return {
              ...article,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const singleArticle = [];
  const handleSinglePage = (e) => {
    e.preventDefault();
    fetch(`${blogRoute}/${params}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((resdata) => {
        singleArticle.push(
          resdata.map((article) => {
            return {
              ...article,
            };
          })
        );
      })
      .catch((err) => {
        throw new Error("Didn't succeed");
      });
  };
  //--legacy - peer - deps;
  return (
    <div className="blog-wrapper">
      <Navbar />
      <div className="search-bar">
        <form>
          <input type="search" name="user" id="search-bar" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="blog-cover">
        <div className="blog-body">
          {articles.map((article) => {
            const articleImg = `http://localhost:8080/assets`;
            return (
              <div className="article-container" key={article._id}>
                <div className="img-cat">
                  <img src={image} alt="" />
                </div>
                <div className="txt-cat">
                  <form onSubmit={(e) => handleSinglePage(e)}>
                    <h3 className="articles-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                    <input
                      type="text"
                      value={article.userId}
                      name="userId"
                      className="id-param"
                      readOnly
                    />
                    <input
                      type="text"
                      name="articleId"
                      value={article._id}
                      className="id-param"
                      onChange={(e) => handleChange(e)}
                    />
                    <button type="submit">See more</button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
        <div className="side-bar">
          <div className="side-bar-content">
            <h2>Recent Articles</h2>
            {articles.map((article) => {
              return (
                <div key={article._id} className="content">
                  <img src={image} alt="" />
                  <p>{article.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

{
  /* <Grid item xs={12} sm={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="The Advent Of APIs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Component
                  </Typography>
                  <Typography
                    varaint="body2"
                    color="textSecondary"
                    component="p"
                  >
                    React Is a very helpful tool for frontend, it has another
                    relative called react Native used for monbile apps
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src="../../public/assets/facebook.png"></Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      James Etoro
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      {date}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button size="small" className={classes.view} color="primary">
                    view
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="The Advent Of APIs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Component
                  </Typography>
                  <Typography
                    varaint="body2"
                    color="textSecondary"
                    component="p"
                  >
                    React Is a very helpful tool for frontend, it has another
                    relative called react Native used for monbile apps
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src="../../public/assets/facebook.png"></Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      James Etoro
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      {date}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button size="small" className={classes.view} color="primary">
                    view
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid> */
}
