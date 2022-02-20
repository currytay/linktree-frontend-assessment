import React, { useState } from 'react';
import styled from 'styled-components';

const LinkButton = ({ label }) => {

  return (
    <LinkButton>{label}</LinkButton>
  );
};

const LinkButton = styled.button`
  width: inherit;
  background-color: ${theme.bg};
  color: ${theme.fg};
  border-radius: .25rem;
  padding: .75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;
  font-family: 'Karla';
  font-size: .875rem;
  transition: .25s all ease;

  :hover {
    background-color: ${invertedTheme.bg};
    color: ${invertedTheme.fg};
  }
`;

export default ShowsLink;