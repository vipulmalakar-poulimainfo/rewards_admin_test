import React from "react";
import styled from "styled-components";
import HDFC from "../../assets/icons/HDFC.png";
import AddBankModal from "../Modals/AddBankModal";

const BankDetails = () => {
    return (
        <StyledMainContainer>
            <BankCardsContainer>
                <BankCard name={'HDFC BANK'} account={'1234567890'} ifsc={'41845'} branch={'Delhi, India'} type={'Savings'} src={HDFC} />
                <BankCard name={'YES BANK'} account={'154354538845'} ifsc={'41845'} branch={'Delhi, India'} type={'Savings'} />
            </BankCardsContainer>
            <AddBankModal />
        </StyledMainContainer>
    );
}

export default BankDetails;

const BankCard = ({name, account, ifsc, branch, type, src}) => {
    return (
        <StyledBankCard>
            <div>
                <span className="fw-bold">{name}</span>
                <div className="d-flex flex-column" style={{color:'rgba(30, 30, 30, 0.75)'}}>
                    <span>{account}</span>
                    <span>Bank Code: {ifsc}</span>
                    <span>Bank branch: {branch}</span>
                    <span>{type}</span>
                </div>
            </div>
            {
                src?
                <div>
                    <img src={src} alt="Avatar" style={{width:'3rem'}} />
                </div>
                :<></>
            }
        </StyledBankCard>
    );
}

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const BankCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`;
const StyledBankCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #D9D9D9;
    padding: 1rem;
    border-radius: 5px;
    width: 25rem;
`;
