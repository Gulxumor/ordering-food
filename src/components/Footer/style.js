import styled from "styled-components";
import { common } from "../Navbar/style";

export const Container = styled.div`
    width: 100%;
    background-color:var(--pink);
    height:352px ;
`
export const Wrapper = styled.div`
    ${common}
    padding:50px;
    margin: 20px auto;

    @media(max-width:1300px) {}
    @media(max-width:1200px) {}
    @media(max-width:1050px) {}
    @media(max-width:767px) {}
    @media(max-width:428px) {}
`
export const Column = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const LogoWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;

    /* gap:5px; */
`
export const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius:50%;
`
export const Title = styled.p`
    width: 306px;
    height: 21px;
    font-size: 1.1rem;
    color: var(--blue);
    font-weight: ${({ fw }) => fw ? "500" : "600"};
    font-family: var(--secondary-font-family) !important;
    margin-block-end: 1.67em; 
`
export const Toptext = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: var(--black);
    line-height: 24px;
    width:auto;
    height:auto;
    margin:${({ mt }) => mt ? "16px 0 8px 0" : ""} ;
`
export const Text = styled.p`
    font-size:14px;
    font-weight: 400;
    color:var(--black);
    height: 55px;
    line-height: 28px;
    width: ${({ w }) => w ? "306px" : "290px"};
`
Wrapper.Wrapper = styled.div``
export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(33, 34, 69);
    border-image: initial;
    border-radius: 5px;
    font-weight: 400;
    width: 261px;
    height: 50px;


`
export const Input = styled.input`
    font-weight: 400;
    height: 23px;
    line-height: 24;
    border:none;
    outline:none;
    background-color:transparent;
    padding:0 10px;

`
export const InputButton = styled.button`
    background: rgb(223, 32, 32);
    padding: 5px 30px;
    border-radius: 5px;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 37px;
    width: 76px;

    .plane{
        color:var(--white);
    }

    :active{
        transform:scale(.95) ;
    }
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    padding:0 55px;
`
export const Reserve = styled.p`
    font-size: 12px;
    font-weight: 400;
    color:${({ w }) => w ? "var(--black)" :"var(--red)"};
    margin-right:${({ w }) => w ? "10px" :""};
    line-height: 19px;
    height: 19px;
    display: flex;
    align-items: center;
`
export const Follow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Icons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap:24px;
`
export const Div = styled.div`
    padding: 5px;
    background: var(--red);
    border-radius: 50%;
    width: 25px;
    height: 25px;
`
export const A = styled.a`
    text-decoration:none;
    color: var(--white);
`