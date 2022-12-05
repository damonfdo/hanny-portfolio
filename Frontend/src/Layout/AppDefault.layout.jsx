import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AddItem from '../components/Admin/Portfolio/AddItem';
import Dashboard from '../components/Admin/Dashboard';

const AppDefaultLayout = ({ children }) => {
    return (
        <Container fluid="md">
            <Row>
                <Col>Portfolio Manager - Hanny Shaker </Col>
            </Row>
            <Row>
                <Col xs={12} sm={4}>
                    My Portfolio

                    <Col >
                        <Link to={'/app/dashboard'} >Show All</Link>
                        <Link to={'/app/add'} >Add</Link>
                    </Col>
                </Col>
                <Col>
                    {children}
                </Col>
            </Row>

        </Container>
    );
};

export default AppDefaultLayout;