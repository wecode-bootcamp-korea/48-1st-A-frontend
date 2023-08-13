import React from 'react';
import './PostList.scss';
import { useEffect, useState } from 'react';

const Post_list = () => {
  return (
    <article>
      <ul className="postList">
        <li className="postListContainer">
          <div className="writerDesktop">
            <div className="userInfoWrap">
              <img
                className="profileImg"
                src={process.env.PUBLIC_URL + '/images/pic.png'}
              />

              <span className="nameProfile">UserName</span>
            </div>
            <div className="functionWrap">
              <span className="dateInfo">00. 00. 00</span>
              <button className="deleteBtn">삭제</button>
              <button className="modifyBtn">수정</button>
            </div>
          </div>

          <div className="postTextContainer body1">
            <p>
              일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
              사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
              믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
              ELIZA의 이름을 따서 명명되었다.
            </p>
          </div>
          <div className="actionInfo">
            <div className="actionWrap">
              <div className="likeInfo">좋아요 00</div>
              <div className="commentInfo">댓글 00</div>
            </div>
            <img
              className="heartIcon"
              src="/images/heart.svg"
              alt="하트아이콘"
            />
          </div>
        </li>
      </ul>

      <div className="bottomAction">
        <button className="writeBtn">글 쓰기</button>
      </div>
    </article>
  );
};

export default Post_list;
