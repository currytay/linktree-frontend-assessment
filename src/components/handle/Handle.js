import React from 'react';
import styled from 'styled-components';

const Handle = () => {

  return (
    <HandleText>@yourname</HandleText>
  );
};

const HandleText = styled.h1`
  font-size: 1rem;
  line-height: 1.75rem;
  margin: 0;
  // add color styles
`;

export default Handle;