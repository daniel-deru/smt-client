import styled from "styled-components"

export const SupportPage = styled.div`
    font-size: 1.3em;
    text-align: center;
    h1 {
        margin: 0px;
    }
    
    form {
        width: 60%;
        margin: auto;

        .wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            div {
                flex-direction: column;
                margin: 0px;
                width: 49%;
            }
        }
        div {
            display: flex;
            flex-direction: column;
            margin: 1rem 0px;
            
            label {
                text-align: left;
                margin-bottom: 10px;
            }
            input {
                font-size: 0.8em;
                border-radius: 5px;
                border: 1px solid black;
                padding: 5px;
            }

            textarea {
                padding: 5px;
                resize: none;
                font-size: 0.8em;
                border-radius: 5px;
                border: 1px solid black;
            }

            button {
                font-size: 1em;
                border-radius: 5px;
                background-color: ${({theme}) => theme.colors.green};
                border: none;
                padding: 5px 0px;
                cursor: pointer;
            }

        }
    }

`