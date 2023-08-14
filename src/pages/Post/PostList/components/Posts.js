import '../PostList.scss';

const Posts = ({ postData }) => {
  return (
    <>
      {postData.map((postData, index) => (
        <li key={index} className="postListContainer">
          <div className="writerDesktop">
            <div className="userInfoWrap">
              <img
                className="profileImg"
                src={process.env.PUBLIC_URL + postData.userProfile}
                alt="프로필 이미지"
              />

              <span className="nameProfile">{postData.nickName}</span>
            </div>
            <div className="functionWrap">
              <span className="dateInfo">00. 00. 00</span>
              <button className="deleteBtn">삭제</button>
              <button className="modifyBtn">수정</button>
            </div>
          </div>

          <div className="postTextContainer body1">
            <p>{postData.content}</p>
          </div>
          <div className="actionInfo">
            <div className="actionWrap">
              <div className="likeInfo">좋아요 {postData.likeCount}</div>
              <div className="commentInfo">댓글 {postData.comments.length}</div>
            </div>
            <img
              className="heartIcon"
              src="/images/heart.svg"
              alt="하트아이콘"
            />
          </div>
        </li>
      ))}
    </>
  );
};

export default Posts;
