import React, { useState  , useEffect } from 'react';
import * as Styled from '../styledComponents/sidebarStyles';
import { SideMenuConfig } from "../config/sideBarConfig";
import { SubpageRoutingConfig } from "../config/subpageRoutingConfig";
import { RoutingConfig } from "../config/routingConfig";
import styled from 'styled-components';
import "../styles/animation.css"
import TouristWheelLogo from "../assets/TouristWheelLogo.jpeg"
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OverViewIcon } from '../assets/overview.svg'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTitle } from '../redux/headingSlice';
import { setSelectedParentIndex } from '../redux/sidebarSlice';

const AdminSidebar = () => {
  const [openItems, setOpenItems] = useState([]);
  const dispatch = useDispatch();
  const myindex =  useSelector((state) => state.sidebar.selectedParentIndex);
  const navigate = useNavigate()
  const location = useLocation();

  const toggleSidebar = () => {
    setOpenItems([]);
  };

useEffect(() => {
  const findSelectedIndex = (config, path) => {
      for (const key in config) {
          const route = config[key];
          if (route.path === path) {
              dispatch(setSelectedParentIndex(parseInt(key)));
              return true;
          } else if (route.child) {
              if (findSelectedIndex(route.child, path)) {
                  return true;
              }
          }
      }
      return false;
  };

const allRoutes = [...RoutingConfig, ...SubpageRoutingConfig];
const matchedRoute = allRoutes.find(route => route.path === location.pathname);
dispatch(setSelectedTitle(matchedRoute?.name));

  findSelectedIndex(SideMenuConfig, location.pathname);
}, [location.pathname, dispatch , myindex,]);


  const StyledComponentIcon = styled(OverViewIcon)`
    height: ${({ height }) => height || "20px"};

    & path {
      fill: ${({ color, isActive }) => (isActive ? "green" : color || "white")};
    }

    &:hover path {
      fill: ${({ hoverColor }) => hoverColor || "blue"};
    }
  `;

  const isItemActive = (path, childItems, key) => {
    if (location.pathname === path) {
      return true;
    }

    if (childItems && typeof childItems === 'object') {
      const childKeys = Object.keys(childItems);
      if (childKeys.some((childKey) => location.pathname === childItems[childKey].path)) {
        return true;
      }
    }

    const matchedRoute = SubpageRoutingConfig.find((route) => route.path === location.pathname);
    if (matchedRoute && matchedRoute.parentPath === path) {
      dispatch(setSelectedTitle(matchedRoute.name));
      return false
    }

    // If none of the conditions are met, return false
    return false;
  };

  const toggleChildMenu = (key, title, childItems) => {
    const updatedOpenItems = [...openItems];
    const isOpen = updatedOpenItems.includes(key);

    if (isOpen) {
      // Close the child menu
      updatedOpenItems.splice(updatedOpenItems.indexOf(key), 1);
    } else {
      // Open the child menu
      updatedOpenItems.push(key);
    }

    if (!childItems) {
      dispatch(setSelectedTitle(title));
    }

    setOpenItems(updatedOpenItems);
  };

  return (
    <Styled.MainSideBarWrapper>
      <Styled.SidebarWrapper isOpen={openItems.length > 0}>
        <Styled.SidebarHeader>
          <img src={TouristWheelLogo} alt="" width={150} height={100} />
        </Styled.SidebarHeader>
        <div style={{ margin: "0px 15px" }}>
          <Styled.MenuList>
            {Object.entries(SideMenuConfig).map(([key, item]) => (
              <div key={key}>
                <Styled.MenuItem
                  onClick={() => {
                    if (item.child) {
                      toggleChildMenu(key, item.title, item.child);
                    } else {
                      navigate(item.path);
                      // dispatch(setSelectedParentIndex(key))
                      dispatch(setSelectedTitle(item.title));
                    }
                  }}
                >
                  <div>
                    <StyledComponentIcon
                      isActive={isItemActive(item.path, item.child)}
                    />
                  </div>
                  <div className={isItemActive(item.path, item.child) ? 'active' : ''}>
                    {item.title}
                    {item.child && (
                      <Styled.ToggleIcon>
                        {item.child ? (openItems.includes(key) ? <>&#10506;</> : <>&#10507;</>) : null}
                      </Styled.ToggleIcon>
                    )}
                  </div>
                </Styled.MenuItem>

                {item.child && (
                  <div key={key} className={`wrapper ${openItems.includes(key) ? 'open' : ''}`}>
                    <div className='expandable'>
                      <Styled.ChildMenuList>
                        {Object.entries(item.child).map(([childKey, childItem]) => (
                          <Styled.MenuItem
                            key={childKey}
                            onClick={() => {
                              // dispatch(setSelectedParentIndex(childKey))
                              navigate(childItem.path);
                              dispatch(setSelectedTitle(childItem.title));
                            }}
                            className={isItemActive(childItem.path) ? 'active-child' : ''}
                          >
                            {childItem.title}
                          </Styled.MenuItem>
                        ))}
                      </Styled.ChildMenuList>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Styled.MenuList>
        </div>
        <Styled.HamburgerButton onClick={toggleSidebar}>☰</Styled.HamburgerButton>
      </Styled.SidebarWrapper>
    </Styled.MainSideBarWrapper>
  );
};

export default AdminSidebar;
