import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import {  Layout, Col, Row } from 'antd';

import SignUp from '../components/sign-up';
import SignIn from '../components/sign-in';

import 'antd/dist/antd.css';
import style from '../styles/Home.module.css'

const { Content } = Layout;
const Home: NextPage = () => {

  const [signIn, setSignIn] = React.useState<boolean>(false);
  const goToSignIn = () => {
    setSignIn(true);
  }

  return (
    <div className={style.container}>
      <Head>
        <title>UI Developer Code Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Content className={style.main}>
          <Row>
            <Col span={12}><SignUp excuteChangeMode={goToSignIn}/></Col>
            <Col span={12}><SignIn switchMode={signIn} onExcuteHide={() => {setSignIn(false)}}/></Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default Home
