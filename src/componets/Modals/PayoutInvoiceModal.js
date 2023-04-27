import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Table from 'react-bootstrap/Table';

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
const Transactions = [
    {
        id: 1,
        name: 'James',
        transactionId: '5466565656',
        date: '07.09.2022',
        points: '1,250',
        amount: '2,300',
        status: 'Paid'
    }
]
const columns = [
    {
        Header: 'S. no.',
        accessor: 'id',
    },
    {
        Header: 'Transaction ID',
        accessor: 'transactionId',
    },
    {
        Header: 'Payout Date',
        accessor: 'date',
    },
    {
        Header: 'Points Earned',
        accessor: 'points',
    },
    {
        Header: 'Amount',
        accessor: 'amount',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
]

const PayoutInvoiceModal = ({avatar, data}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
        <button className=' btn px-3' style={{color:'#fff',backgroundColor:'#040980'}} onClick={openModal} >Payout Invoice</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledMainContainer>
            <div>
                <div>
                    <h4>Payout Invoice</h4>
                    <h4 style={{color:'#040980'}}>#5466565656</h4>
                </div>
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
                        <h4>Paid To</h4>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold'>Renold Swift</span>
                            <div className='d-flex flex-column' style={{color:'rgba(30, 30, 30, 0.75)'}}>
                                <span>renoldswift@gmail.com</span>
                                <span>A/c No: 1434235784</span>
                                <span>IDBB Bank</span>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold'>Issued on</span>
                            <div className='d-flex flex-column' style={{color:'rgba(30, 30, 30, 0.75)'}}>
                                <span>04-04-2023 at 6:40 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Table hover>
              <thead style={{backgroundColor:'#D9D9D9',color:'rgba(96, 95, 98, 0.8)'}}>
                <tr>
                  {
                    columns.map((column, index) => (
                      <th key={index}>{column.Header}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody style={{backgroundColor:'#F7F7F7',fontWeight:'500'}}>
                {
                    Transactions?.map((row, index) => (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.transactionId}</td>
                            <td>{row.date}</td>
                            <td>{row.points}</td>
                            <td>{row.amount}</td>
                            <td style={{color:`${row.status==='Paid'?'#1CD82F':'#F80606'}`}}>{row.status}</td>
                        </tr>
                    ))
                }
              </tbody>
            </Table>
            <div className='d-flex flex-wrap gap-4 justify-content-between fw-bold'>
                <span>Total Amount Paid</span>
                <span>$2,300</span>
            </div>
            <div className='d-flex flex-wrap gap-4 justify-content-between'>
                <button className='btn' style={{backgroundColor:'#D9D9D9',width:'10rem'}} onClick={closeModal} >Cancel</button>
                <button className='btn' style={{backgroundColor:'#040980',color:'#fff',width:'10rem'}} >Download Invoice</button>
            </div>
        </StyledMainContainer>
      </Modal>
    </div>
  );
}

export default PayoutInvoiceModal;

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
`;