import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import twitterIcon from '../../assets/twitter.svg';
import youtubeIcon from '../../assets/youtube.svg';

import './styles.css';

export function Contact() {
  return (
    <div>
      <Header />
      <main id='contact'>
        <ul>
          <li className='social-link'>
            <a href='https://www.youtube.com/watch?v=fC7oUOUEEi4' target='_blank' rel='noreferrer'>
              <img src={facebookIcon} alt='Facebook icon' />
            </a>
          </li>
          <li className='social-link'>
            <a href='https://www.youtube.com/watch?v=fC7oUOUEEi4' target='_blank' rel='noreferrer'>
              <img src={instagramIcon} alt='Instagram icon' />
            </a>
          </li>
          <li className='social-link'>
            <a href='https://www.youtube.com/watch?v=fC7oUOUEEi4' target='_blank' rel='noreferrer'>
              <img src={twitterIcon} alt='Twitter Icon' />
            </a>
          </li>
          <li className='social-link'>
            <a href='https://www.youtube.com/watch?v=fC7oUOUEEi4' target='_blank' rel='noreferrer'>
              <img src={linkedinIcon} alt='Linkedin Icon' />
            </a>
          </li>
          <li className='social-link'>
            <a href='https://www.youtube.com/watch?v=fC7oUOUEEi4' target='_blank' rel='noreferrer'>
              <img src={youtubeIcon} alt='Youtube icon' />
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}