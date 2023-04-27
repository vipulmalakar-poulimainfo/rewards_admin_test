import React from "react";
import styled from "styled-components";
import { FaMoneyBillWave } from 'react-icons/fa';

const Box2 = () => {
    return (
        <Container>
            <div className="d-flex gap-4 flex-wrap">
                <BoxComponent title={'Total Cash Earned'} value={'$ 2000'} icon={<FaMoneyBillWave />} />
                <BoxComponent title={'Cash withdrawn'} value={'$ 1200'} icon={<FaMoneyBillWave />} />
                <BoxComponent title={'Available Balance'} value={'$ 800'} icon={<FaMoneyBillWave />} />
            </div>
        </Container>
    )
}

export default Box2;

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