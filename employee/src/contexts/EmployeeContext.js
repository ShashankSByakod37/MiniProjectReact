import { createContext, useState } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John",
      position: "Manager",
      salary: 10000,
    },
    {
      id: 2,
      name: "David",
      position: "Sales Manager",
      salary: 20000,
    },
    {
      id: 3,
      name: "Smith",
      position: "Assistant",
      salary: 3000,
    },
  ]);

  return(
    <EmployeeContext.Provider value={{employees, setEmployees}}>{children}</EmployeeContext.Provider>
  )
};


export default EmployeeContext;