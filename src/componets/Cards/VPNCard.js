import React from "react";
import styled from "styled-components";
import Clock from '../../assets/icons/clock 1.png'
import Computer from '../../assets/icons/computer 1.png'
import Badge from '../../assets/icons/rewardsicon 1.png'
import Stats from '../../assets/icons/stats 1.png'

const VPNCard = ({name, flag, date, lastActive, timeRange, ads, points, dataUsed}) => {
    return(
        <StyledVPNCard>
            <HorizontalContainer className="align-items-center justify-content-between">
                <VerticalContainer>
                    <HorizontalContainer className="align-items-center gap-2">
                        <img src={flag} alt={name} />
                        <span className="fw-bold">{name}</span>
                    </HorizontalContainer>
                    <span>Last active {lastActive} </span>
                </VerticalContainer>
                <span>{date}</span>
            </HorizontalContainer>
            <VerticalContainer className="align-items-center gap-4">
                <HorizontalContainer className="gap-5 flex-wrap">
                    <VPNData src={Clock} title={'Time range'} value={timeRange} />
                    <VPNData src={Computer} title={'No.of Ads'} value={ads} />
                </HorizontalContainer>
                <HorizontalContainer className="gap-5 flex-wrap">
                    <VPNData src={Badge} title={'Points earned'} value={points} />
                    <VPNData src={Stats} title={'Data Used'} value={dataUsed} />
                </HorizontalContainer>
            </VerticalContainer>
        </StyledVPNCard>
    );
}

export default VPNCard;


const VPNData = ({src,title,value}) => {
    return (
        <VerticalContainer className="align-items-center">
            <><img src={src} style={{width:'2rem'}} alt='img' /></>
            <span>{title}</span>
            <h5>{value}</h5>
        </VerticalContainer>
    )
}

const HorizontalContainer = styled.div`
    display: flex;
`;
const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledVPNCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    gap: 1rem;
    padding: 1rem;
    width: 20rem;
`;