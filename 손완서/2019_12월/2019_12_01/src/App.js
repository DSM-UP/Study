import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
	return <Route path="/:category?" component={NewsPage} />;
};

export default App;
