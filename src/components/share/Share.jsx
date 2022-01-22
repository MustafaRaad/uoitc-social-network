import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="container shadow rounded-2">
      <div className="p-2">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
          <textarea placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr />
        <div className="shareBottom container">
          <div className="row">
            <div className="col-10 d-flex">
              <div className="shareOption col">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span>Photo or Video</span>
              </div>
              <div className="shareOption col">
                <Label htmlColor="blue" className="shareIcon" />
                <span>Tag</span>
              </div>
              <div className="shareOption col">
                <Room htmlColor="green" className="shareIcon" />
                <span>Location</span>
              </div>
              <div className="shareOption col">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span>Feelings</span>
              </div>
            </div>
            <button className="btn btn-success col">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
