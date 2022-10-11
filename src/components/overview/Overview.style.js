import styled from "styled-components";
export const OverviewWrapper = styled.div`
  width: 100vw;
  padding:4rem 9rem ;
  display: flex;
    flex-direction: column;
    row-gap: 4rem;
  .box{
    background-color:#00459E ;
    border-radius: 5px;
    .points{
      color: #FBE600;
      display:flex ;
      flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  }
  .card_text{
    height: fit-content;
    z-index: 5;
    margin-left: 10rem;
    padding-top: 1rem;
  }
`
