import React, { Fragment } from "react";
import PostItem from "./PostItem";
import {PostModel} from "../../models/Post.model";

const PostList = (props) => {
  const loadedPosts: PostModel[] = props.posts;
  let posts = [];

  for (const key in loadedPosts) {
    posts.push(loadedPosts[key]);
  }

  return (
    <Fragment>
      <ul>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            author={post.author}
            text={post.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PostList;
