import styled from "styled-components"

export const NavComponent = styled.nav`
    flex: 1;
    border-right: 2px solid ${({theme}) => theme.colors.green};
    section {
        img {
            height: 100px;
            aspect-ratio: 1/1;
            border: 1px solid grey;
            border-radius: 50%;
            margin: 2rem auto 1rem auto ;
            display: block;
        }
        h4 {
            text-align: center;
            font-size: 1.5em;
            margin: 0;
            margin-bottom: 2rem;
        }
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: fit-content;
        margin: auto;
        li {
            font-size: 1.5em;
            margin: 10px auto;
            a {
                text-decoration: none;
            }
        }
    }

`