import styled from "styled-components"

export const SignUpPage = styled.div`
    background-color: ${({theme}) => theme.colors.opacity("green", "10")};
    height: 100vh;
    box-sizing: border-box;
    background-image: url("./images/background.jpg");
    & * {
        font-size: 1.1em;
        font-family: sans-serif;
    }

        img {
            display: block;
            margin: auto;
        }

        section {
            text-align: center;
            h1 {
                font-size: 4em;
                margin: 0;
                color: ${({theme}) => theme.colors.green};
                margin-top: -3rem;
            }

            p {
                color: white;
            }

        }

        form {
            width: 30vw;
            margin: auto;
            box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.opacity("darkBlue", "30")};
            padding: 20px;
            border-radius: 10px;
            background-color: transparent;

            div {
                width: 100%;
                margin: 20px auto;

                label {
                    display: block;
                    margin-bottom: 10px;
                    color: ${({theme}) => theme.colors.darkBlue};
                    color: white;
                }

                .field {
                    width: calc(100% - 20px);
                    border-radius: 5px;
                    border: 1px solid  ${({theme}) => theme.colors.green};
                    padding: 5px 10px;
                    background-color: transparent;
                    outline: none;
                    color: white;
                    &:focus {
                        background-color: transparent;
                        border: 1px solid ${({ theme }) => theme.colors.lightBlue};
                    }
                }

                button {
                    display: block;
                    margin: auto;
                    padding: 5px 20px;
                    border-radius: 5px;
                    border: none;
                    background-color: ${({ theme }) => theme.colors.lightBlue};
                
                    color: white;
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: 0.2s linear;

                    &:hover {
                        background-color: ${({theme}) => theme.colors.orange};
                    }

                    &:active {
                        background-color: white;
                        background-color: transparent;
                        color: ${({theme}) => theme.colors.lightBlue};
                        color: white;
                        border: 2px solid ${({theme}) => theme.colors.orange};
                        transition: 0s;
                    }
                }
            }
        }

    .error-message {
        color: red;
        font-size: 0.75em;
    }

    .error {
        width: calc(100% - 20px);
        border-radius: 5px;
        border: 1px solid red;
        padding: 5px 10px;
        background-color: transparent;
        outline: none;
        color: white;
        &:focus {
            background-color: transparent;
            border: 1px solid ${({ theme }) => theme.colors.lightBlue};
        }
        
    }
    


`
