import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 60px 0;

table, th, td {
  border: 1px solid black;
  border-collapse: collapse; 
}
table{
    width: 60%;
    text-align: center;
}
img{
  width: 100%;
  padding: 4px;
}
.img{
    width: 63px;
}
`;

