import React from 'react';
import styled from 'styled-components';
import { invertedTheme, theme } from '../../../data/mock-theme';

const Classic = ({ label, link, music, shows, variant }) => {
  return (
    <LinkElement href={link} target='_blank'>
      <LinkText>{label}</LinkText>
    </LinkElement>
  );
};

const LinkElement = styled.a`
  width: inherit;
  background-color: ${theme.bg};
  color: ${theme.fg};
  border-radius: .25rem;
  padding: .75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .25s all ease;

  :hover {
    background-color: ${invertedTheme.bg};
    color: ${invertedTheme.fg};
  }
`;

const LinkText = styled.p`
  width: inherit;
  color: inherit;
  font-size: .875rem;
  line-height: 1.5rem;
  margin: 0;
  text-align: center;
`;

export default Classic;