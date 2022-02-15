import { Link } from "react-router-dom";
import emp from "../emp.png";

export const Header = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item active">
          <Link className="nav-link h3 "  to="/">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link h3"  to="/about">
            About
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link h3"  to="/form">
            Form
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link h3" to="/employees">
            EmployDetails
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/employees/:id"></Link>
        </li>
      </ul>
      {/* <div className="image"><img src={emp}/></div> */}
    </>
  );
};
