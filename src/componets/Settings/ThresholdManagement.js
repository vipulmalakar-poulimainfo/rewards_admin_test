import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import StatsIcon from '../../assets/icons/stats 1.png';
import ThresholdGraph from '../../assets/ThresholdGraph.svg';
import SetThresholdModal from "../Modals/SetThresholdModal";

const ThresholdManagement = () => {
    return (
        <StyledMainContainer>
            <StyledContainer>
                <BoxContainer title={'Total data consumed  by Users'} value={'24k + TB'} />
                <BoxContainer title={'Threshold limit for each user'} value={'100 MB'} />
                <BoxContainer title={'Data consumed today'} value={'1400 GB'} />
            </StyledContainer>
            <DataContainer />
            <SetThresholdModal />
        </StyledMainContainer>
    );
}

export default ThresholdManagement;

const BoxContainer = ({ title, value }) => {
    return (
        <StyledBoxContainer>
            <span>{title}</span>
            <div className="d-flex justify-content-between align-items-end gap-5">
                <span style={{fontSize:'2rem'}}>{value}</span>
                <img src={StatsIcon} alt="Graph" style={{width:'2rem'}} />
            </div>
        </StyledBoxContainer>
    );
}

const DataContainer = ({ title, value }) => {
    return (
        <StyledDataContainer>
            <div className="d-flex gap-5 justify-content-between">
                <span style={{fontSize:'2rem'}}>Today’s Data chart</span>
                <div className="d-flex">
                    <AiOutlineLeft className="pointer" style={{fontSize:'1.5rem', color:'#717B8C', backgroundColor:'#D9D9D9', padding:'2px'}} />
                    <AiOutlineRight className="pointer" style={{fontSize:'1.5rem', color:'#717B8C', backgroundColor:'#D9D9D9', padding:'2px'}} />
                </div>
            </div>
            <div><img src={ThresholdGraph} alt="Graph" className="w-100" /></div>
        </StyledDataContainer>
    );
}

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 4rem;
`;
const StyledContainer = styled.div`
    display: flex;
    gap: 1rem;
`;
const StyledBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #E9E9E9;
    border-radius: 10px;
    gap: 1rem;
`;
const StyledDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;