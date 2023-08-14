import React from 'react';
import { Link } from 'react-router-dom';
import './JoinInfo.scss';

const JoinInfo = () => {
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
          <p>기본정보</p>
          <div className="containerBox">
            <div className="containerInputBox">
              <input className="containerInput" placeholder="이메일" />
              <input className="containerInput" placeholder="비밀번호" />
              <input className="containerInput" placeholder="비밀번호 확인" />
            </div>
          </div>
        </div>
        <div>
          <p>닉네임</p>
          <div className="containerBox">
            <input className="containerInput" placeholder="닉네임" />
          </div>
        </div>
        <div>
          <p>전화번호</p>
          <div className="phoneBox">
            <select className="phoneSelect">
              <option className="phoneOption">010</option>
              <option>011</option>
              <option>012</option>
              <option>기타</option>
            </select>
            <input
              className="phoneInput"
              placeholder="휴대폰 번호를 입력해주세요."
            />
          </div>
        </div>
        <div>
          <p>생일</p>
          <div className="birthBox">
            <select className="birthYear">
              <option>1988년</option>
            </select>
            <select className="birthMonth">
              <option>월</option>
            </select>
            <select className="birthDay">
              <option>일</option>
            </select>
          </div>
        </div>
      </div>
      <div className="btnStyle">
        <button>
          <Link to="/join-done" className="linkStyle">
            회원 가입
          </Link>
        </button>
      </div>
    </article>
  );
};

export default JoinInfo;
