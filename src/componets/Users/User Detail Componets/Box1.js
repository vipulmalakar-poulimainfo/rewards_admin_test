import React from "react";
import styled from "styled-components";
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import Coin from '../../../assets/icons/Group.png'
import Internet from '../../../assets/icons/Group 357.png'

const Box1 = () => {
    return (
        <Container>
            <div className="d-flex gap-4 flex-wrap">
                <BoxComponent title={'No. of Ads Watched'} value={457} icon={<HiOutlineDesktopComputer style={{color:'#FE3EAA'}} />} />
                <BoxComponent title={'No. of Points Earned'} value={4500} src={Coin} />
                <BoxComponent title={'Total No. of VPN Used'} value={9} src={Internet} />
            </div>
        </Container>
    );
}

export default Box1;

const BoxComponent = ({title, value, icon, src}) => {
    return (
        <BoxContainer>
            <span>{title}</span>
            <div className="d-flex align-items-end justify-content-between gap-5">
                <h3>{value}</h3>
                {
                    icon?
                        <i style={{fontSize:'2.5rem'}}>{icon}</i>
                    :
                    src?
                    <><img src={src} className="me-3" style={{height:'2rem'}} alt={''} /></>
                    :
                    <></>
                }
            </div>
        </BoxContainer>
    );
}

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
`;
const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
    border-radius: 5px;
    width: 250px;
    border: 1px solid #000;
`;