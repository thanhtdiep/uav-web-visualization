
import React, { Fragment } from 'react';
import Head from 'next/head';

const Layout = props => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" rel="stylesheet"></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <title>{props.pageTitle || 'Realtime Data Visualization'}</title>
    </Head>
    {props.children}
  </Fragment>
);

export default Layout;