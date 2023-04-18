import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color:var(--pink);
    height:352px ;

    .nav_link{
    text-decoration: none;
    font-weight: 500;
    font-size: 22px;
}
`
export const Wrapper = styled.div`
    max-width:1440px;
    height: 80px;
    width: 100%;
    margin: 20px auto;
    border:2px solid black;

    @media(max-width:1300px) {}
    @media(max-width:1200px) {}
    @media(max-width:1050px) {}
    @media(max-width:767px) {}
    @media(max-width:428px) {}
`
export const Icons = styled.div``
export const NavItems = styled.ul``
export const NavItem = styled.li`
    list-style-type: none;
    display: flex;
    gap: 50px;
`

export const Text = styled.p`
    height: 33px;
    font-size: 22px;
    width: 66px;
    text-decoration-style: solid;

`