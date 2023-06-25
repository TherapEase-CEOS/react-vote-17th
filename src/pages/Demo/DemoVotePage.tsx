import React, { useState } from 'react';
import { Headline } from '../../styles/Typography';
import { Box } from '@mui/material';
import MainBtn from '../../components/MainBtn';
import DemoCard from './DemoCard';
import { useNavigate } from 'react-router-dom';
const DemoVotePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const services = [
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
    },
  ];
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
      }}
    >
      <Headline>데모데이 투표</Headline>
      <Box
        sx={{
          width: '80%',

          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {services.map(({ title, description }, idx) => (
          <DemoCard
            key={title}
            title={title}
            description={description}
            onClick={() => setSelected(idx)}
            selected={idx == selected}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <MainBtn>투표하기</MainBtn>
        <MainBtn onClick={() => navigate('/demo/result')}>결과보기</MainBtn>
      </Box>
    </Box>
  );
};

export default DemoVotePage;
