import {Link} from "react-router-dom";

export const Header = () => {
    
  return (
    <>
      <ul className="nav">
      <li className="nav-item active">
          <Link className="nav-link " aria-current="page" to = "/">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link " aria-current="page" to = "/about">
            About
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link " aria-current="page" to = "/form">
            Form
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to = "/employees">
          EmployDetails
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to = "/employees/:id">
            
          </Link>
        </li>
       
      </ul>
    </>
  );
};
