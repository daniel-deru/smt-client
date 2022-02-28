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
        width: 100%;
        ul {
            width: 100%;
            justify-content: space-evenly;
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;
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