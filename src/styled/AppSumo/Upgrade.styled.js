import styled from "styled-components"
import background from "../images/background.jpg"

export const UpgradePage = styled.div`
    background-image: url(${background});
    height: 100vh;
    text-align: center;
    font-size: 1.5em;
    header {
        padding-top: 5rem;
    }

    main {
        form {
            color: white;
            margin-top: 5rem;
            width: 30vw;
            margin:5rem auto ;
            div {
                label {
                    display: block;
                    text-align: left;
                    margin: 10px 0px;
                }
                input {
                    background-color: transparent;
                    font-size: 1em;
                    border: 2px solid ${({theme}) => theme.colors.lightBlue};
                    border-radius: 5px;
                    width: 100%;
                    outline: none;
                    color: white;
                    padding: 5px;
                    &:focus {
                        border: 2px solid ${({theme}) => theme.colors.green};
                    }
                }

                button {
                    font-size: 1em;
                    background-color: ${({theme}) => theme.colors.lightBlue};
                    border: 2px solid transparent;
                    margin: 2rem auto;
                    padding: 5px 20px;
                    border-radius: 5px;
                    color: white;
                    cursor: pointer;
                    transition: .3s ease-in-out;

                    &:hover {
                        background-color: ${({theme}) => theme.colors.green};
                    }

                    &:active {
                        background-color: transparent;
                        border: 2px solid ${({theme}) => theme.colors.green};
                        transition: none;
                    }

                }
                
            }
        }
    }

`