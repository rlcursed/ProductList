import styled from "styled-components";

export const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(30, 144, 255);
    border: 1px rgba(30, 144, 255) solid;
    width: 370px;
    height: 370px;
    flex-direction: column;
    border-radius: 10px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 12px;
    overflow: hidden;
    gap: 20px;
`

export const ResizeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    gap: 50px;
`

export const ImageDiv = styled.img`
    width: 100px;
    height: 100px;
`

export const ResizeTwoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 350px;
    gap: 20px;
    text-align: center;
`

export const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 100vh;
    width: 100%;
`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: bold;
`