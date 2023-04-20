import React from "react";
import styled from "styled-components";
import VPNCard from "../../../componets/Cards/VPNCard";
import india from '../../../assets/countries/india 1.svg';
import usa from '../../../assets/countries/united-states-of-america 1.svg';
import singapore from '../../../assets/countries/singapore 1.svg';
import china from '../../../assets/countries/china 1.svg';
import malaysia from '../../../assets/countries/malaysia 1.svg';

const UserVpnHistory = () => {
    return (
        <Container>
            <VerticalContainer className="gap-4">
                <h2>User VPN History</h2>
                <VPNCard name={'India'} flag={india} date={'04-04-23'} lastActive={'5 hrs ago'} timeRange={'11:20 - 11.40'} ads={20} points={75} dataUsed={'23 MB'} />
                <VPNCard name={'USA'} flag={usa} date={'04-04-23'} lastActive={'8 hrs ago'} timeRange={'9:20 - 9:45'} ads={35} points={85} dataUsed={'50 MB'} />
                <VPNCard name={'Singapore'} flag={singapore} date={'04-04-23'} lastActive={'8 hrs ago'} timeRange={'9:20 - 9:45'} ads={35} points={85} dataUsed={'50 MB'} />
                <VPNCard name={'China'} flag={china} date={'04-04-23'} lastActive={'8 hrs ago'} timeRange={'9:20 - 9:45'} ads={35} points={85} dataUsed={'50 MB'} />
                <VPNCard name={'Malaysia'} flag={malaysia} date={'04-04-23'} lastActive={'2 days ago'} timeRange={'9:20 - 9:45'} ads={35} points={85} dataUsed={'50 MB'} />
            </VerticalContainer>
        </Container>
    );
}

export default UserVpnHistory;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
`;