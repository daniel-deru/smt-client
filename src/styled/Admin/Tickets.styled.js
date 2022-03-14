import styled from "styled-components"

export const DispayTickets = styled.div`
    font-size: 1.5em;
    main {
        width: 70%;
        margin: auto;
        ul {
            padding: 0;
            li {
                display: grid;
                padding: 10px;
                grid-template-columns: 1fr 3fr 3fr 6fr;
                border: 2px solid transparent;
                cursor: pointer;
                &:nth-child(odd){
                    background-color: ${({theme}) => theme.colors.green};
                }

                &:hover {
                    border: 2px solid ${({theme}) => theme.colors.lightBlue};
                }
            }
        }

        .headers {
            display: grid;
            grid-template-columns: 1fr 3fr 3fr 6fr;
            padding: 10px;
            background-color: ${({theme}) => theme.colors.orange};
        }
    }

`