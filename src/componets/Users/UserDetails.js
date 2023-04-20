import React from "react";
import styled from "styled-components";
import TransactionHistoryTable from "../Tables/TransactionHistoryTable";
import Pagination from "../utilities/Pagination";
import Profile from "./User Detail Componets/Profile";
import UserVpnHistory from "./User Detail Componets/UserVPNHistory";
import UserBankDetails from "./User Detail Componets/UserBankDetails";
import Box1 from "./User Detail Componets/Box1";
import Box2 from "./User Detail Componets/Box2";
import UserActivity from "./User Detail Componets/UserActivity";

const Transactions = [
    {
        id: 1,
        transactionId: 'TRX 123456789',
        name: 'Amount added to A/C **547',
        amount: '$ 10',
        date: '07.09.2022',
        status: 'Success'
    },
    {
        id: 2,
        transactionId: 'TRX 123456789',
        name: 'Amount added to A/C **547',
        amount: '$ 10',
        date: '07.09.2022',
        status: 'Success'
    },
    {
        id: 3,
        transactionId: 'TRX 123456789',
        name: 'Amount added to A/C **547',
        amount: '$ 10',
        date: '07.09.2022',
        status: 'Failed'
    },
    {
        id: 4,
        transactionId: 'TRX 123456789',
        name: 'Amount added to A/C **547',
        amount: '$ 10',
        date: '07.09.2022',
        status: 'Success'
    },
]
const columns = [
    {
        Header: <input type="checkbox" />,
        accessor: 'id',
    },
    {
        Header: 'Payment Description',
        accessor: 'name',
    },
    {
        Header: 'Transaction ID',
        accessor: 'transactionId',
    },
    {
        Header: 'Amount',
        accessor: 'amount',
    },
    {
        Header: 'Date',
        accessor: 'date',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: '',
        accessor: '',
    },
]

const UserDetails = () => {
    return (
        <VerticalContainer className="gap-5" style={{padding:'20px',backgroundColor:'#EBEBEB'}}>
            <HorizontalContainer className="justify-content-between">
                <VerticalContainer className="gap-5">
                    <UserDetailsContainer>
                        <h2>User Details</h2>
                        <VerticalContainer className="gap-4">
                            <Profile />
                            <Box1 />
                            <Box2 />
                        </VerticalContainer>
                    </UserDetailsContainer>
                    <UserDetailsContainer>
                        <h2>User Bank Details</h2>
                        <UserBankDetails />
                    </UserDetailsContainer>
                    <UserDetailsContainer>
                        <h2>User Activity</h2>
                        <UserActivity />
                    </UserDetailsContainer>
                </VerticalContainer>
                <UserVpnHistory />
            </HorizontalContainer>
            <UserDetailsContainer>
                <h2>Transaction History</h2>
                <Pagination Table={TransactionHistoryTable} columns={columns} itemsPerPage={10} data={Transactions} />
            </UserDetailsContainer>
        </VerticalContainer>
    );
}

export default UserDetails;

const HorizontalContainer = styled.div`
    display: flex;
`;
const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const UserDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;