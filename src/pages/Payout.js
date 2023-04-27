import React, {useState,useEffect} from "react";
import styled from "styled-components";
import Search from "../componets/utilities/Search";
import PayoutsTable from "../componets/Tables/PayoutsTable";
import Pagination from "../componets/utilities/Pagination";
import User1 from '../assets/users/Ellipse 110.png';
import User2 from '../assets/users/Ellipse 111.png';
import User3 from '../assets/users/Ellipse 112.png';
import User4 from '../assets/users/Ellipse 113.png';
import User5 from '../assets/users/Ellipse 114.png';
import User6 from '../assets/users/Ellipse 115.png';
import User7 from '../assets/users/Ellipse 116.png';
import User8 from '../assets/users/Ellipse 163.png';
import Coin from '../assets/icons/Group.png'
import { FaMoneyBillWave } from "react-icons/fa";
import PayoutInvoiceModal from "../componets/Modals/PayoutInvoiceModal";
import PaymentModal from "../componets/Modals/PaymentModal";

const AllUsers = [
    {
        id: 1,
        name: 'James',
        image: User1,
        date: '07.09.2022',
        points: '1,250',
        amount: '2,300',
        status: 'Paid'
    },
    {
        id: 2,
        name: 'John',
        image: User2,
        date: '07.09.2022',
        points: '5,200',
        amount: '2,300',
        status: 'Pending'
    },
    {
        id: 3,
        name: 'Robert',
        image: User3,
        date: '07.09.2022',
        points: '5,200',
        amount: '2,300',
        status: 'Cancelled'
    },
    {
        id: 4,
        name: 'Michael',
        image: User4,
        date: '07.09.2022',
        points: '5,200',
        amount: '2,300',
        status: 'Paid'
    },
    {
        id: 5,
        name: 'William',
        image: User5,
        date: '07.09.2022',
        points: '5,200',
        amount: '2,300',
        status: 'Paid'
    },
    {
        id: 6,
        name: 'David',
        image: User6,
        date: '07.09.2022',
        points: '5,200',
        amount: '2,300',
        status: 'Cancelled'
    },
    {
        id: 7,
        name: 'Richard',
        image: User7,
        date: '07.09.2022',
        points: '5,200',
        amount: '2,300',
        status: 'Pending'
    },
    {
        id: 8,
        name: 'Joseph',
        image: User8,
        date: '07.09.2022',
        points: '5,200',
        amount: '2,300',
        status: 'Paid'
    },

]
const columns = [
    {
        Header: 'S. no.',
        accessor: 'id',
    },
    {
        Header: 'User Name',
        accessor: 'image && name',
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
        Header: 'Action',
        accessor: 'status',
    },
]
const Payout = () => {
    const [active, setActive] = useState('All Payouts');
    const [users, setUsers] = useState(AllUsers);
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
        if(active==='All Payouts') setUsers(AllUsers)
        else if(active==='Paid') setUsers(AllUsers.filter(user=>user.status==='Paid'))
        else if(active==='Pending Payout') setUsers(AllUsers.filter(user=>user.status==='Pending'))
        else if(active==='Cancelled Payout') setUsers(AllUsers.filter(user=>user.status==='Cancelled'))
    }, [active]);
    useEffect(() => {
        setCurrentUser(users[0]);
    }, [users]);
    return (
        <StyledMainContainer>
            <StyledTopContainer>
                <StyledHorizontalContainer className="align-items-center gap-5">
                    <h2>Payout</h2>
                    <span className="fw-bold" style={{color:'#040980'}}>List of All Payouts</span>
                    <StyledHorizontalContainer className="gap-4">
                        <Button text="All Payouts" color={'#fff'} active={active==='All Payouts'} func={()=>setActive('All Payouts')} bgColor={'#040980'} />
                        <Button text="Paid" color={'#fff'} active={active==='Paid'} func={()=>setActive('Paid')} bgColor={'#040980'} />
                        <Button text="Pending Payout" color={'#fff'} active={active==='Pending Payout'} func={()=>setActive('Pending Payout')} bgColor={'#040980'} />
                        <Button text="Cancelled Payout" color={'#fff'} active={active==='Cancelled Payout'} func={()=>setActive('Cancelled Payout')} bgColor={'#040980'} />
                    </StyledHorizontalContainer>
                </StyledHorizontalContainer>
                <span className="fw-bold" style={{color:'#040980'}}>Select Field</span>
                <StyledHorizontalContainer className="justify-content-between align-items-center gap-5">
                    <StyledHorizontalContainer className="gap-4">
                        <Select className="form-select"><option value="1">All dates</option></Select>
                        <Select className="form-select"><option value="1">All Categories</option></Select>
                        <Select className="form-select"><option value="1">All Locations</option></Select>
                    </StyledHorizontalContainer>
                    <Search placeholder={'Search Users'} />
                </StyledHorizontalContainer>
            </StyledTopContainer>
            <StyledBottomContainer>
                <StyledBottomLeftContainer>
                    <h3>List of All Payouts</h3>
                    <Pagination Table={PayoutsTable} columns={columns} itemsPerPage={10} data={users} func={setCurrentUser} />
                </StyledBottomLeftContainer>
                <StyledBottomRightContainer>
                    <StyledIntroContainer>
                        <div><img src={currentUser?.image} style={{width:'3.5rem'}} alt="profile-img" /></div>
                        <div className="d-flex flex-column">
                            <span style={{fontWeight:'500',fontSize:'20px'}}>{currentUser?.name}</span>
                            <span style={{color:'rgba(30, 30, 30, 0.7)'}}>Male | SoftWare Engineer</span>
                        </div>
                        <div><span className="px-3 rounded-2" style={{border:'1px solid',color:`${currentUser?.status==='Paid'?'#35CC5F':currentUser?.status==='Pending'?'#F3A250':'#DD1616'}`}}>{currentUser?.status}</span></div>
                    </StyledIntroContainer>
                    <StyledDetailsContainer>
                        <div className="d-flex gap-5">
                            <KeyValues keyName={'Name'} value={currentUser?.name} />
                            <KeyValues keyName={'Date Joining'} value={currentUser?.date} />
                        </div>
                        <div className="d-flex gap-5">
                            <KeyValues keyName={'Age'} value={'28'} />
                            <KeyValues keyName={'Country'} value={'Singapore'} />
                        </div>
                        <div className="d-flex gap-5">
                            <KeyValues keyName={'Profession'} value={'Software Engineer'} />
                            <KeyValues keyName={'Email'} value={'renoldswift@gmail.com'} />
                        </div>
                        <KeyValues keyName={'Address'} value={'17,Lorem Ipsum Street,Lorem Ipsum, Singapore'} />
                    </StyledDetailsContainer>
                    <StyledBoxContainer>
                        <BoxComponent title={'Pay out'} value={currentUser?.amount} icon={<FaMoneyBillWave />} />
                        <BoxComponent title={'No. of Points Earned'} value={currentUser?.points} src={Coin} />
                    </StyledBoxContainer>
                    <StyledBoxContainer>
                        {
                            currentUser.status==='Paid'? <PayoutInvoiceModal /> : <PaymentModal />
                        }
                        <button className="btn" style={{border:'2px solid #040980'}}>User Details</button>
                    </StyledBoxContainer>
                    <StyledCardContainer>
                        <h4>Payout Details</h4>
                        <StyledCard>
                            <div className="d-flex justify-content-between">
                                <span style={{color:'rgba(30, 30, 30, 0.71)'}}>Amount Paid</span>
                                <span className="fw-bold">{currentUser?.amount}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span style={{color:'rgba(30, 30, 30, 0.71)'}}>Transaction ID</span>
                                <span className="fw-bold">1644977965</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span style={{color:'rgba(30, 30, 30, 0.71)'}}>Transaction Date</span>
                                <span className="fw-bold">01-04-2023</span>
                            </div>
                        </StyledCard>
                    </StyledCardContainer>
                    <StyledCardContainer>
                        <h4>Bank Details</h4>
                        <StyledCard>
                            <div className="d-flex justify-content-between">
                                <span style={{color:'rgba(30, 30, 30, 0.71)'}}>Account No</span>
                                <span className="fw-bold">35412899752</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span style={{color:'rgba(30, 30, 30, 0.71)'}}>Account Name</span>
                                <span className="fw-bold">Renold Swift</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span style={{color:'rgba(30, 30, 30, 0.71)'}}>Bank Name</span>
                                <span className="fw-bold">IDBB Bank</span>
                            </div>
                        </StyledCard>
                    </StyledCardContainer>
                </StyledBottomRightContainer>
            </StyledBottomContainer>
        </StyledMainContainer>
    );
}

