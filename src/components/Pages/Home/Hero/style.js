import styled from 'styled-components';
import { common } from '../../../Navbar/style';

export const Container = styled.div`
    width: 100%;
`;
export const Wrapper = styled.div`
   ${common}
    padding:60px 20px;
    line-height: 24px;
    display: flex;
`
export const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
Wrapper.Img = styled.img`
    width: 650px;
    height: 650px;
    flex: 1;
`
TextWrapper.TopText = styled.p`
    height: 24px;
    width: 636px;
    margin-bottom: 1rem;
    font-family: var(--secondary-font-family);
    font-size: 20px;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 24px;
    text-align:start;
`
TextWrapper.Title = styled.p`
    height: 109px;
    width: 400px;
    text-align:start;
    font-size: 2.5rem;
    line-height: 55px;
    margin-bottom: 1.5rem;
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--blue);
    font-family: var(--secondary-font-family);

    span{
        color: var(--red);
        font-family: var(--secondary-font-family);

    }
`
TextWrapper.Text = styled.p`
    height: 60px;
    width: 636px;
    font-size: 1rem;
    line-height: 30px;
    color: var(--gray);
    margin-bottom: 1rem;
`
export const BtnWrapper = styled.div`
    height: 40px;
    width: 456px;
    margin-top: 24px;
    font-style: 16px;
    font-weight: 400;
    line-height: 24px;
    gap:48px;
    display: flex;
    align-items: center;
`
BtnWrapper.Button = styled.button`
    height: 40px;
    width: 134px;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    font-family: var(--font-family);
    background:${({ b }) => b ? "var(--red)" : "var(--white)"};
    color:${({ b }) => b ? "var(--white)" : "var(--red)"};
    border: ${({ b }) => b ? "none" : "1px solid var(--red)"};
    transition: transform .2s ease-in-out;

    :active {
      transform: scale(0.97);
    }
    :hover{
      background:${({ b }) => b && "var(--blue)"}
    }
`
export const Div = styled.div`
    height: 43px;
    width: 516px;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 3rem;

    .wrapper{
        display: flex;
        align-items: center;
        gap:.5rem;
    }

    .text{
        width: 156px;
        height: 33px;
        color: var(--blue);
        font-weight: 600;
        font-size: 14px;
        line-height: 30px;
    }
`
Div.Wrapper = styled.div`
    padding: 5px;
    background: var(--red);
    color: var(--white);
    border-radius: 50%;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
`
Container.HeroFooter = styled.div`
    max-width: 1440px;
    width:100%;
    margin: 0 auto;
    height: 147px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`
Container.HeroFooter.FooterWrapper = styled.div`
    height: 123px;
    width: 306px;
    display: flex;
    background-color: var(--pink);
    padding: 30px 20px;
    border-radius: 10px;
    align-items: flex-end;
    cursor: pointer;
    transition: .4s;

    :hover{
        transform: translateY(-20px);
    }
`
Container.HeroFooter.FooterWrapper.Content = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
`
Container.HeroFooter.FooterWrapper.Content.Image = styled.img`
    border-radius: 50%;
`
Container.HeroFooter.FooterWrapper.Content.Text = styled.p`
    width: 80px;
    height: 19px;
    font-weight: 500;
    line-height: 19px;
    font-family: var(--font-family);
`
