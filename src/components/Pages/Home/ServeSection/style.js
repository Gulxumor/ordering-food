import styled from "styled-components";
import { common } from "../../../Navbar/style";

export const Container = styled.div`
    width: 100%;
    `
export const Wrapper = styled.div`
    ${common}
    text-align: center;
    margin-top: 100px;
`
export const Top = styled.div`
   display: flex;
   align-items: center;
   flex-direction:column;
   gap: 24px;
`
Top.TopText = styled.p`
    height: 24px;
    width: 1296px;
    color: var(--red);
    margin-top: 1.5rem;
    font-family:var(--secondary-font-family);
    font-size: 1.25rem;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
`
Top.Title = styled.h1`
    height: 80px;
    width: 400px;
    line-height: 40px;
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--blue);
    font-family:var(--secondary-font-family);

    span{
        color:var(--red);
        font-family:var(--secondary-font-family);

    }
`
Top.Description = styled.p`
    height: 47px;
    width: ${({ w }) => w ? "550px" : "319px"};
    font-weight: 400;
    line-height: 24px;
    margin-bottom: ${({ w }) => w ? "24px" : ""};
`
// ! eng kattasi
export const ImagesWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;

`
// ! har biri uchun
ImagesWrapper.Wrapper = styled.div`
    height: 217px;
    width: 415px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
`
// ! rasm
ImagesWrapper.Wrapper.Img = styled.img`
    height: 65px;
    width: 80px;
`
ImagesWrapper.Wrapper.Title = styled.h3`
    height: 24px;
    width: 319px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    font-family: var(--secondary-font-family);
`
























{
    /* <>
    <ImagesWrapper.Wrapper>
      <ImagesWrapper.Wrapper.Content>
        <ImagesWrapper.Wrapper.Content.Img src={deliver} />
        <ImagesWrapper.Wrapper.Content.Text>
          Quick Delivery
        </ImagesWrapper.Wrapper.Content.Text>
        <Wrapper.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
          doloremque.
        </Wrapper.Description>
      </ImagesWrapper.Wrapper.Content>
    </ImagesWrapper.Wrapper>
  </>; */
}
