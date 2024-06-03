import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const DeveloperCard = ({ name, role, linkedIn, github, image }) => {
  return (
    <div
      className="bg-grey-0 dark:bg-grey-100-dark text-black dark:text-white border border-[#DB2229] rounded-lg p-5 m-5 shadow-lg flex flex-col items-center w-52 text-center"
    >
      <img
        src={image}
        alt={`${name}'s picture`}
        className="rounded-full w-24 h-24 mb-4"
      />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <div
        className="flex justify-around w-full mt-4"
      >
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
