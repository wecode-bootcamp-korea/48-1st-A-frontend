import './Posts.scss';
import PostReply from './PostReply';

const Posts = ({ postData, formateDate }) => {
  const { id, userProfile, nickName, createdAt, likeCount, content, comments } =
    postData;
  return (
    <li key={id} className="postListContainer">
      <div className="postContainer">
        <div className="writerDesktop">
          <div className="userInfoWrap">
            <img
              className="profileImg"
              src={process.env.PUBLIC_URL + userProfile}
              alt="프로필"
            />
            <span className="nameProfile">{nickName}</span>
          </div>
          <div className="functionWrap">
            <span className="dateInfo">{formateDate(new Date(createdAt))}</span>
            <button className="deleteBtn">삭제</button>
            <button className="modifyBtn">수정</button>
          </div>
        </div>

        <div className="postTextContainer body1">
          <p>{content}</p>
        </div>
        <div className="actionInfo">
          <div className="actionWrap">
            <div className="likeInfo">좋아요 {likeCount}</div>
            <div className="commentInfo">댓글 {comments.length}</div>
          </div>
          <img className="heartIcon" src="/images/heart.svg" alt="좋아요" />
        </div>
      </div>
      <PostReply />
    </li>
  );
};

export default Posts;
