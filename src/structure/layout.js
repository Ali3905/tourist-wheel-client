import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sideBar';
import NavBar from '../components/navBar';
import Heading from '../components/heading';
import Popup from '../components/popup';
import CustomDrawer from '../components/drawer'
// import { useSelector } from 'react-redux';
const FlexCard = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
width : 80%;
background-color : #F6F7FC;
min-height : 100vh
`;


function Layout() {

  return (
    <FlexCard>
      <Popup />
      <SideBar />
      <ContentContainer>
        <NavBar />
        <Heading />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
        <CustomDrawer />
      </ContentContainer>
    </FlexCard>
  );
}

export default Layout;
