import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title } from './styles';

const Home: React.FC = () => (
  <>
    <img src={logoImg} alt="Rickipedia" />
    <Title>Discover everything about Rick and Morty's characters.</Title>
    {/* <h1>This is a title (h1)</h1>
    <input placeholder="This is a input" />
    <button type="button">This is a button</button> */}
  </>
);

export default Home;
