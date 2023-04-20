import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../componets/Header";
import styled from "styled-components";

const Layout = () => {
    return (
        <div className="d-flex flex-column">
            <Header />
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;