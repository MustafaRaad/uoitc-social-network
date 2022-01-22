import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";
import { post } from "jquery";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <span className="birthdayText">
            <b>Upcoming courses Anouncment</b>
            <br />
            <ul>
              <li>
                <small>Buisness Strategy: Dr. Ali</small>
              </li>
            </ul>
          </span>
        </div>
        <h4 className="rightbarTitle mt-5">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Karblaa</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Work:</span>
            <span className="rightbarInfoValue">Developer</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">My friends</h4>
        <div className="rightbarFollowings">
          {Users.map((u) => (
            <div className="rightbarFollowing" key={u.id} user={u}>
              <img
                src={u.profilePicture}
                alt=""
                className="rightbarFollowingImg"
              />
              <small className="rightbarFollowingName">{u.username}</small>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="col">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
