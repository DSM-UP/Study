import React from 'react';
import styled from 'styled-components';
import {
	HeaderWrapper,
	HeaderTitle,
	HeaderTitleImg,
	HeaderTitleText,
} from './styled';

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderTitle>
				<HeaderTitleImg src="./a.png" />
				<HeaderTitleText>CutyApple's Simple Note</HeaderTitleText>
			</HeaderTitle>
		</HeaderWrapper>
	);
};

export default Header;
