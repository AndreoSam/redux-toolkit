import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const View = () => {
    const users = useSelector((state) => state.user)
    console.log("json data: ", users);
    return (
        <Container>
            <h2>CRUD App With JSON Server</h2>
            <Link className='btn btn-success my-3' to="/add">Create</Link>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.address}</td>
                            <td>{user.pincode}</td>
                            <td>
                                <Link className='btn btn-sm btn-primary' to="/edit">Edit</Link>
                                <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    );
}

export default View