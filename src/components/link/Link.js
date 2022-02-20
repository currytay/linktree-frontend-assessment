import React from 'react';
import styled from 'styled-components';
import { Classic, Music, Shows } from './variants/';

const LinkVariants = {
  classic: Classic,
  music: Music,
  shows: Shows,
};

const Link = ({ label, link, music, shows, variant }) => {
  const LinkElement = LinkVariants[variant];

  return (
    <LinkContainer>
      <LinkElement
        label={label}
        link={link}
        music={music}
        shows={shows}
        variant={variant}
      />
    </LinkContainer>
  );
};

const LinkContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export default Link;