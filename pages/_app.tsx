import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import World from './World'
import Home from './Home/Index'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Layout from './Components/Layout'
import { SessionProvider } from 'next-auth/react'

const MyApp = ({ Component, pageProps: {session, ...pageProps} }: {Component: typeof React.Component, pageProps: any} ) => {
  return (
    <SessionProvider session={session}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
export default MyApp
