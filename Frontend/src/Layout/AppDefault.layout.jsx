import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AddItem from '../components/Admin/Portfolio/AddItem';
import Dashboard from '../components/Admin/Dashboard';

const AppDefaultLayout = ({ children }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/app');
    };
    return (
        <Container fluid="md" className='p-4'>
            <Row>
                <Col className='title'>
                    <Link to={'/'}>
                        Portfolio Manager - Hanny Shaker
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={4}>
                    My Portfolio

                    <Col className='d-flex flex-column mt-2 mb-2'>
                        <Link to={'/app/dashboard'} className='pt-2 pb-2'>Show All</Link>
                        <Link to={'/app/add'} className='pt-2 pb-2'>Add New Item</Link>
                    </Col>
                    <Button variant='secondary' onClick={handleLogout}>
                        Log out
                    </Button>
                </Col>
                <Col>
                    {children}
                </Col>

            </Row>


        </Container>
    );
};

export default AppDefaultLayout;