import Head from 'next/head';
import { Row, Col, Container } from 'react-bootstrap';
import styled, { createGlobalStyle } from 'styled-components';

import SideNav from '../components/SideNav';

const Content = styled(Col)`
  padding: 15px;
`;

const Wrapper = styled(Container)`
  padding: 0;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter'
  }
`;

function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>New Project</title>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://rsms.me/inter/inter.css'
          crossOrigin='anonymous'
        />
      </Head>
      <Wrapper fluid>
        <Row noGutters>
          <SideNav />
          <Content>
            <h1>Content</h1>
          </Content>
        </Row>
      </Wrapper>
    </div>
  );
}

export default Home;
