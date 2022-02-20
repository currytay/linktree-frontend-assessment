import React, { useState } from 'react';
import styled from 'styled-components';
import { invertedTheme, theme } from '../../../data/mock-theme';
import { LinkButton } from '../button';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import SongkickLogo from '../../../assets/icons/by-songkick-wordmark.svg';

const Shows = ({ label, link, music, shows, variant }) => {

  const [displayEvents, setDisplayEvents] = useState(false);

  const handleClick = () => {
    setDisplayEvents(!displayEvents);
  }

  return (
    <ShowsContainer>
      <LinkButton handleClick={handleClick} label={label} />
      <ContentContainer>
        {displayEvents && shows.map((show, index) => {
          return (
            <EventContainer key={index}>
              <EventLink href={show.link} target='_blank'>
                <EventInfoContainer>
                  <EventText primary={true}>{show.date}</EventText>
                  <EventText primary={false}>{show.location}</EventText>
                </EventInfoContainer>
                {show.soldOut ? <EventText primary={false}>Sold Out</EventText> : <Arrow src={ArrowIcon} alt='Arrow icon' />}
              </EventLink>
            </EventContainer>
          );
        })}
        {displayEvents && (
          <LogoContainer>
            <Logo src={SongkickLogo} alt='Songkick logo' />
          </LogoContainer>
        )}
      </ContentContainer>
    </ShowsContainer>
  );
};

const ShowsContainer = styled.div`
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

const EventContainer = styled.div`
  padding: .625rem 0;
  border-bottom: 1px solid #DADEE0;
`;

const EventLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventText = styled.p`
  margin: 0;
  font-size: ${props => props.primary ? '1rem' : '.75rem'};
  line-height: ${props => props.primary ? '1.75rem' : '1.5rem'};
  color: ${theme.fg};
`;

const Arrow = styled.img`
  transform: rotate(-90deg);
`;

const LogoContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 1rem;
`;

export default Shows;