import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiRupee } from 'react-icons/bi';
import Coin from '../../assets/icons/Group.png'
import Stats from '../../assets/icons/stats 1.png'
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
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const SetThresholdModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const validationSchema = Yup.object().shape({
        minPayout: Yup.number()
            .required("Please enter valid minimum payout")
            .min(0, "Minimum payout should be greater than 0"),
        maxPayout: Yup.number()
            .required("Please enter valid maximum payout")
            .min(0, "Maximum payout should be greater than 0"),
        points: Yup.number()
            .required("Please enter valid reward points")
            .min(0, "Reward Points per ads should be greater than 0"),
        limit: Yup.number()
            .required("Please enter valid threshold limit")
            .min(0, "Threshold Limit should be greater than 0"),
        amount: Yup.number()
            .required("Please enter valid amount")
            .min(0, "Amount should be greater than 0"),
    });

  return (
    <div>
        <button className="btn text-white px-5" style={{backgroundColor:'#040980'}} onClick={openModal} >Set Threshold Limit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledMainContainer>
            <h4>Set Threshold Limit</h4>
            <Formik initialValues={{
                minPayout: '',
                maxPayout: '',
                points: '',
                limit: '',
                amount: '',
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
                        <Input label="Min. Balance for Payout" name="minPayout" type="number" placeholder="Minimum Payout" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                        <Input label="Max. Payout perday" name="maxPayout" type="number" placeholder="Maximum Payout" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                    </InputContainer>
                    <InputContainer>
                        <Input label="Reward points per ads" name="points" type="number" placeholder="Reward Points per ads" values={values} handleChange={handleChange} handleBlur={handleBlur} icon={Coin} />
                        <Input label="Threshold Limit" name="limit" type="number" placeholder="Threshold Limit" values={values} handleChange={handleChange} handleBlur={handleBlur} icon={Stats} />
                    </InputContainer>
                    <InputContainer>
                        <Input label="Reward points to INR" name="amount" type="number" placeholder="Amount" values={values} handleChange={handleChange} handleBlur={handleBlur} />
                    </InputContainer>
                    <div className="d-flex gap-3 justify-content-end flex-wrap">
                      <NotifyDynamicModal
                          title={"Changes saved Successfully"}
                          color={"#35CC5F"}
                          desc={`Threshold limit changed `}
                          BtnComponent={Button}
                          Logo={BsCheckLg}
                      />
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

export default SetThresholdModal;

const Button = ({isSubmitting}) => {
    return (
        <button className='btn text-white' type="submit" style={{backgroundColor:'#040980'}} disabled={isSubmitting}> Save Chages </button>
    );
}

const Input = ({ label, name, type, placeholder, values, handleChange, handleBlur, icon }) => {
    return (
        <div className="d-flex flex-column gap-2 w-50">
            <label htmlFor={name}>{label}</label>
            <div className='d-flex align-items-center'>
                {
                    icon?<img src={icon} alt="icon" className='ms-2' style={{position:'absolute', width:'1rem'}} />
                    :<BiRupee className='ms-2' style={{position:'absolute'}} />
                }
                <StyledInput
                type={type}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                placeholder={placeholder}
                />
            </div>
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
    padding: 10px 10px 10px 30px;
`;
const InputContainer = styled.div`
    display: flex;
    gap: 3rem;
`;