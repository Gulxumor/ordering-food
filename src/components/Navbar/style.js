import styled, { css } from "styled-components";
export const common = css`
    max-width:1440px;
    width: 100%;
    margin: 0 auto;
`
export const Container = styled.div`
    width: 100%;
    height: 113px;
    position: sticky;
    top:0;
    z-index: 999;
    background-color: var(--white);
    box-shadow:var(--shadow);

    .nav_link{
    text-decoration: none;
    font-size: 22px;
    height: 99px;
    line-height: 100px;
    font-size: 22px;
    width: 44px;
    transition: .3s;
    font-size: 1rem;
    color: var(--blue);
    font-family: var(--secondary-font-family);
    font-size: 20px;
}
`
export const Wrapper = styled.div`
    ${common}
    height: 113px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
`
export const LogoWrapper = styled.div`
    height: 79px;
    width: 127px;
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap:5px;
`
export const Logo = styled.img`
    width: 50px;
    height: 50px;
`
export const Title = styled.p`
    font-weight: 600;
    color: #212245;
    margin-top: -40px;
    font-family: var(--secondary-font-family);
    font-size: 16px;
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
`
export const Icons = styled.div`
    height: 65px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:24px;
    font-size:20px;
    cursor: pointer;
`
export const Select = styled.select`
    border: none;
    width: 50px;
    font-size: 1rem; 
`
export const NavItems = styled.ul`
   display: flex;
   gap:5rem;
`
export const NavItem = styled.li`
    list-style-type: none;
    display: flex;
    gap: 100px;
`
export const Text = styled.p`
    height: 99px;
    line-height: 100px;
    font-size: 22px;
    width: 44px;
    text-decoration-style: solid;
    transition: .3s;
    font-weight: 600;
    font-size: 1rem;
    color:var(--blue);
`

export const DrawerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

     .main{
        display: flex;
        gap: 0.5rem;
    }

    .divcha{
        display: flex;
        width: 50%;
        gap: 30px;
    }
    
    .x{
        width: 40%;
        display: flex;
        justify-content: space-between;
    }

    .subtotal{
        width: 100%;
        background-color: #df2020;
        color: white;
    }

`
DrawerWrapper.Img = styled.img`
    width: 35px;
    height: 35px;
`

// @media(max - width: 1300px) { }
// @media(max - width: 1200px) { }
// @media(max - width: 1050px) { }
// @media(max - width: 767px) { }
// @media(max - width: 428px) { }