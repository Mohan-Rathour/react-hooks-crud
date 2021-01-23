import React, {useState, useEffect} from 'react';
import { Table, Nav } from 'react-bootstrap';
import EmployeeServer from '../services/EmployeeService';

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = () => {
        EmployeeServer.getAll()
            .then(response => {
                setEmployees(response.data.employees);
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {employees && employees.map((employee, index) => (
                    <tr>
                        <td key={index}>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.mobile}</td>
                        <td>
                            <Nav.Link href="/add">Add</Nav.Link>
                            <Nav.Link href='/edit/${index}'>Edit</Nav.Link>
                        </td>
                    </tr>
                ))}
                    {/* {employees && employees.map((employee, id) =>{
                            <tr>
                                <td hidden> {employee.id}</td>
                                <td> {employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.Mobile}</td>
                            </tr> 
                        }
                    )} */}
            </tbody>
        </Table>
    )
};
export default EmployeesList;