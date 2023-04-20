import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    return (
        <div className="d-flex align-items-center">
            <i className="icon" style={{position:'absolute',marginLeft:'10px',marginBottom:'5px'}} ><FiSearch /></i>
            <SearchInput className="rounded-5" placeholder="Search" />
            <button className="btn text-white rounded-5 px-4 position-absolute" style={{backgroundColor:'#040980',right:'20px'}} type="button" id="button-addon2">Search</button>
        </div>
    )
}

export default Search;

const SearchInput = styled.input`
    border: none;
    border-radius: 2px;
    padding: 4px;
    background-color: #CCD3D2;
    width: 20rem;
    padding: 7px 0 7px 35px;
    :focus {
        outline: none;
    }
`;