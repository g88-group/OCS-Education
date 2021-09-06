import styled from "styled-components";

const ContainerWrapper = styled.div`
    display: flex;
    width: 100%;
    .sidebar {
  min-width: 250px;
  max-width: 250px;
  background-color: #11151E;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  &.sidebar_mini {
    min-width: 80px;
    max-width: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
  }
.sidebar_header {
      max-height: 70px;
      min-height: 70px;
      background-color: #4C84FF;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
.sidebar_header_name {
  color: white;
  font-weight: 500;
}  
}
.sidebar_list {
  .menu {
    .sidebar_link {
      color: #A4ACB7;
      display: block;
      padding:17px 15px;
      font-size: 17px;
      font-weight: 600;
      text-transform: uppercase;
      &:hover {
        color: white;
      }
      &.active {
        color: white;
        border-right: 4px solid #4C84FF;
        .sidebar_icon {
          color: #4C84FF;
        }
      }
    }
  }
}
.sidebar_footer {
  padding: 0 30px 30px 30px;
  color: white;
  p{
    font-size: 12px;
  }
}
}

    .header {
    width: 100%;
    height: 80px;
    .header_btn {
        width: 70px;
        height: 70px;
        border-right: 1px solid rgba(0 0 0 / 0.2);
        cursor: pointer;
    }
}
@media screen and (max-width: 768px) {
    .header {
        h4{
            font-size: 15px;
        }
    }
}


.rightside {
    flex: 1;
}
`;
export default ContainerWrapper;