import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <article className="loginArticle">
      <div className="logoBox">
        <img src="./images/Logo.png" alt="/" />
        <img src="./images/logo_wecode.png" alt="/" />
      </div>
      <div className="containerBox">
        <div className="containerInputBox">
          <input className="containerInput" placeholder="이메일" />
          <input
            type="password"
            className="containerInput"
            placeholder="비밀번호"
          />
        </div>
        <button>
          <Link to="/" className="linkStyle">
            로그인
          </Link>
        </button>
        <div className="memberJoin">
          <Link to="/join-info" className="linkStyle">
            회원 가입
          </Link>
          <div></div>
          <Link to="/" className="linkStyle">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Login;
