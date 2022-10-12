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
    .list{
      cursor:pointer;
    }
    padding: 1rem 4rem;

`

export const ButtonWrapper = styled.button`
  border: ${props => props.type === 'solid' ? '1px solid var(--blue)' : '1px solid var(--medium-gray)'};
  background-color:${props => props.type === 'solid' && 'var(--blue)'} ;
  color: ${props => props.type === 'solid' && 'white'};
  padding: 5px 23px;
  font-weight:500;
  border-radius: 3px;
`

export const TextWithIconWrapper = styled.div`
display:flex;
gap: 10px;
bottom: 14.7rem;
  svg{
    border:1px solid var(--medium-gray);
    border-radius: 50%;
    padding: 2px;
  }

`