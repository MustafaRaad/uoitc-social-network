import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div>
          <div className="profileRightTop">
            <div className="profileCover row justify-content-center  align-items-center bg-light">
              <div className="coverLeft">
                <img
                  className="profileUserImg"
                  src="assets/person/1.jpg"
                  alt=""
                />
              </div>
              <div className="coverRight">
                <h4 className="profileInfoName">Ali Abbas</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
              </div>
            </div>
          </div>
          <div className="row">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
