import { useContext, useEffect, useState } from "react";
import { TableHeader } from "./Table/TableHeader";
import Card from "./shared/Card";
import EmployeeContext from "../context/EmployeeContext";
import { Link, useNavigate } from "react-router-dom";
import { TableData } from "./Table/TableData";

export const Employees = () => {
  const { employees, deleteEmployee, updateChange } =
    useContext(EmployeeContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("employees data changed ");

    console.log(employees);
  }, [employees]);
  if (!employees || employees.length == 0) {
    return (
        <div className="col-md-6" style={{
            width: "60%",
            margin: "auto",
            padding: "10px",
        }}>
        <Card  reverse = {true}>
      <div className="container">
        <div className="row" style = {{textAlign:"center"}}>Fill up the form to view Employee Details...!</div>
        <div className="row">
          <div className="auto">
            <button style = {{margin:"15%"}}
              className="btn btn-primary "
              onClick={() => {
                navigate("/form");
              }}
            >
              Move to Form{" "}
            </button>
          </div>
        </div>
      </div>
      </Card>
              </div>
    );
  }

  return (
    <>
      <Card>
        <table class="table table-hover">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {employees.map((emp) => {
              return (
                <TableData
                  emp={emp}
                  key={emp.id}
                  updateChange={updateChange}
                  deleteEmployee={deleteEmployee}
                />
              );
            })}
          </tbody>
        </table>
      </Card>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/form");
        }}
      >
        Move to Form{" "}
      </button>
    </>
  );
};
