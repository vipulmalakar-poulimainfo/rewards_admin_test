import React from "react";
import styled from "styled-components";
import Avatar from "../../assets/Avatar.png";
import EditAdminModal from "../Modals/EditAdminModal";
import AddAdminModal from "../Modals/AddAdminModal";

const admins = [
    {
        name: 'Admin 1',
        age: 35,
        role: 'Super Admin',
        access: 'Full - access',
    },
    {
        name: 'Admin 2',
        age: 30,
        role: 'Admin',
        access: 'Partial - access',
    },
];

const AccessRightManagement = () => {
    return (
        <StyledMainContainer>
            {
                admins.map((admin, index) => {
                    return (
                        <Card key={index} avatar={Avatar} title={admin.name} />
                    );
                })
            }
            <Card title={'Add admin'} dummy={true} />
        </StyledMainContainer>
    );
}

export default AccessRightManagement;

const Card = ({avatar, title, dummy}) => {
    return (
        <div className="d-flex flex-column gap-2">
            <h3>{title}</h3>
            {
                dummy?
                <StyledCard>
                    <AddAdminModal />
                    <h3>Add admin</h3>
                </StyledCard>
                :
                <StyledCard>
                    <img src={Avatar} alt="Avatar" style={{width:'8rem'}} />
                    <StyledDetailsContainer>
                        <KeyValues title="Name" value="Username" />
                        <KeyValues title="Age" value="35" />
                        <KeyValues title="Role" value="Super Admin" />
                        <KeyValues title="Access" value="Full - access" />
                    </StyledDetailsContainer>
                    <EditAdminModal />
                </StyledCard>
            }
        </div>
    );
}

const KeyValues = ({title, value}) => {
    return (
        <div className="d-flex gap-5 justify-content-between">
            <span>{title}</span>
            -
            <span>{value}</span>
        </div>
    );
}

const StyledMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
`;
const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(4, 9, 128, 0.14);
    border-radius: 10px;
    padding: 20px 10px;
    gap: 1rem;
    width: 20rem;
    height: 25rem;
`;
const StyledDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
`;