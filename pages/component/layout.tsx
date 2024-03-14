import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/home">
              <a style={linkStyle}>Home</a>
            </Link>
          </li>
          <div style={{marginRight:20}}></div>
          <li style={liStyle}>
            <Link href="/about">
              <a style={linkStyle}>About</a>
            </Link>
          </li>
          <div style={{marginRight:20}}></div>
          <li style={liStyle}>
            <Link href="/memory">
              <a style={linkStyle}>Memory</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main style={mainStyle}>{children}</main>
    </>
  );
}

const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const liStyle = {
  marginRight: '20px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
};

const mainStyle = {
  padding: '20px',
};
