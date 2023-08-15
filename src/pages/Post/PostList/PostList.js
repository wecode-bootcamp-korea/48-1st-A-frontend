import React, { useEffect, useState } from 'react';
import Posts from './components/Posts';
import './PostList.scss';

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
          return <Posts postData={postData} formateDate={formateDate} />;
        })}
      </ul>

      <div className="bottomAction">
        <button className="writeBtn">글 쓰기</button>
      </div>
    </article>
  );
};

export default PostList;
