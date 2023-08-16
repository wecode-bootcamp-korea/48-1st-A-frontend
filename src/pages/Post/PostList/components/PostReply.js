import './PostReply.scss';

const PostReply = ({ comments, formateDate, replyToggle }) => {
  return (
    <div className={replyToggle ? 'replyToggle' : ' closeTog'}>
      <div className="replyInputContainer">
        <input
          className="replyInput"
          type="text"
          placeholder="댓글을 작성해주세요."
        />
        <button className="replyBtn">댓글 게시</button>
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
                      <button className="deleteBtn">삭제</button>
                      <button className="modifyBtn">수정</button>
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
