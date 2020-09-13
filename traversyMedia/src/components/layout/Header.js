import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// when using router, use <link> instead of <a> tag to property equals to href

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '0.5em',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Header;
