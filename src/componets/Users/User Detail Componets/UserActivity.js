import React from "react";
import styled from "styled-components";
import Graph from '../../../assets/Graph.svg'
import Box1 from "./Box1";

const UserActivity = () => {
    return (
        <Container>
            <HorizontalContainer className="justify-content-between gap-5">
                <HorizontalContainer className="gap-4">
                    <span>Today</span>
                    <span>Weekly</span>
                    <span>Monthly</span>
                </HorizontalContainer>
                <select className="form-select" style={{width:'10rem',backgroundColor:'#D9D9D9'}} ><option value="1">Select Period</option></select>
            </HorizontalContainer>
            <Box1 />
            <div><img src={Graph} className="me-3" alt={''} /></div>
        </Container>
    );
}

export default UserActivity;

const HorizontalContainer = styled.div`
    display: flex;
`;
const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
`;