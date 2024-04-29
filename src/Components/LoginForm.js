import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import axios from 'axios';

const LoginForm = ({ switchForm }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(' https://api.escuelajs.co/api/v1/auth/login', formData);
            console.log(response.data); // handle success response
            const { access_token } = response.data; // Extract access token from response
            localStorage.setItem("access_token", access_token); // Store access token in local storage
        } catch (error) {
            console.error(error); // handle error response
        }
    };


    return (
        <Container maxWidth="xs">
            <Typography variant="h5">SignUp</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <Typography align='right' mt={2} mb={2}>

                    <Link href="" >
                        Forget Password?
                    </Link>
                </Typography>

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    SignUp
                </Button>
                <Typography mt={2}>
                    Don't have an account?{' '}
                    <Link href="#" onClick={() => switchForm('register')}>
                        Register
                    </Link>
                </Typography>
            </form>
        </Container>
    );
};

const RegisterForm = ({ switchForm }) => {
    const [formData, setFormData] = useState({
        
        username:'',
        email: '',
        password: '',
        mobilenumber:'',
        avatar: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(' https://api.escuelajs.co/api/v1/users/', formData);
            console.log(response.data);
            // localStorage.setItem("access_token", response.data.access_token); // handle success response
        } catch (error) {
            console.error(error); // handle error response
        }
    };



    return (
        <Container maxWidth="xs">
            <Typography variant="h5">Register</Typography>
            <form onSubmit={handleSubmit}>
                
                 <TextField
                    label="UserName"
                    name="name"
                    type="text"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                 <TextField
                    label="Mobile Number"
                    // name="number"
                    type="number"
                    value={formData.number}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField

                    type="url"
                    fullWidth
                    margin="normal"
                    label="Avatar URL"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                />
                <Button sx={{ marginTop: 2 }} type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
                <Typography mt={2}>
                    Already have an account?{' '}
                    <Link href="#" onClick={() => switchForm('login')}>
                        Login
                    </Link>
                </Typography>
            </form>
        </Container>
    );
};

const AuthPage = () => {
    const [formType, setFormType] = useState('login');

    const switchForm = (type) => {
        setFormType(type);
    };

    return (
        <Container maxWidth="sm">
            {formType === 'login' ? <LoginForm switchForm={switchForm} /> : <RegisterForm switchForm={switchForm} />}
        </Container>
    );
};

export default AuthPage;
