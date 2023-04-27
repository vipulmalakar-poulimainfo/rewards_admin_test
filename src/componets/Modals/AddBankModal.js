import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlinePlus } from "react-icons/ai";

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
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const AddBankModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const validationSchema = Yup.object().shape({
        accountNumber: Yup.number()
            .required("Please enter account number"),
        accountHolderName: Yup.string()
            .required("Please enter account holder name"),
        bankName: Yup.string()
            .required("Please enter bank name"),
        ifscCode: Yup.string()
            .required("Please enter IFSC code"),
        branchName: Yup.string()
            .required("Please enter branch name"),
        type: Yup.string()
            .required("Please enter account type"),
    });

  return (
    <div>
        <button className="btn text-white d-flex gap-3 align-items-center px-4" style={{backgroundColor:'#040980'}} onClick={openModal} ><div className="rounded-circle d-flex align-items-center p-1" style={{backgroundColor:'#D9D9D9'}}><AiOutlinePlus style={{color:'#000'}} /></div> Add Bank Details</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledMainContainer>
            <h4>Add - Enter Bank Details</h4>
            <Formik initialValues={{
                accountNumber: '',
                accountHolderName: '',
                bankName: '',
                ifscCode: '',
                branchName: '',
                type: 'savings',
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
                    <InputContainer>
                        <Input label="Bank Account Number" name="accountNumber" type="number" placeholder="Enter Account Number" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                        <Input label="Account Holder Name" name="accountHolderName" type="text" placeholder="Enter Account Holder Name" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                    </InputContainer>
                    <InputContainer>
                        <Input label="Bank Name" name="bankName" type="text" placeholder="Enter Bank Name" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                        <Input label="IFSC Code" name="ifscCode" type="text" placeholder="Enter IFSC Code" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                    </InputContainer>
                    <InputContainer>
                        <Input label="Bank Branch Name" name="branchName" type="text" placeholder="Enter Branch Name" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                        <div className="d-flex flex-column gap-2 w-50">
                            <label htmlFor="type">Account type</label>
                            <StyledSelect
                              name="type"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.type}
                            >
                              <option value="savings">Savings</option>
                              <option value="current">Current</option>
                            </StyledSelect>
                            <span style={{color:'red'}}><ErrorMessage name="type" /></span>
                        </div>
                    </InputContainer>
                    <div className="d-flex gap-3 justify-content-end flex-wrap">
                        <button className='btn text-white' type="submit" style={{backgroundColor:'#040980'}} disabled={isSubmitting}> Add Bank Details </button>
                        <button className="btn btn-secondary px-4" onClick={closeModal} >Cancel</button>
                    </div>
                </form>
              )}
            </Formik>
        </StyledMainContainer>
      </Modal>
    </div>
  );
}

export default AddBankModal;

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
const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
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
const InputContainer = styled.div`
    display: flex;
    gap: 3rem;
`;