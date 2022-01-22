import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="container-fluid row">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
