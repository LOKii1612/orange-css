import { NavLink } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <nav className="nav">
      <h2>
        <NavLink
          className="icon"
          style={{
            textDecoration: "none",
            paddingLeft: "2rem",
            color: "BLACK",
          }}
          to="/"
        >
          ORANGE
        </NavLink>
      </h2>
      <ul className="main-navbar-items">
        <li className="top-navbar-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LOKii1612"
          >
            <i class="fab fa-github-square icon"></i>
          </a>
        </li>
        <li className="top-navbar-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nuli-lokesh-nuli/"
          >
            <i class="fab fa-linkedin icon"></i>
          </a>
        </li>
        
      </ul>
    </nav>
  );
};
