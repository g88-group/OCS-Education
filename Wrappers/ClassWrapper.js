import styled from "styled-components";

const ClassWrapper = styled.div`
.class {
    padding: 50px 20px;
    .class_header {
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 0 5px 4px rgba(0 0 0 / 0.1);
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
    .class_content {
        border-radius: 8px;
        min-width: 600px;
        background-color: white;
        box-shadow: 0 0 5px 4px rgb(0 0 0 / 0.1);
    }
    .classModal {
        position: fixed;
        top: -150%;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0 0 0 / 0.4);
        z-index: 700;
        .class_modal_content {
            background-color: white;
            border-radius: 10px;
        }
    }
}

`;
export default ClassWrapper;