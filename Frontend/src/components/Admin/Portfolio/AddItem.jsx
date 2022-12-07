import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppDefaultLayout from '../../../Layout/AppDefault.layout';
import axios from '../../../lib/axios';



const AddItem = () => {
    const [input, setInput] = useState({
        name: '',
        image: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleFile = (e) => {

        setInput((prevState) => ({
            ...prevState,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(input);
            const res = await axios.post('/portfolio', input, {
                headers: {
                    'Content-Type': 'multipart/form-data'

                },
                withCredentials: true
            });
            alert('Save Success!');
            navigate('/app/dashboard');
        } catch (error) {
            alert('Error');
            console.log(error.message);
        }
    };
    return (
        <AppDefaultLayout>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Form.Group className='mb-3' controlId='formItemName'>
                    <Form.Label> Name</Form.Label>
                    <Form.Control name='name' type='text' placeholder='Item Name' value={input.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formItemImage'>
                    <Form.Label> Image</Form.Label>
                    <Form.Control name='image' type='file' accept="image/png, image/jpeg" onChange={handleFile} />
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </AppDefaultLayout>
    );
};

export default AddItem;