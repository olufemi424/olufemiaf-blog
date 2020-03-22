import React from "react";
import { Link } from "gatsby";
import { PostListItemCard } from "./PostItemStyles";

const PostList = ({ post }) => {
  return (
    <PostListItemCard>
      <Link to={`/blog/${post.node.fields.slug}`}>
        <h1>{post.node.frontmatter.title}</h1>
        <div className="post-details-group">
          <p className="post-author">
            <span role="img" aria-label="creator">
              📝
            </span>{" "}
            {post.node.frontmatter.author}
          </p>
          <p className="post-date">
            <span role="img" aria-label="date">
              📆
            </span>
            {post.node.frontmatter.date}
          </p>
        </div>
        <p className="post-excerpt">{post.node.excerpt}</p>
      </Link>
    </PostListItemCard>
  );
};

export default PostList;
