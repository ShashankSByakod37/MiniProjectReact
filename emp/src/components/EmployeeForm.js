import { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import EmployeeContext from "../context/EmployeeContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = () => {
  const { addEmployee, updateEmployee, updateEmployeeDetails } =
    useContext(EmployeeContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    console.log("Employee data changing ");
    if (updateEmployee.flag == true) {
      setFirstName(updateEmployee.data.firstName);
      setLastName(updateEmployee.data.lastName);
      setEmail(updateEmployee.data.email);
      // Navigate("/form");
    }
  }, [updateEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();


    
    try {
      if (
        firstName.trim().length + lastName.trim().length > 4 &&
        email.trim().length > 4
      ) {
        const emp = {
          // id: uuidv4(),
          firstName,
          lastName,
          email,
        };
        if (updateEmployee.flag == true) {
          emp.id = updateEmployee.data.id;
          updateEmployeeDetails(updateEmployee.data.id, emp);
          updateEmployee.flag = false;
          Navigate("/employees");
        } else {
          addEmployee(emp);
          Navigate("/employees");
        }
      }
      else if(firstName == "" || lastName == "" || email == "" ){
        alert("Please fill up all the fields");
      }
       else {
        alert("Please fill the form correctly");
      }
    } catch (e) {
      console.log(e);
    } 
      setFirstName("");
      setLastName("");
      setEmail("");
    //   Navigate("/employees");
    
  };

  return (
    <>
      <Card reverse={true}>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">
              Email
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
            </div>
            <div className="col-2">
            <button className="btn btn-secondary"  onClick = {() => {
                setFirstName("");
                setLastName("");
                setEmail("");
            }}type="reset">
              Reset form
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};
