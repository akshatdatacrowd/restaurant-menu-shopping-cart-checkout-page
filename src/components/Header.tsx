import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Header d-flex justify-content-around flex-wrap bg-ranaheader w-100">
        <div className="col-12 col-md-10 col-lg-6 justify-content-center text d-flex align-items-center">
          <a href="/">
            <img src={logo} alt="logo" className="w-100" />
          </a>
          <p className="fs-2 fw-bold text-muted">Troy </p>
        </div>
        <div className="col-12 col-md-10 col-lg-4 justify-content-center d-flex align-items-center">
          <Link to="/"><p className="fs-2 fw-bold text-muted mx-3 ">Menu </p></Link>
          <Link to='/about'><p className="fs-2 fw-bold text-muted mx-3">Our Story </p></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
