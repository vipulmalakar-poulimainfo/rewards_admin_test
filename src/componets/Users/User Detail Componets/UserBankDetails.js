import React from "react";
import styled from "styled-components";
import ProfileDetails from "./ProfileDetails";

const UserBankDetails = () => {
    return (
        <Container>
            <VerticalContainer className="gap-3">
                <HorizontalContainer className="gap-5">
                    <ProfileDetails attr={'Account Holder Name'} value={'UserName'} width={'10rem'} />
                    <ProfileDetails attr={'Account Number'} value={'321456799'} width={'10rem'} />
                    <ProfileDetails attr={'Bank Name'} value={'IDDB Bank'} width={'10rem'} />
                </HorizontalContainer>
                <HorizontalContainer className="gap-5">
                    <ProfileDetails attr={'Bank Code'} value={'IDDB2345'} width={'10rem'} />
                    <ProfileDetails attr={'Branch Name'} value={'Hongkong, China'} width={'10rem'} />
                </HorizontalContainer>
            </VerticalContainer>
        </Container>
    );
}

export default UserBankDetails;

const HorizontalContainer = styled.div`
    display: flex;
`;
const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
`;