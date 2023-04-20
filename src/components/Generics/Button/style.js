import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case 'primary':
      return {
        background: "var(--red)",
        color: "var(--white)",
        padding: "7px 20px",
      }
    case 'secondary':
      return {
        color: "var(--red)",
        border: '1px solid var(--red)',
        padding: "7px 20px",
      }

    default:
      return {
        background: '#1C1C1C',
        color: '#FFFFFF'
      };
  }

}

const Container = styled.button`
  height: 40px;
  width: 134px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  font-family: var(--font-family);
  ${getType}
  transition: transform .2s ease-in-out;
  :active {
    transform: scale(0.97);
  }
`

export { Container }