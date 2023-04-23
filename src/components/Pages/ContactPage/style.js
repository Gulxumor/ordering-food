import styled from 'styled-components';
import { common } from '../../Navbar/style';

export const Section = styled.section`
    width:100%;
`;

export const Wrapper = styled.div`
    ${common}
    display: flex;
    justify-content: flex-start;
    gap:15px;
    padding: 0 90px;
    flex:1;
`
Wrapper.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
`
export const Img = styled.img`
    flex: 1;
    width: 300px;
    height: 500px;
`
export const InputWrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`