/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Pagination from "@material-ui/core/TablePagination";
import image from "../../public/assets/demo.png";
import Icons from "@material-ui/core/IconButton";
import { blogRoute } from "../utils/api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SingleArticle from "../Components/Blog/SingleArticle/SingleArticle";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#131324",
    opacity: "0.8",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSIze: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 200,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  view: {
    padding: "0 5rem",
    fontWeight: "700",
  },
  pagination: {
    display: "flex",
    justifycontent: "center",
  },
  flexnav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navlinks: {
    padding: "5px",
    margin: "0 20px",
    color: "#fff",
    display: "inline-block",
  },
  navlinksa: {
    textDecoration: "none",
    color: "#fff",
  },
}));
const date = new Date().toDateString();
function Test() {
  const Navigate = useNavigate();
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [single, setSingle] = useState({
    id: "",
  });
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get(blogRoute + "?page=2")
      .then((res) => {
        if (res.status === 400) {
          console.log("An error has occured");
        }
        if (res.status === 200) {
          setArticles(res.data.articles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleMouseOver = (e) => {
    setSingle({ ...single, [e.target.name]: e.target.value });
  };
  console.log(single);

  const handleSingleArticle = (e) => {
    e.preventDefault();
    axios
      .get(blogRoute + `/${single.id}`)
      .then((res) => {
        if (res.status === 400) {
          console.log("An error occured");
        }
        if (res.status === 200) {
          setArticle(res.data.article);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    Navigate("/single");
  };
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar className={classes.flexnav}>
          <Box>
            <Typography variant="h6" color="color">
              Blog
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.navlinks}>
              <Link to="/" className={classes.navlinksa}>
                Home
              </Link>
            </Typography>
            <Typography className={classes.navlinks}>
              <Link to="/" className={classes.navlinksa}>
                Notice
              </Link>
            </Typography>{" "}
            <Typography className={classes.navlinks}>
              <Link to="/" className={classes.navlinksa}>
                Logout
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>TOF SCHOOL MANAGEMENT</Box>
      </Box>
      <Container max-width="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {articles.map((article) => {
            return (
              <Grid item xs={12} sm={12} md={4} key={article._id}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image}
                      title={article.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                      </Typography>
                      <Typography
                        varaint="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {article.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.CardActions}>
                    <Box className={classes.author}>
                      <Avatar src="../../public/assets/facebook.png"></Avatar>
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          {article._id.toString()}
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
                      <form onSubmit={(e) => handleSingleArticle(e)}>
                        {/* <input
                          type="text"
                          name="id"
                          value={article._id.toString()}
                          onMouseOver={(e) => handleMouseOver(e)}
                        /> */}
                        <Button
                          type="submit"
                          size="small"
                          className={classes.view}
                          color="primary"
                        >
                          View
                        </Button>
                      </form>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {/* <SingleArticle article={() => article} style={show} /> */}
    </div>
  );
}

export default Test;
