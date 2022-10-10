import styled from "styled-components"
export const HeaderWrapper = styled.nav`
    &, .user_settings, .profile_menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .profile_image_dropdown{
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .profile_menu{
      cursor:pointer;
    }
    padding:1rem 3rem;
    border-bottom:3px solid var(--light-gray);

  .profile_image{
      background: #FF3669;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      padding: 0.7rem;
      display: grid;
      place-content: center;
      color:white;
      border:2px solid var(--medium-gray);
      margin-right: 10px;   
  }

`

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    li{
      display: flex;
      align-items: center;
      cursor:pointer;
    }
    padding:1rem;
`

export const OverviewWrapper = styled.div`
`