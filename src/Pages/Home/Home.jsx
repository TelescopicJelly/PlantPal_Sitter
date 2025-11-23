import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Main_page">
      <Header />
      <div className="header">
        <div className="headerListItem">
          <FontAwesomeIcon icon={faSeedling} size="2xl" style={{ color: '#669c35' }} />
          <span>Need a Sitter</span>
          <button className="NeedSit_link-btn" onClick={() => navigate('/booking')}>
            Needing a Sitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
