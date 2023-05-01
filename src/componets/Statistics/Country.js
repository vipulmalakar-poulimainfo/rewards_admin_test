import React from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";

const Country = ({id, name, count, flag, country, setCountry}) => {
    return (
        <StyledCountryContainer isActive={country===id}>
            <HorizontalContainer className="justify-content-between align-items-center gap-4">
                <HorizontalContainer className="align-items-center gap-2">
                    <img src={flag} alt={name} style={{width:'2rem'}} />
                    <span className="fw-bold">{name}</span>
                </HorizontalContainer>
                <span className="fw-bold" style={{color:`${country===id?'#fff':'#182E67'}`}}>{count}%</span>
            </HorizontalContainer>
            <ProgressBar variant="primary" now={count} style={{height:'10px'}} />
            <HorizontalContainer className="justify-content-end">
                <span style={{fontWeight:'500', fontSize:'13px' ,color:`${country===id?'#fff':'#182E67'}`, cursor:'pointer'}} onClick={()=>setCountry(id)} >View Details</span>
            </HorizontalContainer>
        </StyledCountryContainer>
    );
}

export default Country;

const StyledCountryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${props => props.isActive ? '#2641D1' : '#fff'};
    color: ${props => props.isActive ? '#fff' : '#000'};
    padding: 10px 20px;
    border-radius: 5px;
`;

const HorizontalContainer = styled.div`
    display: flex;
`;