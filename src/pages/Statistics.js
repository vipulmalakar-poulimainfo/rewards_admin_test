import React, {useState,useEffect} from "react";
import styled from "styled-components";
import Search from "../componets/utilities/Search";
import india from '../assets/countries/india 1.svg';
import usa from '../assets/countries/united-states-of-america 1.svg';
import singapore from '../assets/countries/singapore 1.svg';
import china from '../assets/countries/china 1.svg';
import malaysia from '../assets/countries/malaysia 1.svg';
import Country from "../componets/Statistics/Country";
import StaticByGender from "../componets/Statistics/StaticByGender";
import CountryDetails from "../componets/Statistics/CountryDetails";
import UserAgePreference from "../componets/Statistics/UserAgePreferences";
import Pagination from "../componets/utilities/Pagination";
import CountryUsersTable from "../componets/Tables/CountryUsersTable";
import User1 from '../assets/users/Ellipse 110.png';
import User2 from '../assets/users/Ellipse 111.png';
import User3 from '../assets/users/Ellipse 112.png';
import User4 from '../assets/users/Ellipse 113.png';
import User5 from '../assets/users/Ellipse 114.png';
import User6 from '../assets/users/Ellipse 115.png';
import User7 from '../assets/users/Ellipse 116.png';
import User8 from '../assets/users/Ellipse 163.png';

const countries = [
    {
        _id: 1,
        name: 'India',
        count: '80.1',
        flag: india
    },
    {
        _id: 2,
        name: 'USA',
        count: '25.5',
        flag: usa
    },
    {
        _id: 3,
        name: 'Singapore',
        count: '10.2',
        flag: singapore
    },
    {
        _id: 4,
        name: 'China',
        count: '8.8',
        flag: china
    },
    {
        _id: 5,
        name: 'Malaysia',
        count: '5.6',
        flag: malaysia
    }
]

const AllUsers = [
    {
        id: 1,
        name: 'James',
        email: 'james@gmail.com',
        image: User1,
        vpn: 'Vietnam',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Online'
    },
    {
        id: 2,
        name: 'John',
        email: 'John@gmail.com',
        image: User2,
        vpn: 'India',
        location: 'Madhya Pradesh, India',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Offline'
    },
    {
        id: 3,
        name: 'Robert',
        email: 'robert@gmail.com',
        image: User3,
        vpn: 'Singapore',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Online'
    },
    {
        id: 4,
        name: 'Michael',
        email: 'michael@gmail.com',
        image: User4,
        vpn: 'China',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Offline'
    },
    {
        id: 5,
        name: 'William',
        email: 'william@gmail.com',
        image: User5,
        vpn: 'Malaysia',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Online'
    },
    {
        id: 6,
        name: 'David',
        email: 'david@gmail.com',
        image: User6,
        vpn: 'India',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Offline'
    },
    {
        id: 7,
        name: 'Richard',
        email: 'richard@gmail.com',
        image: User7,
        vpn: 'India',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Online'
    },
    {
        id: 8,
        name: 'Joseph',
        email: 'joseph',
        image: User8,
        vpn: 'India',
        location: 'California, USA',
        date: '07.09.2022',
        ads: '536',
        points: '5,200',
        status: 'Offline'
    },

]
const columns = [
    {
        Header: 'S. no.',
        accessor: 'id',
    },
    {
        Header: 'User Name',
        accessor: 'name',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Location',
        accessor: 'location',
    },
    {
        Header: 'Action',
        accessor: '',
    },
]

const Statistics = () => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [country, setCountry] = useState(countries[0]._id);
    const [selectedCountry, setSelectedCountry] = useState(filteredCountries[0]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const selectedCountry = countries.find(item => item._id === country);
        setSelectedCountry(selectedCountry);
    }, [country])

    useEffect(() => {
        handleSearch();
    }, [searchValue]);
    
    const handleSearch = () => {
        const filteredCountries = countries.filter(item => item?.name?.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredCountries(filteredCountries);
        filteredCountries.length>0 ? setCountry(filteredCountries[0]._id) : setCountry(null);
    }
    
    return (
        <StyledContainer>
            <StyledTopContainer>
                <h2>Search Country</h2>
                <Search placeholder={'Search Country'} func={setSearchValue} />
            </StyledTopContainer>
            <StyledBottomContainer>
                <StyledBottomLeftContainer>
                    <StyledTopContainer>
                        <h3>Top area of connected users</h3>
                        <StyledCountriesContainer>
                            {
                                filteredCountries?.map((item, index) => (
                                    <Country key={index} id={item?._id} name={item?.name} count={item?.count} country={country} setCountry={setCountry} flag={item?.flag} />
                                ))
                            }
                        </StyledCountriesContainer>
                    </StyledTopContainer>
                    <StyledTopContainer>
                        <h3>Other Area of connected users</h3>
                        <StyledCountriesContainer>
                            {
                                filteredCountries?.map((item, index) => (
                                    <Country key={index} id={item?._id} name={item?.name} count={item?.count} country={country} setCountry={setCountry} flag={item?.flag} />
                                ))
                            }
                        </StyledCountriesContainer>
                    </StyledTopContainer>
                </StyledBottomLeftContainer>
                {
                    selectedCountry && (
                        <StyledBottomRightContainer>
                            <CountryDetails country={selectedCountry} />
                            <StaticByGender />
                            <UserAgePreference />
                            <div className="d-flex flex-column gap-2 rounded-2 px-2 py-4" style={{backgroundColor:'#fff'}}>
                                <h3>List of Users in {selectedCountry?.name}</h3>
                                <Pagination Table={CountryUsersTable} columns={columns} itemsPerPage={10} data={AllUsers} />
                            </div>
                        </StyledBottomRightContainer>
                    )
                }
            </StyledBottomContainer>
        </StyledContainer>
    )
}

export default Statistics;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 3rem;
    background-color: #EBEBEB;
`;
const StyledTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `;
const StyledBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledBottomLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 40%;
`;
const StyledBottomRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D9D9D9;
    padding: 20px;
    border-radius: 5px;
    width: 55%;
    gap: 3rem;
`;
const StyledCountriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;