import styled from 'styled-components';
import { common } from '../../../Navbar/style';

export const Container = styled.div`
    width: 100%;
    .mainSliderWrapper{
        margin-top: 50px;
        width: 636px;
    }
    .text{
        height: 90px;
        line-height: 30px;
        width: 636px;
    }
`;
export const Wrapper = styled.div`
   ${common}
   display: flex;
   flex:1;
`
Wrapper.Top = styled.div`
    display: flex;
    flex:1;
    flex-direction:column;
`
Wrapper.Bottom = styled.img`
    display: flex;
    align-items: center;
    justify-content:center;
    flex:1;
    width: 636px;
`
export const TextWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction:column;
    gap:25px;
    `
TextWrapper.TopText = styled.p`
    font-weight: 500;
    font-family:var(--secondary-font-family);
    color:var(--red);
    font-size:20px;
    height: 24px;
    margin-top: 70px;
`
TextWrapper.Title = styled.p`    
    font-family:var(--secondary-font-family);
    font-size: 33px;
    font-weight: 600;
    height: 40px;

    span{
        color: var(--red);
        font-family: var(--secondary-font-family);

    }
`
TextWrapper.Desc = styled.p`
    font-weight: 400;
    line-height: 30px;
    width: 636px;
    color:var(--gray);
`
export const ImageWrapper = styled.div`
    display: flex;
    gap:10px;
    align-items: center;
    margin-top: 20px;
`
Wrapper.Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 5px;
`
TextWrapper.Text = styled.p``