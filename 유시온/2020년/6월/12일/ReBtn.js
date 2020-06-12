import React, { useCallback } from 'react';

const ReBtn = ( props ) => {
    const { onClickReBtn } = props;

    return (
        <>
            <button onClick={(e) => onClickReBtn()}>다시</button>
        </>
    )
};

export default ReBtn;