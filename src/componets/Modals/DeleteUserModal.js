import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import NotifyDynamicModal from './NotifyDynamicModal';

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

const DeleteUserModal = ({avatar, data}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <span className="pointer" onClick={openModal} style={{ color: "red" }}>Delete</span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledMainContainer>
            <span>Delete User ?</span>
            <span style={{fontWeight:'400'}}>Are you sure you want to delete <span className='fw-bold'>“ {data?.name} “</span></span>
            <div className='d-flex align-items-center gap-3'>
                <img src={avatar} alt="Avatar" style={{width:'3rem'}} />
                <span>{data?.name}</span>
            </div>
            <div className='d-flex flex-wrap gap-5'>
                <button className='btn' style={{backgroundColor:'#D9D9D9',width:'12rem'}} onClick={closeModal} >Cancel</button>
                <NotifyDynamicModal
                    title={"Deleted Successfully"}
                    color={"#DD1616"}
                    desc={`User ${'“'+data.name+'“'} has been deleted from the list`}
                    BtnComponent={Button}
                />
            </div>
        </StyledMainContainer>
      </Modal>
    </div>
  );
}

export default DeleteUserModal;

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