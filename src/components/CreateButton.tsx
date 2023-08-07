import React, {FC, memo} from 'react';

import styled from 'styled-components';

interface CreateButtonProps {
    onClick:() => void;
    title: string
}

const DescButton = styled.button`
    width: 100px;
    height: 50px;
    cursor: pointer;
    border: none;
    font-size: 10px;
    border-radius: 10px;
    background-color: rgba(30, 144, 255);
    color: white;
    font-weight: bold;
    position: fixed;
    font-size: 13px;
    right: 0;
    bottom: 0;
    margin: 20px;
`

const CreateButton: FC<CreateButtonProps> = ({onClick, title}) => {
    return(
        <DescButton onClick={onClick}>{title}</DescButton>
    )
}

export default memo(CreateButton);