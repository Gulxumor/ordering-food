import styled from "styled-components";
import { common } from "../../../Navbar/style"
// import { ReactComponent as image } from "../../../assets/images/Bburger.jpg";

export const Container = styled.div`
    width:100%;
`
export const Wrapper = styled.div`
    ${common}
    margin: 50px auto;
`
Wrapper.Title = styled.h1`
    height: 40px;
    font-family: var(--secondary-font-family);
    color: var(--blue);
    text-align: center;
`
Wrapper.Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-top: 50px;
`