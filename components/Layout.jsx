import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Sayings By Hannan</title>
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
