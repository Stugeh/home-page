import Head from 'next/head';
import React from 'react';
import Footer from './footer';
import Header from './header';

type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Tuukka Veteli</title>
        <meta name="description" content="My over engineered personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer/>
    </>
  );
}
