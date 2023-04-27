import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginHero from "../assets/LoginHero.svg";

const Login = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter valid email.')
            .required('Please enter your email.'),
        password: Yup.string()
            .min(8, 'Password must be more than 8 character.')
            .required('Please enter your password.'),
    });
    return(
        <StyledMainContainer>
            <StyledLeftContainer>
                <h3 className="fw-bold" style={{color:'#040980'}}>Rewards App</h3>
                <div className="d-flex flex-column gap-2">
                    <span className="display-6 fw-bold">Welcome back!</span>
                    <span style={{fontSize:'1.5rem', fontWeight:'500'}}>Check your Stats Today!</span>
                </div>
                <div className="d-flex flex-column gap-3">
                    <h2 className="fw-bold">Login</h2>
                    <Formik 
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={validationSchema} 
                        onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                setSubmitting(false);
                                }, 5000);}
                            }
                        >
                        {({ values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='d-flex flex-column gap-4'>
                                    <div className='d-flex flex-column gap-2'>
                                        <label htmlFor="email">Email ID/ Mobile Number</label>
                                        <input
                                        className="p-1"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        />
                                        <span style={{color:'red'}}><ErrorMessage name="email" /></span>
                                    </div>
                                    <div className='d-flex flex-column gap-2'>
                                        <label htmlFor="password">Password</label>
                                        <input
                                        className="p-1"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        />
                                        <span style={{color:'red'}}><ErrorMessage name="password" /></span>
                                        <div className='d-flex justify-content-end'>
                                            <button className='btn' style={{color:'#040980'}}>Forgot Password?</button>
                                        </div>
                                    </div>
                                    <button className='btn text-white' style={{backgroundColor:'#040980'}} type="submit" disabled={isSubmitting}> Login </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </StyledLeftContainer>
            <img src={LoginHero} alt={'HeroImg'} style={{width:'50vw',height:'100vh'}} />
        </StyledMainContainer>
    )
}

export default Login;

const StyledMainContainer = styled.div`
    display: flex;
    justify-content: between;
`;
const StyledLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;
    width: 50%;
    gap: 3rem;
`;