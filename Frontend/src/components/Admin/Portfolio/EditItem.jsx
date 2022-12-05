import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppDefaultLayout from '../../../Layout/AppDefault.layout';
import axios from '../../../lib/axios';
import { Button, Form } from 'react-bootstrap';

const EditItem = () => {
    // Intialization 

    const [input, setInput] = useState({
        name: '',
        image: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch Data 
    const getData = async (id) => {
        try {
            const res = await axios.get(`/portfolio/${id}`);

            setInput(res.data);
        } catch (error) {
            alert('Error');
        }
    };
    useEffect(() => { getData(id); }, []);

    // Event Function 
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
    // Submit Function 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(input);
            const res = await axios.put(`/portfolio/${id}`, input, {
                headers: {
                    'Content-Type': 'multipart/form-data'

                },
                withCredentials: true
            });
            alert('Update Success!');
            navigate('/app/dashboard');
        } catch (error) {
            alert('Error');
            console.log(error.message);
        }
    };
    console.log(input);
    return (
        <AppDefaultLayout>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Form.Group className='mb-3' controlId='formItemName'>
                    <Form.Label> Name</Form.Label>
                    <Form.Control name='name' type='text' placeholder='Item Name' value={input.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formItemImage'>
                    <Form.Label> Image</Form.Label>
                    <Form.Control name='image' type='file' accept="image/png" onChange={handleFile} />
                </Form.Group>
                <div>
                    Preview of previous image
                    <img src={`http://localhost:3000/${input.image}`} />
                </div>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </AppDefaultLayout>
    );
};

export default EditItem;