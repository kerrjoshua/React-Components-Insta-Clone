import React from 'react';
import Comment from './Comment';
import './Comments.css';
import { v4 as uuid } from 'uuid';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => {

        return <Comment comment={comment} key={uuid()} />;

      })}
    </div>
  );
};

export default Comments;
