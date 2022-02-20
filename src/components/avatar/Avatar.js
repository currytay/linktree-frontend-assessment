import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../../assets/profile-picture.png';

const Avatar = () => {

  return (
    <AvatarElement src={AvatarImage} alt='User profile avatar' />
  );
};

const AvatarElement = styled.img`
  height: 4rem;
  width: 4rem;
  margin: 0 0 .5rem 0;
`;

export default Avatar;