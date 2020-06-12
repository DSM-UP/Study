import React, { useCallback, useState } from 'react';

const Input = ( props ) => {   
    const { onSetNumber, onSetTable } = props;

    const [value, setValue] = useState('');

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if(0 < value || value > 7){
            onSetNumber(value);
            onSetTable(value);
            setValue('');   
        }
    })

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="number" onChange={onChange} value={value}></input>
                <button type="submit">선택</button>
            </form>
        </>
    )
}

export default Input;