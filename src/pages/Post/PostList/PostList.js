import React from 'react';
import './PostList.scss';
import { useEffect, useState } from 'react';
import Posts from './components/Posts';

const PostList = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('/data/postData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(result => {
        setPostData(result);
      });
  }, []);

  return (
    <article>
      <ul className="postList">
        <Posts postData={postData} />
      </ul>

      <div className="bottomAction">
        <button className="writeBtn">글 쓰기</button>
      </div>
    </article>
  );
};

export default PostList;
