import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div class="menu-wrap">
      <nav id="navbar">
        <h1>
          <Link to="/">
            <a class="logo">PLATIMUN</a>
          </Link>
        </h1>
      </nav>
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
