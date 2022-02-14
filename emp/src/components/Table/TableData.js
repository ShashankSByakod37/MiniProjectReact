import React from "react";
import { Link,useNavigate } from "react-router-dom";

export const TableData = ({ emp,deleteEmployee,updateChange }) => {
    const navi = useNavigate();
  return (
    <>
      <tr key={emp.id}>
        <Link
          className="list-group-item list-group-item-action"
          to={`/employees/${emp.id}`}
          value="here"
        >
          <td>
            {emp.firstName} {emp.lastName}
          </td>
          {/* <td>{emp.email}</td> */}
        </Link>
        <td>
          <button className="btn btn-danger" onClick={()=>{deleteEmployee(emp)}}>Delete</button>
        </td>
        <td>
          <button className="btn btn-warning" onClick = {()=>{updateChange(emp)
            navi("/form")
        }}>Update</button>
        </td>
      </tr>
    </>
  );
};
