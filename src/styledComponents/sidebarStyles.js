import styled from 'styled-components';



export const SidebarWrapper = styled.div`
  width: ${(props) => (props.isOpen ? '20%' : '20%')};
  min-height: 100vh;
  background-color: #FFFFFF;
  color: #7e8086;
  transition: width 0.1s ease;
  overflow: hidden;
  @media (max-width: 1050px) {
    display: none;
  }
  position: fixed;
  top: 0;
  
`;

export const MainSideBarWrapper = styled.div`
width: 20%
`

export const SidebarHeader = styled.div`
  padding: 20px;
  text-align: center;

`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  padding: 13px 10px ;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #F4F2F1;
    color: #FC7E06
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const ChildMenuList = styled(MenuList)`
  margin-left: 20px;
  overflow: hidden;
  border-left : 1px solid #7e8086;
  
`;

export const ToggleIcon = styled.span`
  margin-left: 25px;
`;

export const HamburgerButton = styled.div`
  display: none;
  cursor: pointer;
  width: 80px;
  height: 80px;
  background-color: #34495e;
`;


