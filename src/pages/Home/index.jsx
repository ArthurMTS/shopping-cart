import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import img from '../../assets/man.jpg';

import './styles.css';

export function Home() {
  return (
    <div>
      <Header />
      <main id='home'>
        <div id='info'>
          <h2>FakeStore</h2>
          <p>Where you can find anything that you want</p>
          <Link to='/products'>Start shopping now</Link>
        </div>
        <aside><img src={img} alt='Man making a face' /></aside>
      </main>
      <Footer />
    </div>
  );
}