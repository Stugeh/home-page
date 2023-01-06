import Head from 'next/head';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children, }: LayoutProps,) {
  return (
    <>
      <Head>
        <title>Tuukka Veteli</title>
        <meta name="description" content="My over engineered personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
