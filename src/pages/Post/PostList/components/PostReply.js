import './PostReply.scss';

const PostReply = ({ postData, formateDate }) => {
  return (
    <div className="replyToggle">
      <div className="replyInputContainer">
        <input
          className="replyInput"
          type="text"
          placeholder="댓글을 작성해주세요."
        />
        <button className="replyBtn">댓글 게시</button>
      </div>
      <ul className="replyList">
        <li className="replyDesktop">
          <img
            className="profileImg"
            src={process.env.PUBLIC_URL + '/images/Pic.png'}
            alt="프로필"
          />
          <div className="contentBox">
            <div className="top">
              <span className="nameProfile">nickName</span>
              <div className="functionWrap">
                <span className="dateInfo">00 00 00</span>
                <button className="deleteBtn">삭제</button>
                <button className="modifyBtn">수정</button>
              </div>
            </div>
            <p className="content">답글내용</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PostReply;
