import React from "react";
import styled from "styled-components";
import User1 from '../../../assets/users/Ellipse 110.png';
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
    return (
        <Container>
            <HorizontalContainer className="justify-content-between gap-5">
                <HorizontalContainer>
                    <VerticalContainer>
                        <h5>User</h5>
                        <p>Male | Bussiness</p>
                    </VerticalContainer>
                    <div>
                        <span className="px-2 rounded-2" style={{backgroundColor:'rgba(53, 204, 95, 0.23)',color:'#1CD82F'}}>Active</span>
                    </div>
                </HorizontalContainer>
                <HorizontalContainer>
                    <img src={User1} className="me-3" style={{width:'4rem' ,height:'4rem'}} alt={''} />
                </HorizontalContainer>
            </HorizontalContainer>
            <hr style={{border:'1px solid'}} ></hr>
            <VerticalContainer className="gap-4">
                <HorizontalContainer className="gap-5">
                    <ProfileDetails attr={'Name'} value={'UserName'} width={'8rem'} />
                    <ProfileDetails attr={'Date of Joining'} value={'02 Aug 2022'} width={'8rem'} />
                    <ProfileDetails attr={'Country'} value={'China'} width={'8rem'} />
                </HorizontalContainer>
                <HorizontalContainer className="gap-5">
                    <ProfileDetails attr={'Age'} value={'32'} width={'8rem'} />
                    <ProfileDetails attr={'Profession'} value={'Business'} width={'8rem'} />
                    <ProfileDetails attr={'Email'} value={'user@gmail.com'} width={'8rem'} />
                </HorizontalContainer>
                <HorizontalContainer className="gap-5 align-items-center">
                    <ProfileDetails attr={'Address'} value={'17,Lorem Ipsum Street,Lorem Ipsum, Hongkong.'} width={'15rem'} />
                        <>
                            <button className="btn text-white rounded-5 px-5" style={{backgroundColor:'#040980'}}>Cash Payout</button>
                        </>
                        <>
                            <button className="btn rounded-5" style={{color:'red'}}>Delete User</button>
                        </>
                </HorizontalContainer>
            </VerticalContainer>
        </Container>
    )
}

export default Profile;

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