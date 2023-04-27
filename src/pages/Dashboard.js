import React from "react";
import styled from "styled-components";
import { FaUsers } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import india from '../assets/countries/india 1.svg';
import usa from '../assets/countries/united-states-of-america 1.svg';
import singapore from '../assets/countries/singapore 1.svg';
import china from '../assets/countries/china 1.svg';
import malaysia from '../assets/countries/malaysia 1.svg';
import Pagination from "../componets/utilities/Pagination";
import UserActivityTable from "../componets/Tables/UserActivityTable";
import User1 from '../assets/users/Ellipse 110.png';
import User2 from '../assets/users/Ellipse 111.png';
import User3 from '../assets/users/Ellipse 112.png';
import User4 from '../assets/users/Ellipse 113.png';
import User5 from '../assets/users/Ellipse 114.png';
import User6 from '../assets/users/Ellipse 115.png';
import User7 from '../assets/users/Ellipse 116.png';
import User8 from '../assets/users/Ellipse 163.png';
import { ProgressBar } from "react-bootstrap";
import UserAgePreference from "../componets/Dashboard/UserAgePreferences";

const Users = [
    {
        id: 1,
        name: 'James',
        email: 'james@gmail.com',
        image: User1,
        vpn: 'Vietnam',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Paid'
    },
    {
        id: 2,
        name: 'John',
        email: 'John@gmail.com',
        image: User2,
        vpn: 'India',
        location: 'Madhya Pradesh, India',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Paid'
    },
    {
        id: 3,
        name: 'Robert',
        email: 'robert@gmail.com',
        image: User3,
        vpn: 'Singapore',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Cacelled'
    },
    {
        id: 4,
        name: 'Michael',
        email: 'michael@gmail.com',
        image: User4,
        vpn: 'China',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Paid'
    },
    {
        id: 5,
        name: 'William',
        email: 'william@gmail.com',
        image: User5,
        vpn: 'Malaysia',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Pending'
    },
    {
        id: 6,
        name: 'David',
        email: 'david@gmail.com',
        image: User6,
        vpn: 'India',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Paid'
    },
    {
        id: 7,
        name: 'Richard',
        email: 'richard@gmail.com',
        image: User7,
        vpn: 'India',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Paid'
    },
    {
        id: 8,
        name: 'Joseph',
        email: 'joseph',
        image: User8,
        vpn: 'India',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
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
        accessor: 'name',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'VPN History',
        accessor: 'vpn',
    },
    {
        Header: 'Location',
        accessor: 'location',
    },
    {
        Header: 'Date Registered',
        accessor: 'date',
    },
    {
        Header: 'Ads Watched',
        accessor: 'ads',
    },
    {
        Header: 'Points Earned',
        accessor: 'points',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
]
const DummyStatisticsData = [
    {
        title: 'No. of New Users',
        count: '75k+',
        icon: <FaUsers />,
        change: '9% Yesterday'
    },
    {
        title: 'No. of Active users',
        count: '1250',
        icon: <FaUsers />,
        change: '12% Yesterday'
    },
    {
        title: 'Total No. of Users',
        count: '58k+',
        icon: <FaUsers />,
        change: '1% Yesterday'
    },
    {
        title: 'No. of Ads Shown',
        count: '57',
        icon: <FaUsers />,
        change: 'Today'
    },
]
const DummyPayoutData = [
    {
        title: 'No.of Users Paid',
        count: '25,450',
        icon: <FaUsers />,
    },
    {
        title: 'Pay out Pending Request',
        count: '1250',
        icon: <FaUsers />,
    },
    {
        title: 'No.of Users Paid',
        count: '210',
        icon: <FaUsers />,
    },
    {
        title: 'Pay out Cancelled',
        count: '123',
        icon: <FaUsers />,
    },
]


const Dashboard = () => {
    return (
        <DashboardContainer>
            <HorizontalContainer className="justify-content-between gap-5">
                <Box1 heading={'Statistics'} data={DummyStatisticsData} />
                <Box1 heading={'Payout to Users'} data={DummyPayoutData} />
            </HorizontalContainer>
            <HorizontalContainer className="justify-content-between gap-5">
                <UserAgePreference />
                <GeographicalAreas />
            </HorizontalContainer>
            <UserActivity />
        </DashboardContainer>
    );
}

export default Dashboard;

const Box1 = ({heading, data}) => {
    return (
        <BoxContainer>
            <h4 className="fw-bold">{heading}</h4>
            <HorizontalContainer className="gap-4 justify-content-center flex-wrap">
                {
                    data?.map((item, index) => {
                        return <Box2 key={index} title={item.title} count={item.count} icon={item.icon} change={item.change} />
                    })
                }
            </HorizontalContainer>
        </BoxContainer>
    );
}

const Box2 = ({title, count, change, icon}) => {
    return (
        <VerticalContainer className="p-4 rounded-2 gap-3" style={{backgroundColor:'#fff', width:'300px'}}>
            <span style={{fontSize:'20px'}}>{title}</span>
            <div className="d-flex gap-5 justify-content-between align-items-end">
                <div className="d-flex flex-column">
                    <h3>{count}</h3>
                    {
                        change && <div className="d-flex gap-2 align-items-center" style={{color:'#1CD82F'}} ><AiOutlineArrowUp /><span>{change}</span></div>
                    }
                </div>
                <i style={{fontSize:'2.5rem'}}>{icon}</i>
            </div>
        </VerticalContainer>
    );
}

const GeographicalAreas = () => {
    return (
        <BoxContainer>
            <HorizontalContainer className="justify-content-between gap-5">
                <h4 className="fw-bold">Geographical areas of Connected Users</h4>
                <span className="fw-bold" style={{color:'rgba(96, 95, 98, 0.8)'}}>View All</span>
            </HorizontalContainer>
            <VerticalContainer className="gap-4">
                <Country name={'India'} count={'80.1'} flag={india} />
                <Country name={'USA'} count={'58.6'} flag={usa} />
                <Country name={'Singapore'} count={'45.6'} flag={singapore} />
                <Country name={'China'} count={'35.6'} flag={china} />
                <Country name={'Malaysia'} count={'25.6'} flag={malaysia} />
            </VerticalContainer>
        </BoxContainer>
    );
}

const Country = ({name, count, flag}) => {
    return (
        <VerticalContainer className="gap-1">
            <HorizontalContainer className="justify-content-between align-items-center gap-4">
                <HorizontalContainer className="align-items-center gap-2">
                    <img src={flag} alt={name} style={{width:'2rem'}} />
                    <span className="fw-bold">{name}</span>
                </HorizontalContainer>
                <span className="fw-bold" style={{color:'#182E67'}}>{count}%</span>
            </HorizontalContainer>
            <ProgressBar variant="primary" now={count} style={{height:'10px'}} />
        </VerticalContainer>
    );
}

const UserActivity = () => {
    return (
        <VerticalContainer className="rounded-2 p-4 bg-white gap-3">
            <HorizontalContainer className="justify-content-between align-items-center gap-5">
                <h4 className="fw-bold">User Activity</h4>
                <span className="fw-bold" style={{color:'rgba(96, 95, 98, 0.8)'}}>View All</span>
            </HorizontalContainer>
            <Pagination Table={UserActivityTable} columns={columns} itemsPerPage={10} data={Users} />
        </VerticalContainer>
    );
}

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EBEBEB;
    padding: 20px;
    gap: 3rem;
`;
const HorizontalContainer = styled.div`
    display: flex;
`;
const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.52);
    border-radius: 5px;
    padding: 20px;
    gap: 1rem;
    width: 50%;
`;