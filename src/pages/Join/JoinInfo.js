import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './JoinInfo.scss';

const JoinInfo = () => {
  const navigate = useNavigate();

  const joinInfoOk = () => {
    navigate('/join-done');
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
              <input className="containerInput" placeholder="이메일" />
              <input className="containerInput" placeholder="비밀번호" />
              <input className="containerInput" placeholder="비밀번호 확인" />
            </div>
          </div>
        </div>
        <div>
          <div className="infoSelect">
            <p>닉네임</p>
            <span>선택사항</span>
          </div>
          <div className="containerBox">
            <input className="containerInput" placeholder="닉네임" />
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
