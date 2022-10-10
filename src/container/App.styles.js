import styled from "styled-components"
export const HeaderWrapper = styled.nav`
    &, .user_settings, .profile_menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
`

export const MenuWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    li{
      display: flex;
      align-items: center;
    }
`