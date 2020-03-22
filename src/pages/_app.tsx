import App, { AppContext } from 'next/app';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { getApolloClient } from '../graphql/client';
import { AuthProvider } from '../auth/provider';
import { getAuthToken } from '../auth/authToken';
import { queryMe } from '../auth/queries';
import { CacheProvider } from '@emotion/core';
import { globalStyles } from '../styles/global';
import { cache } from 'emotion';
import AppHeader from '../common/AppHeader';
import { OverwolfWindowProvider } from '../overwolf/OverwolfWindow';
import Sidebar from '../common/Sidebar';
import styled from '@emotion/styled';
import Head from 'next/head';
import Main from '../common/Main';
import { useState } from 'react';
import ToolPane from '../common/ToolPane';
import Settings from '../common/Settings';
import Collection from '../common/Collection';
import IslandDetails from '../common/IslandDetails';
import Overview from '../common/Overview';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTool, setActiveTool] = useState(null);
  const [activeIsland, setActiveIsland] = useState(null);
  const [openIslandDetails, setOpenIslandDetails] = useState(false);

  return (
    <>
      <Head>
        <title>Trophy Hunter</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CacheProvider value={cache}>
        {globalStyles}
        <ApolloProvider client={getApolloClient(null)}>
          <AuthProvider initialUser={pageProps.me}>
            <OverwolfWindowProvider>
              <AppHeader />
              <Container>
                <Sidebar
                  activeTool={activeTool}
                  onToolClick={tool => {
                    setOpenIslandDetails(null);
                    setActiveIsland(null);
                    setActiveTool(activeTool === tool ? null : tool);
                  }}
                />
                <Main>
                  <Component
                    {...pageProps}
                    activeIsland={activeIsland}
                    onIslandClick={island => {
                      setActiveTool(null);
                      setActiveIsland(island);
                      setOpenIslandDetails(true);
                    }}
                  />
                  <IslandDetails
                    activeIsland={activeIsland}
                    open={openIslandDetails}
                    onToggleClick={() => {
                      setActiveTool(null);
                      if (openIslandDetails) {
                        setOpenIslandDetails(false);
                        setActiveIsland(null);
                      } else {
                        setOpenIslandDetails(true);
                      }
                    }}
                  />
                  <Overview />
                  {activeTool && (
                    <ToolPane>
                      {activeTool === 'settings' && <Settings />}
                      {activeTool === 'collection' && <Collection />}
                    </ToolPane>
                  )}
                </Main>
              </Container>
            </OverwolfWindowProvider>
          </AuthProvider>
        </ApolloProvider>
      </CacheProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const apolloClient = getApolloClient(appContext.ctx);
  appContext.ctx.apolloClient = apolloClient;

  const authToken = getAuthToken(appContext.ctx);

  const appProps = await App.getInitialProps(appContext);
  appProps.pageProps.authToken = authToken;

  if (authToken) {
    const me = await queryMe(apolloClient);
    appProps.pageProps.me = me;
  }

  return { ...appProps };
};

export default MyApp;
