import React, {useState, useEffect} from "react";
import styled from "styled-components";
import AccountSettings from "../componets/Settings/AccountSettings";
import ThresholdManagement from "../componets/Settings/ThresholdManagement";
import AccessRightManagement from "../componets/Settings/AccessRightManagement";
import BankDetails from "../componets/Settings/BankDetails";

const Settings = () => {
    const [active, setActive] = useState('Account Settings');

    return (
        <StyledMainContainer>
            <h2>
                {
                    active==='Account Settings'? 'Settings'
                    : active==='Threshold Management'? 'Threshold Management'
                    : active==='Access Right Management'? 'Access Right Management'
                    : active==='Bank Details'? 'Bank Details'
                    : ''
                }
            </h2>
            <StyledContainer>
                <StyledNavbar>
                    <span className="fw-bold p-2 pointer" style={{color:`${active==='Account Settings'?'':'#717B8C'}`, borderBottom:`${active==='Account Settings'?'3px solid':''}`}} onClick={()=>setActive('Account Settings')} >Account Settings</span>
                    <span className="fw-bold p-2 pointer" style={{color:`${active==='Threshold Management'?'':'#717B8C'}`, borderBottom:`${active==='Threshold Management'?'3px solid':''}`}} onClick={()=>setActive('Threshold Management')} >Threshold Management</span>
                    <span className="fw-bold p-2 pointer" style={{color:`${active==='Access Right Management'?'':'#717B8C'}`, borderBottom:`${active==='Access Right Management'?'3px solid':''}`}} onClick={()=>setActive('Access Right Management')} >Access Right Management</span>
                    <span className="fw-bold p-2 pointer" style={{color:`${active==='Bank Details'?'':'#717B8C'}`, borderBottom:`${active==='Bank Details'?'3px solid':''}`}} onClick={()=>setActive('Bank Details')} >Bank Details</span>
                </StyledNavbar>
                {
                    active==='Account Settings'? <AccountSettings></AccountSettings>
                    : active==='Threshold Management'? <ThresholdManagement />
                    : active==='Access Right Management'? <AccessRightManagement />
                    : active==='Bank Details'? <BankDetails />
                    : <></>
                }
            </StyledContainer>
        </StyledMainContainer>
    );
}

export default Settings;

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #EBEBEB;
    gap: 1rem;
`;
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
`;
const StyledNavbar = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
`;