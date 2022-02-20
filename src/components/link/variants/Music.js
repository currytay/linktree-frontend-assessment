import React, { useState } from 'react';
import styled from 'styled-components';
import { invertedTheme, theme } from '../../../data/mock-theme';
import { LinkButton } from '../button';
import SpotifyLogo from '../../../assets/icons/spotify.svg';
import AppleLogo from '../../../assets/icons/apple-music.svg';
import SoundcloudLogo from '../../../assets/icons/soundcloud.svg';
import BandcampLogo from '../../../assets/icons/bandcamp.svg';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import PlayIcon from '../../../assets/icons/play.svg';
import AlbumArt from '../../../assets/img/Rectangle.png';

const IconVariants = {
  spotify: SpotifyLogo,
  apple: AppleLogo,
  soundcloud: SoundcloudLogo,
  bandcamp: BandcampLogo,
};

const Music = ({ label, link, music, shows, variant }) => {

  const [displayLinks, setDisplayLinks] = useState(false);
  const [displayPlayer, setDisplayPlayer] = useState(false);

  const handleClick = () => {
    setDisplayLinks(!displayLinks);
  }

  const playSong = () => {
    setDisplayPlayer(true);
  }

  return (
    <MusicContainer>
      <LinkButton handleClick={handleClick} label={label} />
      <ContentContainer>
        {displayLinks && displayPlayer && (
          <PlayerContainer>
            <PlayerArt src={AlbumArt} alt='Album artwork' />
            <img src={PlayIcon} alt='Play button' />
            <ProgressBar />            
          </PlayerContainer>
        )}
        {displayLinks && music.map((availableService, index) => {
          return (
            <ServiceContainer key={index}>
              <StreamingLink href={availableService.link} target='_blank'>
                <StreamingLogo src={IconVariants[availableService.icon]} alt={`${availableService.name} logo`} />
              </StreamingLink>
              <StreamingButton onClick={() => playSong()}>
                <ServiceText>{availableService.service}</ServiceText>
                <Arrow src={ArrowIcon} alt='Arrow icon' />
              </StreamingButton>
            </ServiceContainer>
          );
        })}
      </ContentContainer>
    </MusicContainer>
  );
};

const MusicContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F5F7F8;
  border-radius: .25rem;
`;

const ContentContainer = styled.div`
  width: inherit;
  padding: 0 1rem;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .625rem 0;

  :not(:last-child) {
    border-bottom: 1px solid #DADEE0;
  }
`;

const StreamingLink = styled.a`
  margin-right: 1rem;
`;

const StreamingLogo = styled.img`
  fill: red;
  stroke: red;
`;

const StreamingButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ServiceText = styled.p`
  font-family: 'Karla';
  font-size: 1rem;
  line-height: 1.75rem;
  color: ${theme.fg};
  margin: 0;
`;

const Arrow = styled.img`
  transform: rotate(-90deg);
`;

const PlayerContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .625rem 0 1rem 0;
  border-bottom: 2px solid #DADEE0;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: -.125rem; 
  height: .125rem;
  width: 40%;
  background-color: ${theme.bg};
`;

const PlayerArt = styled.img`
  margin-right: 1rem;
`;

export default Music;