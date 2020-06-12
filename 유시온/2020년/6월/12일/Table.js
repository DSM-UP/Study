import React from 'react';
import Tr from './Tr';
import styled from 'styled-components';

const TableBox = styled('table')`
    margin: 20px;
`

const Table = ( props ) => {
    const { tableData, number } = props;
    const { onTdClick } = props;

    return (
        <>
            <TableBox>
                {tableData.map((trData, index) => 
                <Tr 
                    key={index} 
                    trData={trData} 
                    numData={index} 
                    number={number} 
                    onTdClick={onTdClick}
                />
                )}
            </TableBox>
        </>
    )
}

export default Table;