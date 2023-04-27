import React from "react";
import styled from "styled-components";
import GenderPlotGraph from '../../assets/GenderPlotDiagram.svg';

const StaticByGender = () => {
    return (
        <StyledByGenderContainer>
            <div className="d-flex flex-column gap-4">
                <h3>Static by Gender</h3>
                <div className="d-flex gap-5">
                    <div className="d-flex flex-column" style={{fontWeight:'500'}}>
                        <span style={{fontSize:'18px'}}>Men</span>
                        <span style={{color:'#182E67',fontSize:'2rem'}}>75 %</span>
                    </div>
                    <div className="d-flex flex-column" style={{fontWeight:'500'}}>
                        <span style={{fontSize:'18px'}}>Women</span>
                        <span style={{color:'#182E67',fontSize:'2rem'}}>25 %</span>
                    </div>
                    <div className="d-flex flex-column" style={{fontWeight:'500'}}>
                        <span style={{fontSize:'18px'}}>Others</span>
                        <span style={{color:'#182E67',fontSize:'2rem'}}>0 %</span>
                    </div>
                </div>
            </div>
            <img src={GenderPlotGraph} alt={'name'} style={{width:'10rem'}} />
        </StyledByGenderContainer>
    )
}

export default StaticByGender;

const StyledByGenderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
`;