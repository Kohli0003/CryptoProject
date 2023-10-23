import React from 'react';
import { Switch, Route, Link, Routes} from 'react-router-dom';
import { Layout,Typography, Space} from 'antd';
import {Navbar,Exchanges,HomePage,CryptoCurrencies,News,CryptoDetails} from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
       <Navbar/>

        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route exact path="/exchanges">
                            <Exchanges/>
                        </Route>
                        <Route exact path="/cryptocurrencies">
                            <CryptoCurrencies/>
                        </Route>
                        <Route exact path="/crypto/:coinId">
                            <CryptoDetails/>
                        </Route>
                        <Route exact path="/News">
                            <News/>
                        </Route>
                    </Switch>
                    
                </div>
            </Layout>
            <div className="footer">
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
            Crypto World <br/>
            All Rights Reserved
        </Typography.Title>
        <Space>
            <Link to="/">Home</Link>
            <Link to="/">Exchanges</Link>
            <Link to="/">News</Link>
        </Space>
        </div>

        </div>
        
    </div>
  )
}

export default App
