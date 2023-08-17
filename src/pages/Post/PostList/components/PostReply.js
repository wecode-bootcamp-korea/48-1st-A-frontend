import { useState } from 'react';
import './PostReply.scss';

const PostReply = ({ postId, comments, formateDate, replyToggle }) => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const makeComment = () => {
    if (inputValue === null) return;
    setInputValue('');

    fetch('/data/postData.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: localStorage.getItem('access_token)},
      },
      body: JSON.stringify({
        threadId: postId,
        content: inputValue,
      })
        .then(res => res.json())
        .then(result => setCommentList(cur => [result, ...cur])),
    });
  };

  return (
    <div className={replyToggle ? 'replyToggle' : ' closeTog'}>
      <div className="replyInputContainer">
        <input
          className="replyInput"
          type="text"
          placeholder="댓글을 작성해주세요."
          onChange={event => setInputValue(event.target.value)}
        />
        <button className="replyBtn" onClick={makeComment}>
          댓글 게시
        </button>
      </div>
      <ul className="replyList">
        {comments.length > 0 &&
          comments.map(comments => {
            const {
              commentId,
              userName,
              userProfile,
              comment,
              isMyReply,
              createdAt,
            } = comments;
            return (
              <li key={commentId} className="replyDesktop">
                <img
                  className="profileImg"
                  src={process.env.PUBLIC_URL + userProfile}
                  alt="프로필"
                />
                <div className="contentBox">
                  <div className="top">
                    <span className="nameProfile">{userName}</span>
                    <div className="functionWrap">
                      <span className="dateInfo">
                        {formateDate(new Date(createdAt))}
                      </span>
                      <div
                        className={`function ${
                          isMyReply === false && 'inActive'
                        }`}
                      >
                        <button className="deleteBtn">삭제</button>
                        <button className="modifyBtn">수정</button>
                      </div>
                    </div>
                  </div>
                  <p className="content">{comment}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostReply;
