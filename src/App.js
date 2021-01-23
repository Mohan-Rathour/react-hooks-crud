
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import EmployeesList from './component/EmployeesList';
import AddEmployee from './component/AddEmployee';
import EditEmployee from './component/EditEmployee';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/employees">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/employees">Employees</Nav.Link>
            <Nav.Link href="/employee/add">Add</Nav.Link>
            <Nav.Link href="/employee/edit/:id">Edit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div>
        <Switch>
          <Route exact path={["/", "/employees"]} component={EmployeesList}></Route>
          <Route exact path="/employee/add" component={AddEmployee}></Route>
          <Route exact path="/employee/edit/:employeeId" component={EditEmployee}></Route>
        </Switch>

      </div>

    </div>
  );
}

export default App;
