import React, { useState, useCallback, useEffect } from 'react';
import Input from './Input';
import Table from './Table';
import ReBtn from './ReBtn';

function isFull(tableData){
  let count = 0;
  for(var i = 0; i < tableData.length; i++) {
    for(var j = 0; j < tableData.length; j++) {
      if (tableData[i][j] != '') count++
    }  
  }
  return count == tableData.length * tableData.length ? true : false;
}

function isWin(count, number) {
  const win = count == number ? true : false;
  return win;
}

function isEnd(tableData, indexX, indexY, turn, number, setWinner){
  let count = 0;
  let x = indexX;
  let y = indexY;
  let cellData = tableData[x][y];

  while(x > 0 && cellData == tableData[x-1][y]){ x--; }
  while(x < number && cellData == tableData[x++][y]){ count++; }
  if (isWin(count, number)){ cellData == 'O' ? setWinner('O') : setWinner('X'); return cellData+'입니다.'; }

  x = indexX;
  count = 0;

  while(y > 0 && cellData == tableData[x][y-1]){ y--; }
  while(y < number && cellData == tableData[x][y++]){ count++; }
  if (isWin(count, number)){ cellData == 'O' ? setWinner('O') : setWinner('X'); return cellData+'입니다.'; }
  
  x = indexX;
  y = indexY;
  count = 0;

  while(y > 0 && x > 0 && cellData == tableData[x-1][y-1]){ x --; y--; }
  while(x < number && y < number && cellData == tableData[x++][y++]){ count++; }
  if (isWin(count, number)){ cellData == 'O' ? setWinner('O') : setWinner('X'); return cellData+'입니다.'; }

  x = indexX;
  y = indexY;
  count = 0;

  while(y < number && x > 0 && cellData == tableData[x-1][y+1]){ x--; y++; }
  while(x < number && y >= 0 && cellData == tableData[x++][y--]){ count++; }
  if (isWin(count, number)){ cellData == 'O' ? setWinner('O') : setWinner('X'); return cellData+'입니다.'; }

  if (isFull(tableData)) {
    setWinner('');
    return '없습니다. 무승부입니다.'
  };
}

const App = () => {
  const [number, setNumber] = useState(null); 
  const [tableData, setTableData] = useState(null);
  const [turn, setTurn] = useState('O');
  const [winner, setWinner] = useState(null);
  const [cellX, setCellX] = useState(null);
  const [cellY, setCellY] = useState(null);
  const [oResult, setOResult] = useState(0);
  const [xResult, setXResult] = useState(0);

  const onTdClick = useCallback(tableIndex => {
    const indexX = parseInt(tableIndex/number);
    const indexY = tableIndex%number;
    const tableTempData = [...tableData]

    if (tableData[indexX][indexY] === 'O' || tableData[indexX][indexY] === 'X' || winner) {
      return;
    }

    setCellX(indexX);
    setCellY(indexY);

    tableTempData[indexX] = [...tableTempData[indexX]]
    tableTempData[indexX][indexY] = turn;
    setTableData(tableTempData)

    setTurn(turn === 'O' ? 'X' : 'O')
  })

  useEffect(() => {
    if (cellX == null){ return; }
    setWinner(isEnd(tableData, cellX, cellY, turn, number, setWinner))
    if(isEnd(tableData, cellX, cellY, turn, number, setWinner)=='O입니다.'){setOResult(oResult+1)}
    if(isEnd(tableData, cellX, cellY, turn, number, setWinner)=='X입니다.'){setXResult(xResult+1)}
  }, [tableData]) 

  const onSetNumber = useCallback(number => {
    setNumber(number);
  }, []);

  const onSetTable = useCallback(number => {
    console.log(number);
    var arr = new Array();
    for( var i = 0; i < number; i++) {
      var arr_sub = new Array();
      for( var j = 0; j < number; j++) {
        var arr_sub_sub = '';
        arr_sub.push(arr_sub_sub);
      }
      arr.push(arr_sub)
    }
    setTableData(arr);
  })

  const onClickReBtn = useCallback(e => {
    setTableData(null);
    setTurn('O');
    setWinner(null);
    setNumber(null);
    setCellX(null);
    setCellY(null);
  })

  return (
    <>
      {'O : ' + oResult + ' | X : ' + xResult }
      {!tableData && <Input onSetNumber={onSetNumber} onSetTable={onSetTable}/>}
      {tableData && '현재 턴 : ' + turn}
      {tableData && <Table tableData={tableData} number={number} onTdClick={onTdClick} />}
      {winner && '승자는 ' + winner }
      {winner && '재시작 하겠습니까?' && <ReBtn onClickReBtn={onClickReBtn}/>}
    </>
  )
}

export default App;
