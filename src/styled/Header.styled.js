import styled from "styled-components"

export const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    align-items: center;
    img {
        height: 100px;
    }
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        ul {
            width: 70vw;
            justify-content: space-evenly;
            display: flex;
            list-style-type: none;
            li {
                font-size: 1.5em;
                a {
                    text-decoration: none;
                }
            }
        }

        button {
            background: ${({theme}) => theme.colors.lightBlue};
            color: white;
            border: none;
            padding: 5px 20px;
            height: fit-content;
            font-size: 1.5em;
            border-radius: 5px;
        }
    }
`