import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kaijun Zhu</h2>
        <p>
          <a href="mailto:kaijun.zhu0629@gmail.com">kaijun.zhu0629@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Kaijun. I am a software developer, currently working at
        Amazon. <br />I like running, hiking, and most of the ourdoor
        activities. I also enjoy travelling around the world and taking photos.{' '}
        <br />I recently get into bouldering, where it takes a good combo of
        mind and strength to tackle each project.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname.includes('/about') ? (
            <Link to="/resume" className="button">
              View Resume
            </Link>
          ) : (
            <Link to="/about" className="button">
              More about Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Kaijun Zhu <Link to="/">kaijunz.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
