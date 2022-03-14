import styled from "styled-components"

export const DispayTickets = styled.div`
    main {
        ul {

            li {
                display: flex;

                &:nth-child(odd){
                    background-color: grey;
                }
            }
        }
    }

`