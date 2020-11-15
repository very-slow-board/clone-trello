import Head from 'next/head';
import styled from "styled-components";

const TestElement = styled.div`
width: 100px;
height: 100px;
background-color: red;
`

const Home = () => (
  <div>
    <Head>
      <title>Clone trello!</title>
    </Head>
    <h1>index.js</h1>
    <TestElement />
    
  </div>
);

export default Home;