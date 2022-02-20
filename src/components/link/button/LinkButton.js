import React from 'react';
import styled from 'styled-components';
import { invertedTheme, theme } from '../../../data/mock-theme';

const LinkButton = ({ handleClick, label }) => {
  return (
    <ButtonElement onClick={() => handleClick()}>
      {label}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  width: inherit;
  background-color: ${theme.bg};
  color: ${theme.fg};
  border: none;
  border-radius: .25rem;
  padding: .75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;
  font-family: 'Karla';
  font-size: .875rem;
  cursor: pointer;
  transition: .25s all ease;

  :hover {
    background-color: ${invertedTheme.bg};
    color: ${invertedTheme.fg};
  }
`;

export default LinkButton;