import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Posts from './components/Posts';
import Button from './components/Button';
import './PostList.scss';

const PostList = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('/data/postData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: '토큰',
      },
    })
      .then(res => res.json())
      .then(result => {
        setPostData(result.data);
      });
  }, []);

  const navigate = useNavigate();
  const goToPostEditing = () => {
    navigate('/post-editing');
  };

  const formateDate = date => {
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}.${month}.${day}`;
  };

  return (
    <article className="articlePostList">
      <ul className="postList">
        {postData.map(postData => {
          return (
            <Posts
              key={postData.postId}
              postData={postData}
              formateDate={formateDate}
            />
          );
        })}
      </ul>

      <div className="bottomAction">
        <Button
          text="글 쓰기"
          className="writeBtn"
          function={goToPostEditing}
        />
      </div>
    </article>
  );
};

export default PostList;
