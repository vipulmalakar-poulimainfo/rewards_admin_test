import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { FiSearch } from 'react-icons/fi';
import { MdDashboardCustomize } from 'react-icons/md';
import { FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { AiOutlineSetting, AiOutlineArrowUp } from 'react-icons/ai';
import { HiOutlineDesktopComputer, HiOutlineLogout } from 'react-icons/hi';
import { BiEdit } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from '../assets/Avatar.png';

const Header = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('Dashboard');

    const currentPath = window.location.pathname.substring(0,6);

    useEffect(() => {
        if(currentPath === '/'){
            setActive('Dashboard');
        }else if(currentPath === '/users'){
            setActive('Users');
        }else if(currentPath === '/stati'){
            setActive('Area Statistics');
        }else if(currentPath === '/payou'){
            setActive('Payout');
        }else if(currentPath === '/setti'){
            setActive('Settings');
        }
    }, [currentPath, setActive]);
    return (
        <HeaderContainer>    
            <TopContainer>
                <div>
                    <span>Rewards App</span>
                </div>
                <MiddleContainer>
                    <Option title={'Dashboard'} icon={<MdDashboardCustomize />} active={active} link={'/'} />
                    <Option title={'Users'} icon={<FaUsers />} active={active} link={'/users'} />
                    <Option title={'Area Statistics'} icon={<ImStatsDots />} active={active} link={'/statistics'} />
                    <Option title={'Payout'} icon={<FaMoneyBillWave />} active={active} link={'/payout'} />
                    <Option title={'Settings'} icon={<AiOutlineSetting />} active={active} link={'/settings'} />
                    <div className="d-flex align-items-center">
                        <i className="icon" style={{position:'absolute',marginLeft:'10px',marginBottom:'5px'}} ><FiSearch /></i>
                        <SearchInput className="rounded-5" placeholder="Search" />
                    </div>
                </MiddleContainer>
                <StyledDropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        <Profile>
                            <img src={Avatar} alt="Avatar" style={{width:'1.5rem'}} />
                            <span>User</span>
                        </Profile>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item ><BiEdit /> Edit Profile</Dropdown.Item>
                        <Dropdown.Item><HiOutlineLogout /> Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </StyledDropdown>
            </TopContainer>
            {
                active === 'Dashboard' ? <>
                    <div className="d-flex flex-column gap-1">
                        <span>Hello!</span>
                        <h3>Good Evening, User</h3>
                        <span>Let’s Check your stats today!</span>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap gap-4">
                        <BoxComponent title={'Available to Payout'} value={'$ 25,785.00'} />
                        <BoxComponent title={'No. of Users Connected'} value={'75k +'} icon={<FaUsers />} change={'9% Yesterday'} />
                        <BoxComponent title={'No. of Ads Shown'} value={'125'} icon={<HiOutlineDesktopComputer />} />
                        <BoxComponent title={'Total Revenue'} value={'$ 52,457.00'} />
                    </div>
                </> : <></>
            }
            {
                active === 'Payout' ? <>
                    <h3>Payout</h3>
                    <div className="d-flex justify-content-between flex-wrap gap-4">
                        <BoxComponent title={'No.of Users Paid'} value={'25,450'} icon={<FaMoneyBillWave />} />
                        <BoxComponent title={'Pay out Pending Request'} value={'1250'} icon={<FaMoneyBillWave />} />
                        <BoxComponent title={'Pay out Pending'} value={'210'} icon={<FaMoneyBillWave />} />
                        <BoxComponent title={'Pay out Cancelled'} value={'123'} icon={<FaMoneyBillWave />} />
                    </div>
                </> : <></>
            }
            {
                active === 'Area Statistics' ?<h3>Geographical Area Statistics</h3>: <></>
            }
            {
                active === 'Users' ? <>
                    <h3>Payout</h3>
                    <div className="d-flex justify-content-between flex-wrap gap-4">
                        <BoxComponent title={'Total No. of Users'} value={'58k +'} icon={<FaUsers />} />
                        <BoxComponent title={'Total No. of Active Users'} value={'1250'} icon={<FaUsers />} change={'9% Yesterday'} />
                        <BoxComponent title={'Newly Registered Users'} value={'1600'} icon={<FaUsers />} />
                        <BoxComponent title={'No. of Ads Shown'} value={'1200'} icon={<HiOutlineDesktopComputer />} />
                    </div>
                </> : <></>
            }
            {
                active === 'Settings' ? <><h3>Settings</h3></> : <></>
            }
        </HeaderContainer>
    );
}

export default Header;

const BoxComponent = ({title, value, icon, change}) => {
    return (
        <BoxContainer>
            <span>{title}</span>
            <div className="d-flex gap-5">
                <div className="d-flex flex-column justify-content-end">
                    <h3>{value}</h3>
                    {
                        change ? <span style={{color:'#1CD82F'}}><AiOutlineArrowUp /> {change}</span> : <></>
                    }
                </div>
                <i style={{fontSize:'2.5rem'}}>{icon}</i>
            </div>
        </BoxContainer>
    );
}

const Option = ({icon, title, active, link}) => {
    const navigate = useNavigate();
    useEffect(() => {
    }, [active]);
    return (
        <OptionContainer active={active} title={title} onClick={()=>navigate(link)} >
            <i style={{fontSize:'20px'}}>{icon}</i>
            <span className="fw-bold">{title}</span>
        </OptionContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    gap: 2rem;
    background-color: #040980;
    color: #fff;
`;
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const MiddleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 70%;
`;
const SearchInput = styled.input`
    border: none;
    border-radius: 2px;
    padding: 4px;
    background-color: rgba(252, 252, 252, 0.2);
    color: #fff;
    width: 100%;
    padding-left: 35px;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #fff;
    }
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
`;

const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    cursor: pointer;
    gap: 5px;
    border-radius: 15px;
    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    background-color: ${props => props.active === props.title ? 'rgba(255, 255, 255, 0.2)' : ''};
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 8px;
    border-radius: 10px;
    width: 300px;
    border: 1px solid #fff;
`;
const StyledDropdown = styled(Dropdown)`
    .dropdown-toggle::after {
        display: none;
    }
    .dropdown-item {
        color: rgba(44, 35, 100, 0.8);
        font-weight: 500;
    }
`;