import React from "react";
import styled from "styled-components";
import { FaUsers } from 'react-icons/fa';
import { AiOutlineArrowUp } from "react-icons/ai";

const CountryDetails = ({country}) => {
    return (
        <StyledCountryDetailsContainer>
            <h3>Country Details</h3>
            <StyledCountryDetails>
                <div className="d-flex gap-2 align-items-center">
                    <img src={country?.flag} alt={'name'} style={{width:'4rem'}} />
                    <div className="d-flex flex-column justify-content-between">
                        <span className="fw-bold">{country?.name}</span>
                        <span style={{color:'#182E67',fontSize:'1.5rem',fontWeight:'500'}}>{country?.count}%</span>
                    </div>
                </div>
                <BoxComponent title={'Total No. of Users '} value={'20k+'} icon={<FaUsers />} change={'2% Yesterday'} />
            </StyledCountryDetails>
        </StyledCountryDetailsContainer>
    )
}

export default CountryDetails;

const BoxComponent = ({title, value, icon, change}) => {
    return (
        <div className="rounded-2 p-2" style={{border:'1px solid', fontSize:'0.8rem'}}>
            <span>{title}</span>
            <div className="d-flex gap-5">
                <div className="d-flex flex-column justify-content-end">
                    <h5 className="fw-bold">{value}</h5>
                    <span style={{color:'#1CD82F'}}><AiOutlineArrowUp /> {change}</span>
                </div>
                <i style={{fontSize:'2rem'}}>{icon}</i>
            </div>
        </div>
    );
}

const StyledCountryDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
`;
const StyledCountryDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;