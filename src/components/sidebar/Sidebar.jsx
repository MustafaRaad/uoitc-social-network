import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

export default function Sidebar() {
  return (
    <div className="sidebar col-md-2 col-sm-12">
      <div className="p-3">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </a>
          </li>
        </ul>
        <button className="btn">Show More</button>
        <hr className="hr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
