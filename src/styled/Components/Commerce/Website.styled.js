import styled from "styled-components"

export const WebsiteItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    &:nth-child(odd){
        background-color: #ddd;
    }

    div {
        width: 100%;
    }

    div:last-child {
        text-align: right;
    }

    .delete {
        color: red;
        cursor: pointer;
        font-size: 1.5em;
    }


`