import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AppDefaultLayout from '../../Layout/AppDefault.layout';
import axios from '../../lib/axios';

const Dashboard = ({ data }) => {
    // onEdit  
    // on Delete +
    const navigate = useNavigate();


    return (
        <AppDefaultLayout>
            <Table striped bordered hover>
                <tbody>
                    {data.map((item, index) => (


                        <tr>
                            <td>{index + 1}</td>
                            <td>
                                <div>
                                    {item.name}

                                    <img src={`http://localhost:3000/${item.image}`} />
                                </div>
                            </td>
                            <td><Button variant='secondary'><Link to={`/app/edit/${item._id}`}>Edit</Link></Button></td>
                            <td><Button variant='danger' >Delete</Button></td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </AppDefaultLayout>
    );
};

export default Dashboard;