import React from "react";
import { PostListItemCard } from "./PostItemStyles";

const PostList = ({ post }) => {
  return (
    <PostListItemCard>
      <h1>{post.node.frontmatter.title}</h1>
      <div className="post-details-group">
        <p className="post-author">{post.node.frontmatter.author}</p>
        <p className="post-date">{post.node.frontmatter.date}</p>
      </div>
      <p className="post-excerpt">{post.node.excerpt}</p>
    </PostListItemCard>
  );
};

export default PostList;
