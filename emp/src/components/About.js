import React from 'react'
import Card from './shared/Card'

export const About = () => {
  return (


    <Card>
      <div>
        <p className='display-5'><b><strong>About Page - This is a simple about page</strong></b></p>
        <p  className = "display-6" style = {{fontFamily:""}}>

          Add employee details i.e. first name, last name, email.
          <br />
          Manipulate the details and save it as per your requirement.
          <br />
          Add Multiple Employees.
          <br />
          Delete the employee details.
        </p>
      </div>
    </Card>
  )
}
