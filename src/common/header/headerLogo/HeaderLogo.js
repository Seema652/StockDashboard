import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/play.png";
function HeaderLogo({ showAsideBar }) {
  return (
    <>
      <div className="nav-header">
        <Link
          to="/dashboard"
          className="brand-logo justify-content-center"
          style={{ padding: "6px" }}
        >
          <div
          className="d-flex justify-content-center align-items-center bg-dark"
            style={{ width: "100%", height: "100%"}}
          >
          <span className="bg-dark">S</span></div>
        </Link>{" "}
        <div className="nav-control" onClick={showAsideBar}>
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderLogo;
