import styled from 'styled-components';
import { common } from "../../../../Navbar/style"
import bg from "../../../../../assets/images/foodsBg.jpg"

export const Section = styled.section`
    width: 100%;
    background: linear-gradient(rgba(33,34,69,.6980392156862745),rgba(33,34,69,.6980392156862745)),url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    padding: 80px 0;
`;

export const Wrapper = styled.div`
    ${common}
`

