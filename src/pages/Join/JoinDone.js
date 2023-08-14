import React from 'react';
import { Link } from 'react-router-dom';
import './JoinDone.scss';

const JoinDone = () => {
  return (
    <article className="joinDoneArticle">
      <div className="goBack">
        <Link to="/" className="goBackLink">
          <img src="./images/Back_arrow.png" alt="/" />
          <p>뒤로</p>
        </Link>
      </div>
      <div className="container">
        <div className="logoBox">
          <img src="./images/banner_square.png" alt="/" />
          <div className="joinDoneText">
            <h1>회원가입이 완료되었습니다!</h1>
            <p>이제 로그인해주세요.</p>
          </div>
        </div>
      </div>
      <div className="containerBox">
        <button>
          <Link to="/" className="linkStyle">
            확인
          </Link>
        </button>
      </div>
    </article>
  );
};

export default JoinDone;
