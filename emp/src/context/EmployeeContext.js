import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
// import { axios} from "axios"
export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [updateEmployee, setUpdateEmployee] = useState({
    data: {},
    flag: false,
  });


  useEffect(() => {
    setEmployees(employees.filter( (ele, ind) => ind === employees.findIndex( elem => elem.id === ele.id )));

    console.log(employees);
  },[]);
  const [employees, setEmployees] = useState([
    // {
    //   id: "1",
    //   firstName: "John",
    //   lastName: "Doe",
    //   email: "johndoe@email.com",
    // },
    // {
    //   id: "2",
    //   firstName: "David",
    //   lastName: "Smith",
    //   email: "dvd@email.com",
    // },
    // {
    //   id: "3",
    //   firstName: "Shane",
    //   lastName: "John",
    //   email: "shanJohn@email.com",
    // },
  ]);

  useEffect(() => {
    getEmployees();
  }, []);
  const getEmployees = async () => {
    const res = await fetch("http://localhost:8080/home/employees", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setEmployees([...employees, ...data]);
  };

  const addEmployee = async (employee) => {
      employee.id = uuidv4();
    const res = await fetch("http://localhost:8080/home/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    const data = await res.json();

    setEmployees([...employees, employee]);
    console.log(data);
  };

  const deleteEmployee = async (employee) => {
    console.log(employee);
    try {
      const response = await fetch(
        `http://localhost:8080/home/employees/${employee.id}`,
        {
          method: "DELETE",
          header: {
            "Content-Type": "application/json",
          },
          body: null,
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setEmployees(employees.filter((emp) => emp.id !== employee.id));
    }
  };

  const updateChange = async (employee) => {
    setUpdateEmployee({
      data: employee,
      flag: true,
    });

    // console.log(updateEmployee);
  };

  const updateEmployeeDetails =  async(empId, UpdateEmp) => {

    const response = await fetch(`http://localhost:8080/home/employees/${empId}`, {
        method: "PUT",
        headers:
        {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(UpdateEmp)});
    
    const data = await response.json();




    setEmployees(employees.map((emp) => ((emp.id === empId) ? {
        ...emp, 
        ...UpdateEmp,
    } : emp)));
    console.log("hey here")
    console.log(employees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        addEmployee,
        employees,
        deleteEmployee,
        updateChange,
        updateEmployee,
        updateEmployeeDetails
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
