import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "react-crud-icons";
// import "../node_modules/react-crud-icons/dist/react-crud-icons.css";

export const TableData = ({ emp, deleteEmployee, updateChange }) => {
  const navi = useNavigate();
  return (
    <>
      <tr key={emp.id} >
        <Link
          className="list-group-item list-group-item-action display-6"
          style= {{border:"none"}}
          to={`/employees/${emp.id}`}
          value="here"
        >
          <td >
            {emp.firstName} {emp.lastName}
          </td>
          {/* <td>{emp.email}</td> */}
        </Link>
        <td>
          <div className=" deleteIcons " style= {{border:"none"}}>
            <Icon
              tooltip=""
              name="delete"
              // tooltip="delete"
              theme="dark"
              size="big"
              onClick={() => {
                deleteEmployee(emp);
              }}
            />
          </div>
          {/* <button className="btn btn-danger" onClick={()=>{deleteEmployee(emp)}}>Delete</button> */}
        </td>
        <td>
          {/* <button className="btn btn-warning" onClick = {()=>{updateChange(emp)
            navi("/form")
        }}>Update</button> */}

          <div className=" editIcons" style= {{border:"none"}}>
            <Icon
              name="edit"
              onClick={() => {
                updateChange(emp);
                navi("/form");
              }}
              // tooltip="Edit"
              theme="dark"
              size="big"
            />
          </div>
        </td>
      </tr>
    </>
  );
};
