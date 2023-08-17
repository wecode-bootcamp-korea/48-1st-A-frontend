import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './JoinInfo.scss';

const JoinInfo = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
    userName: '',
  });

  const handleInput = event => {
    const { value, id } = event.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const goToLoginDone = () => {
    fetch('signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userInfo.userId,
        password: userInfo.userPw,
        nickname: userInfo.userName,
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
        if (result.message === '') {
          alert('아이디는 이메일형식으로 해주세요');
        }
        if (result.message === '') {
          alert('비밀번호는 5글자이상으로 해주세요');
        }
        if (result.message === '') {
          alert('닉네임은 3글자 이상으로 해주세요');
        }
      });
  };

  const isActiveSignUp =
    userInfo.userId.includes('@') &&
    userInfo.userId.includes('.com') &&
    userInfo.userPw.length >= 5 &&
    userInfo.userName.length >= 3;

  const joinInfoOk = () => {
    isActiveSignUp
      ? goToLoginDone('/join-done')
      : alert('필수사항을 입력해주세요');
  };

  return (
    <article className="joinInfoArticle">
      <div className="goBack">
        <Link to="/" className="goBackLink">
          <img src="./images/Back_arrow.png" alt="/" />
          <p>뒤로</p>
        </Link>
      </div>
      <div className="container">
        <h1>회원가입</h1>
        <div>
          <div className="infoDefault">
            <p>기본정보</p>
            <span>필수사항</span>
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
                type="text"
                placeholder="비밀번호"
                onChange={handleInput}
              />
              <input
                className="containerInput"
                type="text"
                placeholder="비밀번호 확인"
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="infoSelect">
            <p>닉네임</p>
            <span>선택사항</span>
          </div>
          <div className="containerBox">
            <input
              id="userName"
              className="containerInput"
              type="text"
              placeholder="닉네임"
              onChange={handleInput}
            />
          </div>
        </div>
        <div>
          <div className="infoSelect">
            <p>전화번호</p>
            <span>선택사항</span>
          </div>
          <div className="phoneBox">
            <select className="phoneSelect">
              <option className="phoneOption">010</option>
              <option>목데이터활용?</option>
            </select>
            <input
              className="phoneInput"
              placeholder="휴대폰 번호를 입력해주세요."
            />
          </div>
        </div>
        <div>
          <div className="infoSelect">
            <p>생일</p>
            <span>선택사항</span>
          </div>
          <div className="birthBox">
            <select className="birthYear">
              <option>1988년</option>
              <option>목데이터활용?</option>
            </select>
            <select className="birthMonth">
              <option>월</option>
              <option>목데이터활용?</option>
            </select>
            <select className="birthDay">
              <option>일</option>
              <option>목데이터활용?</option>
            </select>
          </div>
        </div>
      </div>
      <button className="loginBtn" type="button" onClick={joinInfoOk}>
        회원가입
      </button>
    </article>
  );
};

export default JoinInfo;
