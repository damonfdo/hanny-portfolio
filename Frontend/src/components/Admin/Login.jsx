import React, { useState } from 'react';
import { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import AuthContext from '../../Context/AuthProvider.jsx';
import axios from '../../lib/axios.js';

const LOGIN_URL = '/user/login';

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [input, setInput] = useState({
        username: '',
        password: ''
    });


    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError(false);
            const res = await axios.post(LOGIN_URL, input);

            const token = res.data;
            // setAuth({ token });
            // console.log(setAuth);
            console.log(token);
            localStorage.setItem('user', token);

            navigate('/app/dashboard');
        } catch (error) {
            setError(error.message);
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
    // console.log(error);
    return (
        <div>
            <Container className='w-50 mt-5 login'>
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
                <div>
                    {error && (
                        <p>You are not authorized</p>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Login;