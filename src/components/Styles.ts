import styled from "styled-components";

export const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    flex-direction: column;
    border: 2px black solid;
    border-radius: 20px;
    font-family: 'Roboto';
    font-weight: bold;
    gap: 50px;
`

export const ResizeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    gap: 50px;
`

export const ImageDiv = styled.img`
    width: 150px;
    height: 150px;
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