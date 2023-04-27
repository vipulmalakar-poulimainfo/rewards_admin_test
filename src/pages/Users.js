import React, {useState, useEffect} from "react";
import styled from "styled-components";
import AllUsersTable from "../componets/Tables/AllUsersTable";
import Pagination from "../componets/utilities/Pagination";
import Search from "../componets/utilities/Search";
import User1 from '../assets/users/Ellipse 110.png';
import User2 from '../assets/users/Ellipse 111.png';
import User3 from '../assets/users/Ellipse 112.png';
import User4 from '../assets/users/Ellipse 113.png';
import User5 from '../assets/users/Ellipse 114.png';
import User6 from '../assets/users/Ellipse 115.png';
import User7 from '../assets/users/Ellipse 116.png';
import User8 from '../assets/users/Ellipse 163.png';

const AllUsers = [
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
        status: 'Online'
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
        status: 'Offline'
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
        status: 'Online'
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
        status: 'Offline'
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
        status: 'Online'
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
        status: 'Offline'
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
        status: 'Online'
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
        status: 'Offline'
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

const Users = () => {
    const [active, setActive] = useState('All Users');

    useEffect(() => {
        console.log(active);
    }, [active])
    return (
        <VerticalContainer className="gap-5" style={{padding:'20px', backgroundColor:'#EBEBEB'}}>
            <VerticalContainer className="gap-3">
                <HorizontalContainer className="align-items-center gap-5">
                    <h2>Users</h2>
                    <span className="fw-bold" style={{color:'#040980'}}>List of All Users</span>
                    <HorizontalContainer className="gap-4">
                        <Button text="All Users" color={'#fff'} active={active==='All Users'} func={()=>setActive('All Users')} bgColor={'#040980'} />
                        <Button text="Active Users" color={'#fff'} active={active==='Active Users'} func={()=>setActive('Active Users')} bgColor={'#040980'} />
                        <Button text="New Users" color={'#fff'} active={active==='New Users'} func={()=>setActive('New Users')} bgColor={'#040980'} />
                    </HorizontalContainer>
                </HorizontalContainer>
                <span className="fw-bold" style={{color:'#040980'}}>Select Field</span>
                <HorizontalContainer className="justify-content-between align-items-center gap-5">
                    <HorizontalContainer className="gap-4">
                        <Select className="form-select"><option value="1">All dates</option></Select>
                        <Select className="form-select"><option value="1">All Categories</option></Select>
                        <Select className="form-select"><option value="1">All Locations</option></Select>
                    </HorizontalContainer>
                    <Search placeholder={'Search Users'} />
                </HorizontalContainer>
            </VerticalContainer>
            <VerticalContainer className="gap-4 p-3 rounded-3" style={{backgroundColor:'#fff'}}>
                <HorizontalContainer>
                    <h3>All Users</h3>
                </HorizontalContainer>
                <Pagination Table={AllUsersTable} columns={columns} itemsPerPage={10} data={AllUsers} />
            </VerticalContainer>
        </VerticalContainer>
    )
}

export default Users;

const HorizontalContainer = styled.div`
    display: flex;
`;
const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = ({ text, color, bgColor, active, func}) => {
    return (
        <div>
            <button className=' btn px-3' onClick={()=>func()} style={{color:active?color:'#8D9191',backgroundColor:active?bgColor:'#CCD3D2'}} >{text}</button>
        </div>
    )
}
const Select =styled.select`
    background-color: rgba(4, 9, 128, 0.34);
    width: '3rem';
`;