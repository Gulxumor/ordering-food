import styled from "styled-components";

const Container = styled.div`
  /* button {
    opacity: 0;
  }
  :hover {
    button {
      opacity: 1;
    } 
    img {
      opacity: 0.8;
    }
  }  */

  display: flex;
  height: 293px;
  width: ${({ f }) => f ? "294px" : "306px"};
  border: 1px solid var(--pink);
  text-align: center;
  flex-direction: column;

   img:hover{
     padding: 0;
    }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  cursor: pointer;
`
const ImageWrapper = styled.div`
  margin-top: 20px;
`
ImageWrapper.Image = styled.img`
  width: 170px;
  height: 170px;
  padding: 10px;
  cursor: pointer;
  transition: .5s ease-in-out;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
`
const Title = styled.h4`
  font-weight: 500;
  margin-top: -30px;
  height: 24px;
  width: 250px;
  font-family: var(--secondary-font-family);
`
const Price = styled.h4`
  font-weight: 600;
  font-size:19px;
  height: 24px;
  color:var(--red);
`



export { Container, Wrapper, ImageWrapper, Content, Title, Price }