import React from 'react';
import Header from './components/Header';
import { MainWrap, MainGlobal } from './components/styled';
import NoteList from './components/NoteList';

const App = () => {
	return (
		<MainWrap>
			<MainGlobal />
			<Header />
			<NoteList />
		</MainWrap>
	);
};

export default App;
