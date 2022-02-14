import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Employee } from "./components/Employee";
import { Header } from "./components/Header";
import {EmployeeProvider} from './contexts/EmployeeContext';
import { EmployeeDetails } from "./components/EmployeeDetails";
function App() {
  return (
    <div className="container">
      <EmployeeProvider>
      <Router >
        <Header/>
        <Routes >
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/employee/:id" element={<EmployeeDetails />}></Route>
        </Routes>
      </Router>
      </EmployeeProvider>
    </div>
  );
}

export default App;
