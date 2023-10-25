import React from 'react'
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import{Link} from 'react-router-dom';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

import {News} from '../components/';


const {Title }=Typography;
const HomePage = () => {
  const{data,isFetching}=useGetCryptoNewsQuery(12);
  

  if(isFetching) return 'Loading...';
  return (
    <>
      
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>

      
      <News simplified/>
    </>
  )
}


export default HomePage
