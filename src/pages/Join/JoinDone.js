import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './JoinDone.scss';

const JoinDone = () => {
  const navigate = useNavigate();

  const joinDoneOk = () => {
    navigate('/');
  };
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
        <button className="loginBtn" type="button" onClick={joinDoneOk}>
          완료
        </button>
      </div>
    </article>
  );
};

export default JoinDone;
