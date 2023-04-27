import React from "react";
import styled from "styled-components";
import img1 from '../../assets/Group 44.svg';
import img2 from '../../assets/Group 387.svg';
import img3 from '../../assets/Group 388.svg';
import img4 from '../../assets/Group 389.svg';
import img5 from '../../assets/Group 390.svg';

const UserAgePreference = () => {
    return (
        <BoxContainer>
            <h4 className="fw-bold">Users  Age Preferences</h4>
            <HorizontalContainer className="gap-5 justify-content-between align-items-center">
                <img src={img1} alt="img1" />
                <div className="d-flex flex-wrap justify-content-center gap-5">
                    <img src={img2} alt="img1" />
                    <img src={img3} alt="img1" />
                    <img src={img4} alt="img1" />
                    <img src={img5} alt="img1" />
                </div>
            </HorizontalContainer>
            <div className="d-flex flex-wrap justify-content-between gap-4">
                <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle" style={{backgroundColor:'#182E67', width:'10px',height:'10px'}}></div>
                    <span>Above 30 age</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle" style={{backgroundColor:'#42C595', width:'10px',height:'10px'}}></div>
                    <span>Teenagers</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle" style={{backgroundColor:'#855079', width:'10px',height:'10px'}}></div>
                    <span>Above 45 age</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle" style={{backgroundColor:'#B7C07B', width:'10px',height:'10px'}}></div>
                    <span>Above 60</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle" style={{backgroundColor:'#50A2FF', width:'10px',height:'10px'}}></div>
                    <span>Upto 30 age</span>
                </div>
            </div>
        </BoxContainer>
    );
}

export default UserAgePreference;

const HorizontalContainer = styled.div`
    display: flex;
`;
const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.52);
    border-radius: 5px;
    padding: 20px;
    gap: 1rem;
    width: 50%;
`;