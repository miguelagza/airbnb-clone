import React from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox';
import Menu from './Menu';
import Card from './Card';
import { places } from './places';
import { liveAnywhere } from './liveAnywhere';
import { experienceWorld } from './experienceWorld';
import { joinHosts } from './joinHosts';

const App: React.FC = () => {
  return (
    <div className='app'>
      <div className='app__alert'>
        <a href='/'>Get the latest on our COVID-19 response</a>
      </div>
      <div className='app__image'>
        <Header />
        <Menu />

        <div className='app__content'>
          <SearchBox />
        </div>
        <h1>Go Near</h1>
        <button>Explore nearby stays</button>
      </div>
      <div className='app__body'>
        <div className='app__cards'>
          {places.map(({ id, driveTime, place, src }) => {
            return <Card place={place} driveTime={driveTime} src={src} />;
          })}
        </div>
        <h1>Live Anywhere</h1>
        <div className='app__liveAnywhere'>
          {liveAnywhere.map(({ name, src }) => {
            return (
              <div className='app__liveAnywhereContainer'>
                <img src={src} alt={name} />
                <h3>{name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className='app__experienceWorld'>
        <h1>Experience the world</h1>
        <p>Unique activities with local experts-in person or online</p>
        <div className='app__experienceWorldFlex'>
          {experienceWorld.map(({ title, paragraph, src }) => {
            return (
              <div className='app__experienceWorldContainer'>
                <img src={src} alt='' />
                <h3>{title}</h3>
                <p>{paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='joinHostsWrapper'>
        <h1>Join millions of hosts on Airbnb</h1>
        <div className='joinHosts'>
          {joinHosts.map(({ name, src }) => {
            return (
              <div className='joinHostsContainer'>
                <img src={src} alt={name} />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
