import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import {  Layout, Col, Row, Image } from 'antd';

import SignUp from '../components/sign-up';
import SignIn from '../components/sign-in';

import 'antd/dist/antd.css';
import style from '../styles/Home.module.css'

const { Content } = Layout;
const Home: NextPage = () => {

  const [signIn, setSignIn] = React.useState<boolean>(false);
  const [isComplete, setComplete] = React.useState<boolean>(false);

  const goToSignIn = () => {
    setSignIn(true);
  }

  const complete = () => {
    setComplete(true);
  }

  return (
    <div className={style.container}>
      <Head>
        <title>UI Developer Code Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className='c-layout'>
        <Content className={style.main}>
          <Row className={`c-row ${isComplete ? 'complete' : ''}`}>
            <Col span={12} className='ant-col-left'><SignUp excuteChangeMode={goToSignIn} signUpComplete={complete}/></Col>
            <Col span={12} className='ant-col-right'><SignIn switchMode={signIn} onExcuteHide={() => {setSignIn(false)}}/></Col>
            <div className='thanks-block'>
              <Image src='images/check.png' width={400}/>
              <p className='bold-title'>Thanks for Sign Up</p>
              <p>We have sent you an email verification to yoremail@gmail.com <br/>
                Please check it, and grab the link from there.</p>
            </div>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default Home
