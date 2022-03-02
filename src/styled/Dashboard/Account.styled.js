import styled from "styled-components"


export const AccountPage = styled.div`
    section {
        display: flex;
        justify-content: space-around;
        font-weight: 700;
        span {
            font-weight: 500;
        }
    }
    h2 {
        text-align: center;
    }

    form {
        width: 60%;
        margin: auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        div {
            width: fit-content;
            margin: auto;
            label {
                display: block;
                font-size: 1.2em;
                margin-bottom: 10px;
            }

            input {
                font-size: 1.5em;
                border-radius: 5px;
                border: 1px solid black;
            }
        }
    }

    .submit {
        font-size: 1.5em;
        padding: 5px 40px;
        border-radius: 5px;
        border: none;
        display: block;
        margin: 2rem auto;
        background-color: ${({theme}) => theme.colors.green};
        color: black;
        cursor: pointer;

    }

`