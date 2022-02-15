import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./shared/Card";
import EmployeeContext from "../context/EmployeeContext";

export const EmployeeDetails = () => {
  const { employees } = useContext(EmployeeContext);
  const { id } = useParams();

  const emp = employees.find((emp) => emp.id == id);

  {
    console.log(emp);
  }

  const navigate = useNavigate();
  // const EmployeeStyling = {
  //   border: "1px solid black",
  //   margin: "5%",
  //   borderRadius: "10px",
  //   backgroundColor: "rgba(178, 178, 128, .5)",
  // };
  return (
    <>
      <Card reverse={true} style={{ width: "70%", margin: "auto 15%" }}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-10 display-4"
              style={{ textAlign: "center" }}
            >
              <strong>Full Name : </strong>
              {emp.firstName} {emp.lastName}
              {/* <br /> */}
              <div>
                <strong>Email id : </strong>
                {emp.email}
              </div>
            </div>
          </div>
        </div>
      </Card>
      <button
        style={{ marginLeft: "20%" }}
        className="btn btn-primary"
        onClick={() => {
          navigate("/employees");
        }}
      >
        go Back
      </button>
    </>
  );
};
