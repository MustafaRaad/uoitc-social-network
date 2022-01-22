import Post from "../post/Post";
import Share from "../share/Share";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="col-md-8 col-sm-12">
      <div className="p-3">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}