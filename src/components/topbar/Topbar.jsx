import "./topbar.css";
import { Search, Person, Chat, Notifications, Home } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container justify-content-between">
        <div className=" w-25">
          <a className="navbar-brand" href="/">
            <img src="/assets/uoitc-logo.png" alt="" height="35" />
            <span> | Social Network</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-around w-100">
            <li className="nav-item align-self-center w-50">
              <div className="searchbar">
                <Search className="searchIcon" />
                <input
                  placeholder="Search for friend, post or video"
                  className="searchInput"
                />
              </div>
            </li>

            <div className="topbarRight lign-self-center w-25 d-flex">
              <div className="navbar-nav ml-auto me-3 justify-content-end">
                <li className="nav-item">
                  <a className="topbarIconItem nav-link" href="/">
                    <Home />
                  </a>
                </li>
                <li className="nav-item">
                  <div className="topbarIconItem nav-link">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="topbarIconItem nav-link">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="topbarIconItem nav-link">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                  </div>
                </li>
              </div>
              <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
