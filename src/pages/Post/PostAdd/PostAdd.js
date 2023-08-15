import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostAdd.scss';

const PostAdd = () => {
  const [content, setContent] = useState('');

  const saveContent = event => {
    setContent(event.target.value);
  };

  const navigate = useNavigate();
  const goToBack = () => {
    navigate('/post-list');
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      alert('내용을 확인해주세요.');
      return;
    }
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    }).then(response => response.json());

    alert('게시글이 등록되었습니다.');
    navigate('/post-list');
  };

  return (
    <article className="articlePostAdd">
      <div className="container">
        <div className="profileImg">
          <img src="\images\user1.png" />
        </div>
        <div className="content">
          <p className="userName">Name</p>
          <textarea
            value={content}
            onChange={saveContent}
            placeholder="스레드를 시작하세요."
          />
        </div>
      </div>
      <div className="bottom">
        <div className="bottomBtn">
          <button className="addCancel" onClick={goToBack}>
            취소
          </button>
          <button className="addPost" onClick={handleSubmit}>
            게시
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostAdd;
