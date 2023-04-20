import React from "react";
import styled from "styled-components";

const ProfileDetails = ({attr, value, width}) => {
    return (
        <VerticalContainer style={{width:width}} >
            <span style={{color:'rgba(30, 30, 30, 0.71)'}}>{attr}</span>
            <span className="fw-bold">{value}</span>
        </VerticalContainer>
    )
}

export default ProfileDetails;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;