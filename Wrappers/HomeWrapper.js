import styled from "styled-components";

const HomeWrapper = styled.div`
.home{
    padding: 50px 20px;
    .home_header {
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 0 5px 4px rgba(0 0 0 / 0.1);
    }
    .home_content{
        border-radius: 8px;
        min-width: 600px;
        background-color: white;
        box-shadow: 0 0 5px 4px rgb(0 0 0 / 0.1);
    }
    .home_year_add {
        position: fixed;
        background-color: rgba(0 0 0 / 0.5);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 600;
    }
}

.item_box {
    .item_box_child {
        right: 50%;
        transform: translateX(50%);
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0 0 10px rgba(0 0 0 / 0.1);
        border-radius: 10px;
        display: none;
        z-index: 500;
    }
}
`;
export default HomeWrapper;