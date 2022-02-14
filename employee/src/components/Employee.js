import {useContext} from 'react'
import EmployeeContext from '../contexts/EmployeeContext'
import { Link } from 'react-router-dom';

export const Employee = () => {

    const {employees} = useContext(EmployeeContext);
    const carStyle = {
        width : "60%",
        margin: "5% 20% 5% 20%",
        boxSizing : "border-box"
    }

    const emp = employees.map((e,index) => {
        return (
            <div key = {index} style = {carStyle}> 


            <li key = {index}><Link style={{display:"block"}} to = {"/employee/"+e.id}
               className = "list-group-item"
                key = {index}>
                     {e.name}

            </Link></li>
            </div>
        )
    })
  return (
    <>
    <h1>Employee Details</h1>
    <div className = "list-group">
    <ul>
        {emp}

    </ul>
    </div>
    </> 
  )
}
