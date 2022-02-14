import styled from "styled-components"

export const AppSumoPage = styled.main`
    width: 50vw;
    margin: auto;
    font-size: 1.1em;
    font-family: sans-serif;
    background-color: #05145610;
    border-radius: 10px;
    padding-bottom: 1rem;

    header {
        width: fit-content;
        margin: auto;
        margin-top: 5vh;
        padding: 1rem;

        
        img {
            width: 300px;
        }

        #smt-logo {
            width: 400px;
        }

        .separator {
            font-size: 3em;
            margin: 0px 20px;
        }
    }

    section {
        width: 50%;
        padding: 1rem;
        margin: auto;
        color: #051456;
    }

    form {
        width: 50%;
        margin: auto;
        box-shadow: 0px 0px 4px 1px #20202050;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 10px;
        background-color: white;

        div {
            width: 90%;
            margin: auto;
            padding: 1rem;

            label {
                width: 95%;
                display: block;
                margin-bottom: 5px;
                margin-left: 10px;
                color: #051456;
            }

            input {
                display: block;
                width: 95%;
                font-size: 1.1em;
                padding: 5px;
                border-radius: 5px;
                border: none;
                margin: auto;
                background-color: lightgrey;

                &:focus {
                    outline: #9ecd16;
                    background-color: #9ecd1630;
                }
            }

            button {
                background-color: #9ecd16;
                font-size: 1.1em;
                padding: 0.5rem 4rem;
                border-radius: 5px;
                border: none;
                display: block;
                margin: auto;
                cursor: pointer;
                transition: 0.2s linear;
                width: 95%;

                &:hover {
                    background-color: #051456;
                    color: white;
                }
            }
        }


    }
`
