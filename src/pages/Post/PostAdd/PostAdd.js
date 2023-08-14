import React, { useState } from 'react';
import './PostAdd.scss';
import { useNavigate } from 'react-router-dom';

const Post_add = () => {
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
    } else {
      fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,
        }),
      }).then(response => response.json());

      alert('게시글이 등록되었습니다.');
      navigate('/post-list');
    }
  };

  return (
    <article>
      <div className="container">
        <div className="profileImg">
          <img src="\images\user1.png" alt="유저사진" />
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
          <button className="addCancel" onClick={goToBack} type="button">
            취소
          </button>
          <button className="addPost" onClick={handleSubmit} type="button">
            게시
          </button>
        </div>
      </div>
    </article>
  );
};

export default Post_add;
