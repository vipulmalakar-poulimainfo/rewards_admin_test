import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { BsCheckCircleFill } from 'react-icons/bs';

const customStyles = {
  content: {
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

const PaymentSuccessModal = ({avatar, name , amount}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='btn' style={{backgroundColor:'#040980',color:'#fff', width:'15rem'}} onClick={openModal} >Pay Now</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledMainContainer>
            <div className='d-flex align-items-center gap-3'>
                <BsCheckCircleFill style={{color:'#35CC5F',fontSize:'2rem'}} />
                <span style={{fontSize:'20px'}}>Payment Successful</span>
            </div>
            <span style={{fontWeight:'400'}}>Payment {amount} has been successfully paid to the user</span>
            <div className='d-flex align-items-center gap-2'>
                <img src={avatar} alt="Avatar" style={{width:'3rem'}} />
                <span className='fw-bold'>{name}</span>
            </div>
        </StyledMainContainer>
      </Modal>
    </div>
  );
}

export default PaymentSuccessModal;

const Button = () => {
    return (
        <button className='btn btn-danger' style={{width:'12rem'}} >Delete User</button>
    )
}

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
`;