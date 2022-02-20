import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../avatar';
import { Handle } from '../handle';

const Header = () => {

  return (
    <HeaderContainer>
      <Avatar />
      <Handle />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: inherit;
  flex-direction: inherit;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export default Header;