import Head from 'next/head';
import { Row, Col, Container } from 'react-bootstrap';

import styled from 'styled-components';

const SideNav = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #f5f5f5;
`;

const Wrapper = styled(Container)`
  padding: 0;
`;

function Home() {
  return (
    <div>
      <Head>
        <title>No code</title>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous'
        />
      </Head>
      <Wrapper fluid>
        <Row noGutters>
          <SideNav>Company Name</SideNav>
          <Col>Welcome to Next.js!</Col>
        </Row>
      </Wrapper>
    </div>
  );
}

export default Home;
