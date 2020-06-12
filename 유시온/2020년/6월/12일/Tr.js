import React from 'react';
import Td from './Td';
import styled from 'styled-components';

const TrBox = styled('tr')`
    display: flex;
    margin : 0px;
`

const Tr = ( props ) => {
    const { trData, numData, number } = props;
    const { onTdClick } = props;

    return (
        <>
            <TrBox>
                {trData.map((tdData, index) => 
                    <Td 
                        key={index} 
                        tdData={tdData} 
                        numData={numData * number + index } 
                        onTdClick={onTdClick}
                    />
                )}
            </TrBox>
        </>
    )
}

export default Tr;