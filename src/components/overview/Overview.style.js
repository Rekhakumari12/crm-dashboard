import styled from "styled-components";
export const OverviewWrapper = styled.div`
  width: 100vw;
  padding: 4rem 9rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  .box {
    background-color: #00459e;
    border-radius: 5px;
    .points {
      color: #fbe600;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .card_text {
    height: fit-content;
    z-index: 5;
    margin-left: 10rem;
    padding-top: 1rem;
  }
  .leftside {
    position: relative;
  }
  .card_header {
    display: flex;
    border-bottom: 2px solid var(--light-gray);
    justify-content: space-between;
    padding-bottom: 15px;
    align-items:center ;
  }
  .inner_card_active {
    border: 2px solid var(--dark-gray);
    border-radius: 3px;
    color: white;
    background-color: var(--dark-gray);
    padding: 1rem;
    margin-bottom: 1rem;
    svg {
      color: var(--medium-gray);
    }
  }
  .span {
    color: var(--medium-gray);
  }
  .inner_card {
    border: 2px solid var(--light-gray);
    border-radius: 3px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;
export const Dot = styled.div`
  background-color: ${(props) =>
    props.type === "online" ? "var(--blue)" : "#FE3678"};
  width: 6px;
  height: 6px;
  margin-right: 4px;
  border-radius: 50%;
`;
