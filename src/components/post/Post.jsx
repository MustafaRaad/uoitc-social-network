import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const LikeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="container-fluid rounded-3 shadow mt-4">
      <div className="row p-3">
        <div className="d-flex justify-content-between">
          <div className="col-11">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="col-1">
            <MoreVert />
          </div>
        </div>

        <div className="row my-4">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={LikeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={LikeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} like</span>
          </div>
          <div>
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
