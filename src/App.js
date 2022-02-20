import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/header';
import { Link } from './components/link';
import * as service from './data/mock-data';

const App = () => {

  const [profileLinks, setProfileLinks] = useState([]);

  const getLinks = () => {
    service.fetchData()
      .then(links => setProfileLinks(links))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getLinks();
  }, [])

  return (
    <AppContainer>
      <ProfileContainer>
        <Header />
        <LinksContainer>
          {profileLinks.map((link, index) => {
            return (
              <Link
                key={index} 
                variant={link.variant} 
                label={link.label}
                link={link.link}
                music={link.music}
                shows={link.shows}
              />
            );
          })}
        </LinksContainer>
      </ProfileContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
`;

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 42.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
`;

const LinksContainer = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
`;

export default App;