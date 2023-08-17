import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostReply from './PostReply';
import './Posts.scss';

const Posts = ({ postData, formateDate }) => {
  const {
    postId,
    userName,
    profileImage,
    isMyPost,
    content,
    isLiked,
    likeCount,
    commentsCount,
    comments,
    createdAt,
  } = postData;

  const [replyToggle, setReplyToggle] = useState(false);

  const openCloseTog = () => {
    setReplyToggle(replyToggle => !replyToggle);
  };

  const navigate = useNavigate();

  const postDeleting = targetId => {
    fetch('/data/postData.json', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: localStorage.getItem('access_token),
        // Authorization: userToken,
      },
      body: JSON.stringify({ postId: targetId }),
    });
  };

  return (
    <li key={postId} className="postListContainer" onClick={openCloseTog}>
      <div className="postContainer">
        <div className="writerDesktop">
          <div className="userInfoWrap">
            <img
              className="profileImg"
              src={process.env.PUBLIC_URL + profileImage}
              alt="프로필"
            />
            <span className="nameProfile">{userName}</span>
          </div>
          <div className="functionWrap">
            <span className="dateInfo">{formateDate(new Date(createdAt))}</span>
            <div className={`function ${isMyPost === false && 'inActive'}`}>
              <button
                className="deleteBtn"
                onClick={() => postDeleting(postData.postId)}
              >
                삭제
              </button>
              <button
                className="modifyBtn"
                onClick={() => navigate('/PostEditing')}
              >
                수정
              </button>
            </div>
          </div>
        </div>

        <div className="postTextContainer">
          <p>{content}</p>
        </div>
        <div className="actionInfo">
          <div className="actionWrap">
            <div className="likeInfo">좋아요 {likeCount}</div>
            <div className="commentInfo">댓글 {commentsCount}</div>
          </div>
          <img className="heartIcon" src="/images/heart.svg" alt="좋아요" />
        </div>
      </div>
      <PostReply
        comments={comments}
        formateDate={formateDate}
        replyToggle={replyToggle}
      />
    </li>
  );
};

export default Posts;
