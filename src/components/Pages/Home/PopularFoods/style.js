import styled from "styled-components";
import { common } from "../../../Navbar/style"

export const Container = styled.div`
    width:100%;
`
export const Wrapper = styled.div`
    ${common}
    border: 2px solid black;
`
Wrapper.Foods = styled.h1`
    height: 40px;
    font-size: 33px;
    font-family: var(--secondary-font-family);
    font-weight: 600;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
`
export const Segment = styled.div`
    height: 77px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--red);

    .ant-segmented-group{
        gap:30px;
    }
    .ant-segmented{
        background-color:transparent;
    }
    .ant-segmented-item-label{
        color:var(--white);
    }
    .ant-segmented-item-selected .ant-segmented-item-label{
        color:var(--red);
    }
`