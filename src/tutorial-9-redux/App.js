import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "./actions";
import { Grid } from "@mui/material";
import { Comments } from "./components/Comments";
import { Header } from "./components/Header";
import Post from "./components/Post";

function AppConnect() {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="AppConnect">
      <Header onAddPost={() => dispatch(addPost())} />
      <Grid className="wrapper" container spacing={2}>
        <Grid item xs={7}>
          {posts.map((obj) => (
            <Post key={obj.id} {...obj} />
          ))}
        </Grid>
        <Grid item xs={5}>
          <Comments />
        </Grid>
      </Grid>
    </div>
  );
}

export default AppConnect;
