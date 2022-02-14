import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./shared/Card";
import EmployeeContext from "../context/EmployeeContext";

export const EmployeeDetails = () => {
  const { employees } = useContext(EmployeeContext);
  const { id } = useParams();

  const emp = employees.find((emp) => emp.id == id);

  {console.log(emp)}

  const navigate = useNavigate();
  // const EmployeeStyling = {
  //   border: "1px solid black",
  //   margin: "5%",
  //   borderRadius: "10px",
  //   backgroundColor: "rgba(178, 178, 128, .5)",
  // };
  return (
    <>
      <Card>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h1>
                {emp.firstName} {emp.lastName}
              </h1>
              <h3>{emp.email}</h3>
            </div>
          </div>
        </div>
      </Card>
      <button className="btn btn-primary" 
        onClick={() => {
          navigate("/employees");
        }}
      >
        go Back
      </button>
    </>
  );
};
