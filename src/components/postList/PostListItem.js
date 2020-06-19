import React from "react";
import { Link } from "gatsby";
import { PostListItemCard } from "./PostItemStyles";

import img from '../../../static/images/template-strings.png'


const PostList = ({ post }) => {

  const { node:postData } = post;

  console.log(postData)

  return (
    <PostListItemCard>
        <div className="post-list-item__image">
          <img src={img} alt=""/>
        </div>
        <div className="post-list-item__info">
          <Link to={`/blog/${postData.fields.slug}/`}>
              <h3 className="title">
                {postData.frontmatter.title}
              </h3>
          </Link>
          <p className="description">
            {postData.excerpt}
          </p>
          <div className="post-info">
          <p className="post-info-name">
            <span role="img" aria-label="creator">
              📝
            </span>{" "}
            {post.node.frontmatter.author}
          </p>
          <p className="post-info-date">
            <span role="img" aria-label="date">
              📆
            </span>
            {post.node.frontmatter.date}
          </p>
          </div>
        </div>
    </PostListItemCard>
  );
};

export default PostList;
