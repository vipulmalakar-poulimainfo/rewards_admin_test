import React from 'react';
import Modal from 'react-modal';
import {AiFillCloseCircle} from 'react-icons/ai';

const customStyles = {
  content: {
    width:'30%',
    top: '15%',
    left: 'auto',
    right: '40%',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const NotifyDynamicModal = ({title, Logo, color, desc, button, btnColor, btnBg, BtnComponent, func}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        if(func) func();
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
        {
            BtnComponent ? <div onClick={openModal}><BtnComponent /></div> : <div className="px-3 pointer" style={{color:btnColor,backgroundColor:btnBg}} onClick={openModal}>{button}</div>
        }
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='d-flex flex-column p-4 gap-4'>
                <div className='d-flex justify-content-end position-absolute top-0 end-0' >
                    <button className='btn p-0' style={{fontSize:'2rem'}} onClick={closeModal}><AiFillCloseCircle></AiFillCloseCircle></button>
                </div>  
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex align-items-center gap-3'>
                            {
                                Logo ? 
                                <div className='rounded-circle p-2' style={{backgroundColor:color}}>
                                    <Logo style={{fontSize:'1.5rem',color:'#fff'}}/>
                                </div>
                                : <></>
                            }
                        <h4 className='fw-bold' style={{color:color}}>{title}</h4>
                    </div>
                    <h5>{desc}</h5>
                </div>
            </div>
            
        </Modal>
        </div>
    );
}

export default NotifyDynamicModal;