import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../data/mock-theme';
import { LinkButton } from '../button';
import SpotifyLogo from '../../../assets/icons/spotify.svg';
import AppleLogo from '../../../assets/icons/apple-music.svg';
import SoundcloudLogo from '../../../assets/icons/soundcloud.svg';
import BandcampLogo from '../../../assets/icons/bandcamp.svg';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import PlayIcon from '../../../assets/icons/play.svg';
import AlbumArt from '../../../assets/img/Rectangle.png';

const LogoVariants = {
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
      <ListContainer>
        {displayLinks && displayPlayer && (
          <PlayerContainer>
            <PlayerArt src={AlbumArt} alt='Album artwork' />
            <img src={PlayIcon} alt='Play button' />
            <ProgressBar />
          </PlayerContainer>
        )}
        {displayLinks &&
          music.map((platform, index) => {
            return (
              <StreamingPlatformContainer key={index}>
                <StreamingLink href={platform.link} target='_blank'>
                  <StreamingLogo
                    src={LogoVariants[platform.icon]}
                    alt={`${platform.name} logo`}
                  />
                </StreamingLink>
                <StreamingPlayerButton onClick={() => playSong()}>
                  <PlatformText>{platform.service}</PlatformText>
                  <Arrow src={ArrowIcon} alt='Arrow icon' />
                </StreamingPlayerButton>
              </StreamingPlatformContainer>
            );
          })}
      </ListContainer>
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

const ListContainer = styled.div`
  width: inherit;
  padding: 0 1rem;
`;

const StreamingPlatformContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .625rem 0;
  position: relative;

  :not(:last-child):after {
    content: '';
    display: block;
    position: absolute;
    height: .0625rem;
    background: #DADEE0;
    width: calc(100% - 1.5rem);
    left: 2.5rem;
    bottom: 0;  
  }
`;

const StreamingLink = styled.a`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const StreamingLogo = styled.img`
  fill: red;
  stroke: red;
`;

const StreamingPlayerButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

const PlatformText = styled.p`
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