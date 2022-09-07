import logo from "./assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light m-0 p-3">
        <div className="container">
          <a href="/" className="navbar-brand">
            <div className="d-flex">
              <img src={logo} alt="logo" className="mr-2 w-auto" />
              <h3>Troy Italian and Indian Restaurant</h3>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
