import React, {useRef} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import NotifyDynamicModal from './NotifyDynamicModal';
import { BsCheckLg } from 'react-icons/bs';

const customStyles = {
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    backgroundColor: '#F6F6F6',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const AddAdminModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const hiddenFileInput = useRef(null);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Please enter name"),
    email: Yup.string()
        .email("Please enter valid email")
        .required("Please enter email"),
    age: Yup.number()
        .required("Please enter age"),
    contact: Yup.number()
        .required("Please enter contact number")
        .test('len', 'Contact number must be 10 digit.', val => val.toString().length === 10),
    role: Yup.string()
        .required("Please enter role"),
    access: Yup.string()
        .required("Please enter access"),
    description: Yup.string()
        .required("Please enter Role description"),      
  });

  return (
    <div>
        <StyledAddAdminButton className="pointer" onClick={openModal} >
            <span className="mb-4">+</span>
        </StyledAddAdminButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledMainContainer>
            <h4>Add Admin</h4>
            <Formik initialValues={{
                name: '',
                email: '',
                age: '',
                contact: '',
                role: '',
                access: '',
                description: '',
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
                    <StyledTopContainer>
                        <div className='d-flex flex-column align-items-center gap-1'>
                            <DummyImage />
                            <span className="pointer" style={{color:'#040980'}} onClick={() => hiddenFileInput.current.click()} >Add Photo</span>
                            <input type="file" ref={hiddenFileInput} style={{display:'none'}} />
                        </div>
                        <InputContainer>
                            <Input label="Name" name="name" type="text" placeholder="Enter Name" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                            <Input label="Age" name="age" type="number" placeholder="Enter Age" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                        </InputContainer>
                    </StyledTopContainer>
                    <InputContainer>
                        <Input label="Phone Number" name="contact" type="number" placeholder="Enter Phone Number" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                        <Input label="Email" name="email" type="email" placeholder="Enter Email" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                    </InputContainer>
                    <InputContainer>
                        <div className="d-flex flex-column gap-2 w-50">
                            <label htmlFor="type">Role</label>
                            <StyledSelect
                                name="role"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.role}
                            >
                                <option value="admin">Admin</option>
                                <option value="superAdmin">Super Admin</option>
                            </StyledSelect>
                            <span style={{color:'red'}}><ErrorMessage name="role" /></span>
                        </div>
                        <div className="d-flex flex-column gap-2 w-50">
                            <label htmlFor="type">Access</label>
                            <StyledSelect
                                name="access"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.access}
                            >
                                <option value="full">Full access</option>
                                <option value="partial">Partial access</option>
                                <option value="limited">Limited access</option>
                            </StyledSelect>
                            <span style={{color:'red'}}><ErrorMessage name="access" /></span>
                        </div>
                    </InputContainer>
                    <div className="d-flex flex-column gap-2">
                        <label htmlFor="type">Role Description</label>
                        <StyledTextArea
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder="Enter Role Description"
                        />
                        <span style={{color:'red'}}><ErrorMessage name="description" /></span>
                    </div>
                    <div className="d-flex gap-3 justify-content-between flex-wrap">
                        <NotifyDynamicModal
                            title={"Successfully Added"}
                            color={"#35CC5F"}
                            desc={`Admin “ ${values.name} “  has been added to your account.`}
                            BtnComponent={Button}
                            Logo={BsCheckLg}
                        />
                        <button className="btn btn-secondary px-4" onClick={closeModal} style={{width:'20rem'}} >Cancel</button>
                    </div>
                </form>
              )}
            </Formik>
        </StyledMainContainer>
      </Modal>
    </div>
  );
}

export default AddAdminModal;

const Button = ({isSubmitting}) => {
    return (
        <button className='btn text-white' type="submit" style={{backgroundColor:'#040980', width:'20rem'}} disabled={isSubmitting}> Add Admin </button>
    );
}

const Input = ({ label, name, type, placeholder, values, handleChange, handleBlur, icon }) => {
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
const DummyImage = () => {
    return (
        <StyledDummyImage>
            <div className='d-flex align-items-center justify-content-center rounded-circle pb-2' style={{width:'4rem', height:'4rem', border:'2px solid', borderStyle:'dashed'}}>+</div>
        </StyledDummyImage>
    );
}

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
`;
const StyledTopContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;
const StyledInput = styled.input`
    background-color: #E9E9E9;
    border: none;
    border-radius: 5px;
    padding: 10px;
`;
const StyledSelect = styled.select`
    background-color: #E9E9E9;
    border: none;
    border-radius: 5px;
    padding: 10px;
`;
const StyledTextArea = styled.textarea`
    background-color: #E9E9E9;
    border: none;
    border-radius: 5px;
    padding: 10px;
`;
const InputContainer = styled.div`
    display: flex;
    gap: 3rem;
`;
const StyledAddAdminButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #717B8C;
    border-style: dashed;
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    font-size: 5rem;
    font-weight: 100;
`;
const StyledDummyImage = styled.div`
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 100;
`;