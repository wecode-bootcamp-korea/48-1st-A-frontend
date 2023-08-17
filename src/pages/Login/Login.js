import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  const handleInput = event => {
    const { value, id } = event.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const goToMain = () => {
    fetch('http://10.58.52.168:3000/user/signIn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userInfo.userId,
        password: userInfo.userPw,
      }),
    })
      .then(response => {
        response.json();
      })
      .then(result => {
        if (result.accessToken) {
          localStorage.setItem('token', result.accessToken);
          navigate('/join-done');
        }
        if (result.message === 'specified user does not exist') {
          alert('존재하지 않는 아이디입니다');
        }
        if (result.message === 'invalid password') {
          alert('비밀번호가 다릅니다');
        }
      });
  };

  const isActiveLogin =
    userInfo.userId.includes('@') &&
    userInfo.userId.includes('.com') &&
    userInfo.userPw.length >= 5;

  const loginOk = () => {
    isActiveLogin ? goToMain('/join-info') : alert('로그인을 해주세요');
  };

  return (
    <article className="loginArticle">
      <div className="logoBox">
        <img src="./images/Logo.png" alt="/" />
        <img src="./images/logo_wecode.png" alt="/" />
      </div>
      <div className="containerBox">
        <div className="containerInputBox">
          <input
            id="userId"
            className="containerInput"
            type="text"
            placeholder="이메일"
            onChange={handleInput}
          />
          <input
            id="userPw"
            className="containerInput"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
          />
        </div>
        <button className="loginBtn" type="button" onClick={loginOk}>
          로그인
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
