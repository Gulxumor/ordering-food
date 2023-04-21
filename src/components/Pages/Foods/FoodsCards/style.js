import styled, { css } from 'styled-components';
import { common } from "../../../Navbar/style"
export const foods = css`
    border: 1px solid var(--pink);
    border-radius: 5px;
`
export const Section = styled.section`
    width: 100%;
    .foods-search-icon{
        cursor: pointer;
        font-size: 20px;
        margin:0 10px;
    }
`;

export const Wrapper = styled.div`
    ${common}
`
Wrapper.Top = styled.div`
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
Wrapper.Top.InputWrapper = styled.div`
    ${foods}
    display: flex;
    align-items: center;
`
Wrapper.Top.InputWrapper.Input = styled.input`
    padding: 7px 15px;
    width: 660px;
    font-size: 20px;
    border:none;
`
Wrapper.Top.Select = styled.select`
    ${foods}
    padding: 7px 15px;
    cursor: pointer;
    width: 318px;
    font-size: 20px;
`
Wrapper.Top.Select.Option = styled.option`
    color: var(---gray);
`
Wrapper.Bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`