import React, {FC, memo, useState} from 'react';

import styled from 'styled-components';

import { DEFAULT_LENGTH } from './constants/DEFAULT_LENGTH';

const DescContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    gap: 10px;
    font-weight: bold;
`

const DescButton = styled.button`
    width: 100px;
    height: 22px;
    cursor: pointer;
    border: none;
    font-size: 10px;
    border-radius: 10px;
    background-color: rgba(30, 144, 255);
    color: white;
    font-weight: bold;
    font-size: 13px;
`

interface DescriptionProps {
    text: string,
    maxLength? : number,
}

const Description: FC<DescriptionProps> = ({text, maxLength = DEFAULT_LENGTH}) => {
    const [show, setShow] = useState<boolean>(true);

    const Slicer = text.substring(0, maxLength)

    const handleShow = () => {
        setShow(!show);
    }

    return(
        <DescContainer>
            {   
                text.length > maxLength ? 
                
                <div>
                    {show ? Slicer + "..." : text}
                    
                </div>

                : 
                <div>
                    {text}
                </div>
            }
            {
                text.length > maxLength ? 
                <DescButton onClick={handleShow}>{show ? "Details" : "Hide Details"} </DescButton>
                :
                ""
            }
        </DescContainer>
    )
}

export default memo(Description);