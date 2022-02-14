import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { EmployeeForm } from "./components/EmployeeForm";
import { Employees } from "./components/Employees";
import { EmployeeDetails } from "./components/EmployeeDetails";
import Card from "./components/shared/Card";
import { EmployeeProvider } from "./context/EmployeeContext";

const App = () => {
  return (
    <div className="container">
      <EmployeeProvider>
        <Router>
          {/* <Card reverse = {true}> */}
          <Header />
          {/* </Card> */}
          {/* <Card> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<EmployeeForm />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
          </Routes>
          {/* </Card> */}
        </Router>
      </EmployeeProvider>
    </div>
  );
};

export default App;
