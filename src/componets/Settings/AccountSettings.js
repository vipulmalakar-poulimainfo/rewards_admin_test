import React from "react";
import styled from "styled-components";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Avatar from "../../assets/Avatar.png";

const AccountSettings = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Please enter your name.'),
        email: Yup.string()
          .email('Please enter valid email.')
          .required('Please enter your email.'),
        contact: Yup.number()
          .required('Please enter your contact number.')
          .test('len', 'Contact number must be 10 digit.', val => val.toString().length === 10),
        bio: Yup.string().required('Please enter your bio.'),
    });
    return(
        <Formik initialValues={{
            name: '',
            email: '',
            contact: '',
            bio: '',
          }}
          validationSchema={validationSchema} 
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);}
            }
        >
          {({ values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                <ProfilePic />
                <hr style={{backgroundColor:'#E0E4EC', height:'2px'}}></hr>
                <InputContainer>
                    <Input label="Name" name="name" type="text" placeholder="Enter your name" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                    <Input label="Email" name="email" type="email" placeholder="Enter your email" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                </InputContainer>
                <InputContainer>
                    <Input label="Admin Name" name="name" type="text" placeholder="Enter your name" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                    <Input label="Phone Number" name="contact" type="number" placeholder="Enter your contact number" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                </InputContainer>
                <div className="d-flex flex-column gap-2 w-100">
                    <label htmlFor="bio">Bio</label>
                    <StyledTextArea
                    name="bio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bio}
                    placeholder="Enter your bio"
                    />
                    <span style={{color:'red'}}><ErrorMessage name="bio" /></span>
                </div>
                <div className="d-flex flex-wrap">
                    <button className='btn text-white' type="submit" style={{backgroundColor:'#040980'}} disabled={isSubmitting}> Update Profile </button>
                    <button className='btn' type="button"> Reset </button>
                </div>
            </form>
          )}
        </Formik>
    );
}
export default AccountSettings;

const Input = ({ label, name, type, placeholder, values, handleChange, handleBlur }) => {
    return (
        <div className="d-flex flex-column gap-2 w-50">
            <label htmlFor={name}>{label}</label>
            <StyledInput
            type={type}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            placeholder={placeholder}
            />
            <span style={{color:'red'}}><ErrorMessage name={name} /></span>
        </div>
    );
}

const ProfilePic = () => {
    return (
        <div className="d-flex flex-column gap-2">
            <span style={{color:'#4C535F'}}>Your Profile  Picture</span>
            <StyledProfileContainer>
                <img src={Avatar} alt="Avatar" style={{width:'8rem'}} />
            </StyledProfileContainer>
        </div>
    );
}

const StyledProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #717B8C;
    border-style: dashed;
    border-radius: 10px;
    background-color: #fff;
    width: 9rem;
    height: 9rem;
`;

const StyledInput = styled.input`
    background-color: #EDF2F6;
    border: none;
    border-radius: 5px;
    padding: 10px;
`;
const StyledTextArea = styled.textarea`
    background-color: #EDF2F6;
    border: none;
    border-radius: 5px;
    padding: 10px;
`;
const InputContainer = styled.div`
    display: flex;
    gap: 3rem;
`;