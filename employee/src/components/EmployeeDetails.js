import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeContext from "../contexts/EmployeeContext";
export const EmployeeDetails = () => {
  const { employees } = useContext(EmployeeContext);
  const para = useParams();
  const param = parseInt(para.id);
  const emp = employees.find((emp) => emp.id === param);
  const navigate = useNavigate();
  const EmployeeStyling = {
    border: "1px solid black",
    margin: "5%",
    borderRadius: "10px",
    backgroundColor: "rgba(178, 178, 128, .5)",
  };
  return (
    <>
      {console.log(emp)}
      <div>EmployeeDetails</div>
      {/* <div>{emp.name}</div> */}

      <div className="list-group">
        <div className="list-group-item" style={EmployeeStyling}>
          <h1 style={{ textAlign: "left", padding: "5px" }}>{emp.name}</h1>

          <div className="row">
            <div className="col-md-6"></div>
            <div
              className=" col-md-6"
              style={{ paddingLeft: "10%", textAlign: "left" }}
            >
              <ul style={{ padding: "5%", textAlign: "left" ,display:"block"}}>
                <li style={{ padding: "5%" }}>
                  {" "}
                  <strong>Employee name : {emp.name}</strong>
                </li>
                <li style={{ padding: "5%" }}>
                  <strong>Employee Salary : {emp.salary}</strong>
                </li>
                <li style={{ padding: "5%" }}>
                  <strong>Employee Salary : {emp.position}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/employee");
        }}
      >
        go Back
      </button>
    </>
  );
};

//   const EmployeeStyling = {
//     border: "1px solid black",
//     margin: "5%",
//     borderRadius:"10px",
//     backgroundColor : "rgba(178, 178, 128, .5)",
//   }
//   return (
//     <>
//       <h1>Car Details</h1>
//       <div className="list-group">
//         <div className="list-group-item" style={EmployeeStyling}>
//           <h1 style = {{textAlign : "left",padding:"5px"}}>{emp.name}</h1>

//           <div className="row">
//             <div className="col-md-6">
//                 {/* <img  */}
//             </div>
//             <div className=" col-md-6" style = {{paddingLeft : "10%",textAlign : "left"}}>
//               <ul style = {{padding : "5%",textAlign : "left"}}>
//                 <li style = {{padding : "5%"}} > <strong>Employee name :  {emp.name}</strong></li>
//                 <li style = {{padding : "5%"}}><strong>Employee Salary : {emp.salary}</strong></li>
//                 <li style = {{padding : "5%"}}><strong>Employee Salary : {emp.position}</strong></li>
//                 </ul>
//             </div>
//           </div>
//         </div>

//
//       </div>
//     </>
//   );
// }
