import React from 'react';
import ConnectBG from '../assets/ConnectBG.png';
import Header from '../ui/Header';
import DeveloperCard from '../ui/DeveloperCard';
import zubeyde from '../assets/zubeyde.jpg';
import fatih from '../assets/fatih.jpeg';
import furkan from '../assets/furkan.jpeg';

const ConnectPage = () => {
  return (
    <div
      className="dark:bg-grey-0-dark"
      style={{
        backgroundImage: `url(${ConnectBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          height: '100vh',
          padding: '20px',
          paddingTop: '40px', // Added padding top for the container
          flexWrap: 'wrap', // Allows cards to wrap to the next line if necessary
        }}
      >
        <DeveloperCard
          name="Zübeyde Civelek"
          role="Developer"
          linkedIn="https://www.linkedin.com/in/z%C3%BCbeyde-civelek-b2a403196/"
          github="https://github.com/zubeydecivelek"
          image={zubeyde}
        />
        <DeveloperCard
          name="Fatih Ay"
          role="Developer"
          linkedIn="https://www.linkedin.com/in/fatihay61/"
          github="https://github.com/b21945815"
          image={fatih}
        />
        <DeveloperCard
          name="Furkan Aydın"
          role="Developer"
          linkedIn="https://www.linkedin.com/in/furkan-ayd%C4%B1n-a9223523a/"
          github="https://github.com/b2200356069"
          image={furkan}
        />
      </div>
    </div>
  );
};

export default ConnectPage;
