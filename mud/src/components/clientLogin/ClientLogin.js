import React, { useEffect, useState } from 'react';
import '../clientRegistration/registration.scss';
// import { useDispatch } from 'react-redux';
// import { loginCoach } from '../../../actions/authActions';
// import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../utils/assets/coachmelogo-white.svg';

//Component Imports
// import Modal from './Modal';

// //Styling
// import './loginCoach.scss';

const ClientLogin = props => {

    const [creds, setCreds] = useState({ username: '', email: '', password: '' });
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
        // localStorage.clear();
        // // dispatch(loginCoach(creds)).then(() => {
        // //     props.history.push('/dashboard');
        // });
    };
    return (
        <>
            {/* {modal ? <Modal setModal={setModal} /> : null} */}

            <div className='Form-Container'>
                <h1>Login</h1>

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
                        </div>
                        <div className='input-layout'>
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
                                name='password'
                                className='password'
                                onChange={handleChange}
                                value={creds.password}
                            />

                        </div>
                        {/* <div className='layout-wrapper'> */}
                        <button type='submit'>
                            {' '}
                            Login
                            </button>
                        <div className='register-container'>
                            Don't have an account?{' '}
                            {/* <Link className='register' to='/register'>
                                    Sign up
                                </Link> */}
                            {/* </div> */}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ClientLogin;