import styled, { createGlobalStyle } from 'styled-components';

export const MainGlobal = createGlobalStyle`
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
`;

export const MainWrap = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 50px;
	background: white;
	border: 1px solid gray;
`;

export const HeaderTitle = styled.div`
	display: flex;
	height: 39px;
	margin: 4px 35px;
	font-size: 16px;
`;

export const HeaderTitleImg = styled.img`
	height: 35px;
	width: 35px;
	vertical-align: middle;
`;

export const HeaderTitleText = styled.span`
	height: 16px;
	margin: 0 10px;
	font-weight: bold;
	vertical-align: middle;
`;

export const NoteListWrapper = styled.div`
	display: flex;
	width: 360px;
	border: 1px solid gray;
	height: 100%;
	background: skyblue;
	flex-direction: column;
`;

export const NoteListItem = styled.div`
	width: 100%;
	height: 45px;
	padding: 20px 30px;
`;