export default Payout;

const Button = ({ text, color, bgColor, active, border, func}) => {
    return (
        <div>
            <button className=' btn px-3' onClick={()=>func()} style={{color:active?color:'#8D9191',backgroundColor:active?bgColor:'#CCD3D2'}} >{text}</button>
        </div>
    )
}
const KeyValues = ({ keyName, value }) => {
    return (
        <div style={{fontWeight:'500'}} className="d-flex flex-column">
            <span style={{color:'rgba(30, 30, 30, 0.71)', fontSize:'13px'}}>{keyName}</span>
            <span>{value}</span>
        </div>
    )
}
const BoxComponent = ({title, value, icon, src}) => {
    return (
        <BoxContainer>
            <span>{title}</span>
            <div className="d-flex align-items-end justify-content-between gap-5">
                <h3>{value}</h3>
                {
                    icon?
                        <i style={{fontSize:'2.5rem'}}>{icon}</i>
                    :
                    src?
                    <><img src={src} className="me-3" style={{height:'2rem'}} alt={''} /></>
                    :
                    <></>
                }
            </div>
        </BoxContainer>
    );
}
const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EBEBEB;
    padding: 20px;
    gap: 2rem;
`;
const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    gap: 1rem;
    background-color: rgba(4, 9, 128, 0.04);
    border-radius: 10px;
`;
const StyledTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const StyledHorizontalContainer = styled.div`
    display: flex;
`;
const Select =styled.select`
    background-color: rgba(4, 9, 128, 0.34);
    width: '3rem';
`;
const StyledBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;
const StyledBottomLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px 10px;
    border-radius: 5px;
    gap: 1rem;
    width: 60%;
`;
const StyledBottomRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    width: 30%;
    border-radius: 5px;
    gap: 2rem;
`;
const StyledIntroContainer = styled.div`
    display: flex;
    gap: 1rem;
`;
const StyledDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
    border-radius: 5px;
    width: 250px;
    border: 1px solid #000;
`;
const StyledBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
`;