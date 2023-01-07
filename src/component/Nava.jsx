import { Link } from "react-router-dom";

function Nava() {
  return (
    <nav>
      <div className="container nav_container">
        <Link to={"/"} className="nav_log">
          Gamal Elwakel
        </Link>
        <ul className="nav_items">
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/category"}>Category</Link>
          </li>
          <li>
            <Link to={"/services"}>Servcies</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="nav_profile">
            <div className="avatar">
              <img src="assets/avatar10.jpg" alt="" />
            </div>
            <ul className="ava">
              <li>
                <Link to={"dashbord"}>Dashbord</Link>
              </li>
              <li>
                <Link to={"/Singout"}>logout</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav_buttons">
          <button calss="open_nav_btn" id="open_nav_btn">
            <i className="uil uil-bars"></i>
          </button>
          <button calss="close" style={{ display: "none" }}>
            <i className="uil uil-times"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nava;
