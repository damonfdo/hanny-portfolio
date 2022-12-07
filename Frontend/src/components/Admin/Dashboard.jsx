import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import useRedirectPublic from '../../Hooks/useRedirectPublic.js';
import AppDefaultLayout from '../../Layout/AppDefault.layout';
import axios from '../../lib/axios';

const Dashboard = ({ data }) => {
    // Redirect to login page if no user found 
    useRedirectPublic();
    // get logged in user 
    const user = localStorage.getItem('user');


    const navigate = useNavigate();

    // on Delete 
    const handleDelete = async (e) => {
        e.preventDefault();
        const id = e.target.value;
        try {
            const res = await axios.delete(`/portfolio/${id}`);
            navigate('/app/dashboard');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <AppDefaultLayout>
            <Table striped bordered hover>
                <tbody>
                    {data.map((item, index) => (


                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <div className='d-flex flex-row dashboard-item'>
                                    {item.name}

                                    <img src={`http://localhost:3000/${item.image}`} />
                                </div>
                            </td>
                            {/* <td><Button variant='secondary'><Link to={`/app/edit/${item._id}`}>Edit</Link></Button></td> */}
                            <td><Button variant='danger' onClick={handleDelete} value={item._id}>Delete</Button></td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </AppDefaultLayout>
    );
};

export default Dashboard;