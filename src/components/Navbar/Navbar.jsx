import "./Navbar.css";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  // state variable for toggling between open and close
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="primary__header">
      <div className="header__title">
        <img src={images.logo} alt="logo" className="header__logo" />
        <h1>My Company</h1>
      </div>

      {/* if the toggle state is false then the navigation is hidden */}
      <div
        className={
          toggleMenu === false
            ? "mobile__nav__toggle"
            : "mobile__nav__toggle__close"
        }
      >
        <GiHamburgerMenu
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
      </div>

      <div
        className={
          toggleMenu === false
            ? "mobile__nav__toggle__close"
            : "mobile__nav__toggle"
        }
      >
        <MdOutlineClose
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(false)}
        />
      </div>

      <nav>
        <ul
          className="primary__navigation"
          data-visible={toggleMenu === true ? "true" : "false"}
        >
          <li>
            <a href="#Menu1">Menu 1</a>
          </li>
          <li>
            <a href="#Menu2">Menu 2</a>
          </li>
          <li>
            <a href="#Menu3">Menu 3</a>
          </li>
          <button className="login__btn">Login</button>
        </ul>
      </nav>
    </header>
  );
}
