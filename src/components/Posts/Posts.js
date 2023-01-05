import React from 'react';
import Post from './Post';
import './Posts.css';
import { v4 as uuid } from 'uuid';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
     {posts.map(post => {
      return <Post post={post} likePost={likePost} key={uuid()}/>
     })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
