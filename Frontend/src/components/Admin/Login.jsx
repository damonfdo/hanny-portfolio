import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from '../../lib/axios.js';

const LOGIN_URL = '/user/login';

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(LOGIN_URL, input);

            const token = res.data;
            console.log(token);
            navigate('/app/dashboard');
        } catch (error) {

        }

    };

    const handleChange = (event) => {

        setInput((prevState) => ({
            ...prevState,
            [event.target.name]: [event.target.value]
        }));
    };

    const resetForm = () => {
        setInput({ username: '', password: '' });
    };
    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name='username'
                            value={input.username}
                            onChange={handleChange}
                            placeholder="Enter Username"
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name='password'
                            value={input.password}
                            onChange={handleChange}
                            placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;