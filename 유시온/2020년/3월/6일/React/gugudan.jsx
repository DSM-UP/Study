const React = require('react');
const { useState, useRef, } = React;

const GuGuDan =  () => {
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputBtn = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(value) === (first * second)) {
            setResult('정답');
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
        } else {
            setResult('땡');
            setValue('');
        }
        inputBtn.current.focus();
    }

    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmit}>
                <input ref={inputBtn} onChange={(e) => setValue(e.target.value)} value={value} type="number" />
                <button type="submit">입력</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = GuGuDan;