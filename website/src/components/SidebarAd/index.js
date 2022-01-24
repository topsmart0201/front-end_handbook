import React from 'react';
import ReactDOM from 'react-dom';
import BrowserOnly from '@docusaurus/BrowserOnly';

import clsx from 'clsx';

import styles from './styles.module.css';

const BACKGROUNDS = [
  styles.backgroundOrange,
  styles.backgroundPurple,
  styles.backgroundRed,
];

export default React.memo(function SidebarAd() {
  const backgroundClass =
    BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
  // Because the SSR and client output can differ and hydration doesn't patch attribute differences,
  // we'll render this on the browser only.
  return (
    <BrowserOnly>
      {() =>
        Math.random() > 0.5 ? (
          <a
            className={clsx(styles.container, backgroundClass)}
            href="https://www.moonchaser.io/?utm_source=techinterviewhandbook&utm_medium=referral&utm_content=website_docs_sidebar"
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => {
              window.gtag('event', 'moonchaser.sidebar.click');
            }}>
            <p className={styles.tagline}>
              <strong>Get paid more.</strong> Receive risk-free salary
              negotiation advice from <u>Moonchaser</u>. You pay nothing unless
              your offer is increased. <u>Book a free consultation today!</u>
            </p>
          </a>
        ) : (
          <a
            className={clsx(styles.container, backgroundClass)}
            href="https://educative.io/tech-interview-handbook"
            key={Math.random()}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => {
              window.gtag('event', 'educative.sidebar.click');
            }}>
            <p className={styles.tagline}>
              <strong>Looking to get hired at FAANG?</strong> <u>Educative</u>{' '}
              offers many great courses to improve your interview game.{' '}
              <u>Join today for a 10% discount!</u>
            </p>
          </a>
        )
      }
    </BrowserOnly>
  );
});
