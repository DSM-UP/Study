## React DND 해석

> https://dev.to/florantara/creating-a-drag-and-drop-list-with-react-hooks-4c0i



### 단어 해석

* leverage (v) : 사용하다. 
* attach (v) : 붙이다.

* provide (v) : 제공하다.
* interacting (a) : 상호 작용하는
* handy (a) : 손쉬운
* mention (v) : 언급하다.
* implementation (n) : 구현
* replicating (n) : 복제



### DND 코드

* ```react
  import React from 'react';
  
  // 리스트에 들어갈 아이템 목록
  const items = [
  	{ number: '1', title: '🇦🇷 Argentina' },
  	{ number: '2', title: '🤩 YASS' },
  	{ number: '3', title: '👩🏼‍💻 Tech Girl' },
  	{ number: '4', title: '💋 Lipstick & Code' },
  	{ number: '5', title: '💃🏼 Latina' },
  ];
  
  // DND를 사용하기 위한 초깃값
  const initialDnDState = {
  	draggedFrom: null,
  	draggedTo: null,
  	isDragging: false,
  	originalOrder: [],
  	updatedOrder: [],
  };
  
  const App = () => {
  	const [list, setList] = React.useState(items);
  	const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);
      
      // 드래그 시작
  	const onDragStart = (event) => {
          // 드래그 대상의 리스트 포지션 값을 넣음
  		const initialPosition = Number(event.currentTarget.dataset.position);
  
          // 드래그 시작 대상, 드래그 중, 기존 리스트 값을 변경하여 set함
  		setDragAndDrop({
  			...dragAndDrop,
  			draggedFrom: initialPosition,
  			isDragging: true,
  			originalOrder: list,
  		});
  
          // 드래그 대상의 데이터 수집
  		event.dataTransfer.setData('text/html', '');
  	};
  
      // 드래그 중 대상 위에 올라와 있을 때
  	const onDragOver = (event) => {
  		event.preventDefault();
  
          // 기존 리스트 할당
  		let newList = dragAndDrop.originalOrder;
  
          // 드래그 시작 지점 인덱스 할당
  		const draggedFrom = dragAndDrop.draggedFrom;
  
          // 드래그 종료 지점 할당
  		const draggedTo = Number(event.currentTarget.dataset.position);
  
          // 드래그 시작 지점을 리스트에 추가
  		const itemDragged = newList[draggedFrom];
          
          // 드래그 시작 지점을 제외한 요소를 리스트에 추가
  		const remainingItems = newList.filter(
  			(item, index) => index !== draggedFrom,
  		);
  
          // 새 리스트를 0부터 드래그 한 지점까지, 드래그 요소, 드래그 지점부터 묶어 리스트 재할당
  		newList = [
  			...remainingItems.slice(0, draggedTo),
  			itemDragged,
  			...remainingItems.slice(draggedTo),
  		];
          
  		// 드래그 종료 지점과, 이전 DND의 종료 지점이 같지 않다면, 새 리스트와 이전 드래그 종료 지점을 업데이트
  		if (draggedTo !== dragAndDrop.draggedTo) {
  			setDragAndDrop({
  				...dragAndDrop,
  				updatedOrder: newList,
  				draggedTo: draggedTo,
  			});
  		}
  	};
  
      // 드래그를 종료하여 떨궜을 때
  	const onDrop = (event) => {
          // DND의 업데이트 한 새 리스트를 기반으로 DND 리스트 업데이트
  		setList(dragAndDrop.updatedOrder);
  
          // DND의 시작 지점, 끝 지점, 드래그 중을 업데이트
  		setDragAndDrop({
  			...dragAndDrop,
  			draggedFrom: null,
  			draggedTo: null,
  			isDragging: false,
  		});
  	};
  
      // 요소가 드랍 대상을 벗어날 때 발생
  	const onDragLeave = () => {
          // 드래그 도착 지점을 null로 업데이트
  		setDragAndDrop({
  			...dragAndDrop,
  			draggedTo: null,
  		});
  	};
  
  	return (
  		<section>
  			<ul>
                  <!-- 아이템 리스트
  				{list.map((item, index) => {
  					return (
  						<li
  							key={index}
  							data-position={index}
  							draggable
  							onDragStart={onDragStart}
  							onDragOver={onDragOver}
  							onDrop={onDrop}
  							onDragLeave={onDragLeave}
  							className={
  								dragAndDrop && dragAndDrop.draggedTo === Number(index)
  									? 'dropArea'
  									: ''
  							}
  						>
  							<span>{item.number}</span>
  							<p>{item.title}</p>
  						</li>
  					);
  				})}
  			</ul>
  		</section>
  	);
  };
  export default App;
  
  ```

