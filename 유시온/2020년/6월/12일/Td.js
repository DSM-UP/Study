import React from 'react';
import styled from 'styled-components';

const TdBox = styled('td')`
    background: grey;
    width: 100px;
    height: 100px;
    line-height: 100px;
    color: white;
    font-size: 24px;
    text-align: center;
    border: 2px solid black;
`

const Td = ( props ) => {
    const { tdData, numData } = props;
    const { onTdClick } = props;

    return (
        <>
            <TdBox onClick={() => onTdClick(numData)}>
                {tdData}
            </TdBox>
        </>
    )
}

export default Td;