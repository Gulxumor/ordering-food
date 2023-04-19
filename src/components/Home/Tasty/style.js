import styled from "styled-components";
import { common } from "../../Navbar/style";

export const Container = styled.div`
    width: 100%;
`
export const Wrapper = styled.div`
    ${common}
    height: 756px;
    display: flex;
    flex: 1;
`
export const Image = styled.img`
    width: 636px;
    height: 636px;
    flex: 1;

`
Wrapper.Wrapper = styled.div`
    flex: 1;
    margin-top: 20px;
`
Wrapper.Wrapper.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    .icon{
        background-color: var(--red);
        color: var(--white);
        border-radius: 50%;
    }
`
export const Title = styled.h1`
    height: 40px;
    width: 546px;
    font-size: 33px;
    font-family: var(--secondary-font-family);
    font-weight: 600;
    line-height: 40px;
    color:var(--red);
    margin: 25px 0;

    span{
        font-family: var(--secondary-font-family);
        color: var(--black)
    }
`
export const Text = styled.h3`
    height: 23px;
    width: 630px;
    font-weight: 600;
    line-height: 24px;
    display: flex;
    gap: 10px;
`
export const Desc = styled.h3`
    font-weight: 400;
    height: ${({ d }) => d ? "83px" : "47px"}; 
    width: ${({ d }) => d ? "610px" : "660px"}; 
    line-height: ${({ d }) => d ? "28px" : "24px"};
    color: var(--gray);
    margin-bottom: 15px;
`
