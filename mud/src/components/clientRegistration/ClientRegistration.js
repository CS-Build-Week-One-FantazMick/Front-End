import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginCoach } from '../../../actions/authActions';
// import { Link } from 'react-router-dom';
//Component Imports
// import Modal from './Modal';

// //Styling
// import './loginCoach.scss';


const ClientRegistration = props => {

    const [creds, setCreds] = useState({ username: '', email: '', password1: '', password2: '' });
    // const [modal, setModal] = useState(false);

    // const triggerModal = () => {
    //     setModal(true);
    // };

    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //     setCreds({
    //         username : username,
    //         email: email,
    //         password: password
    //     });
    // }, [email, password, username]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(creds)

    };
    return (
        <>

            <div className='Login-Wrapper'>

                <div className='Form-Container'>
                    <h1>Register</h1>

                    <form
                        className='Login-Form-Wrapper'
                        onSubmit={e => {
                            handleSubmit(e);
                        }}
                    >
                        <div className='input-Wrapper'>
                            <div className='input-layout'>
                                <label>Username</label>
                                <input
                                    data-cy='input1'
                                    type='text'
                                    placeholder='Username'
                                    name='username'
                                    className='username'
                                    onChange={handleChange}
                                    value={creds.username}
                                />
                                <label>Email</label>
                                <input
                                    data-cy='input1'
                                    type='text'
                                    placeholder='Email'
                                    name='email'
                                    className='email'
                                    onChange={handleChange}
                                    value={creds.email}
                                />
                            </div>
                            <div className='input-layout'>
                                <label>Password</label>
                                <input
                                    data-cy='input2'
                                    type='password'
                                    placeholder='Password'
                                    name='password1'
                                    className='password'
                                    onChange={handleChange}
                                    value={creds.password1}
                                />

                            </div>


                        </div>
                        <div className='input-layout'>
                            <label> Confirm Password</label>
                            <input
                                data-cy='input2'
                                type='password'
                                placeholder=' Confirm Password'
                                name='password2'
                                className='password'
                                onChange={handleChange}
                                value={creds.password2}
                            />
                        </div>
                        <div className='layout-wrapper'>
                            <button type='submit' className='signup-btn'>
                                {' '}
                                Register
                            </button>
                            <div className='register-container'>
                                Have an account?{' '}
                                {/* <Link className='register' to='/register'>
                                    Login
                                </Link> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ClientRegistration;