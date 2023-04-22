import styled from 'styled-components';
import { common } from "../../../../Navbar/style"
export const Container = styled.section`
    width:100%;
`;
export const Wrapper = styled.div`
    ${common};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 60px 0;
`
Wrapper.Wrapper = styled.div`
    width: 273px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    background-color: var(--pink);
    padding: 20px;
    margin: 0 91px 48px;
`
export const Input = styled.input`
    width: 100%;
    background: transparent;
    padding: 7px 20px;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(33,34,69,.2980392156862745);
`
export const Button = styled.button`
    border: none;
    padding: 7px 25px;
    background: var(--red);
    color: var(--white);
    border-radius: 5px;
    font-size: .9rem;
    cursor: pointer;

    :active{
        transform: scale(.97);
    }
`
export const Paragraph = styled.p`
    font-size: ${({ r }) => r ? "" : "14px"};
    :hover{
        color:var(--secondary-blue);
    }
`