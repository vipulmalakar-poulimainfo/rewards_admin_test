import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import HDFC from "../../assets/icons/HDFC.png";
import PaymentSuccessModal from './PaymentSuccessModal';
import Avatar from '../../assets/Avatar.png';

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

const PaymentModal = ({avatar, data}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [active, setActive] = useState('HDFC BANK');
  return (
    <div>
        <button className=' btn px-3' style={{color:'#fff',backgroundColor:'#040980'}} onClick={openModal} >Confirm to Pay</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledMainContainer>
            <div>
                <h4>Payout Process</h4>
                <hr />
                <div className='d-flex flex-wrap justify-content-between gap-5'>
                    <div className='d-flex flex-column gap-3'>
                        <h4>Payout Requested from</h4>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold'>Renold Swift</span>
                            <div className='d-flex flex-column' style={{color:'rgba(30, 30, 30, 0.75)'}}>
                                <span>renoldswift@gmail.com</span>
                                <span>17,Lorem Ipsum Street,Lorem Ipsum, Singapore</span>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold'>Requested on</span>
                            <div className='d-flex flex-column' style={{color:'rgba(30, 30, 30, 0.75)'}}>
                                <span>04-04-2023 at 6:40 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <h4>Payment To</h4>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold'>Renold Swift</span>
                            <div className='d-flex flex-column' style={{color:'rgba(30, 30, 30, 0.75)'}}>
                                <span>renoldswift@gmail.com</span>
                                <span>A/c No: 1434235784</span>
                                <span>IDBB Bank</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5>Choose payment Option</h5>
                <div className='d-flex flex-column gap-3'>
                    <div><span className='p-1' style={{borderBottom:'5px solid #040980'}}>Select Bank</span></div>
                    <div className='d-flex flex-wrap gap-4'>
                        <BankCard name={'HDFC BANK'} accountNo={'12345588845'} type={'Savings'} icon={HDFC} active={active} setActive={setActive} />
                        <BankCard name={'Yes Bank'} accountNo={'78621338546'} type={'Current'} icon={''} active={active} setActive={setActive} />
                    </div>
                </div>
                <div className='d-flex flex-column gap-2 align-items-center mt-4'>
                    <PaymentSuccessModal name={'Henry'} avatar={Avatar} amount={1400} />
                    <button className='btn' style={{backgroundColor:'#D9D9D9', width:'15rem'}} onClick={closeModal} >Cancel</button>
                </div>
            </div>
        </StyledMainContainer>
      </Modal>
    </div>
  );
}

export default PaymentModal;

const BankCard = ({name, accountNo, type, icon ,active, setActive}) => {
    return(
        <StyledBankCard active={active===name} onClick={()=>setActive(name)} >
            <div className='d-flex justify-content-between gap-4'>
                <div className='d-flex flex-column'>
                    <span>{name}</span>
                    <span>{accountNo}</span>
                </div>
                {
                    icon && <img src={icon} alt='HDFC' style={{width:'2rem'}} />
                }
            </div>
            <span>{type}</span>
        </StyledBankCard>
    )
}

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
`;
const StyledBankCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    gap: 1.5rem;
    width: 12rem;
    font-size: 13px;
    background-color: ${props => props.active ? '#040980' : '#E4E4E4'};
    color: ${props => props.active ? '#fff' : 'rgba(30, 30, 30, 0.64)'};
    cursor: pointer;
`;