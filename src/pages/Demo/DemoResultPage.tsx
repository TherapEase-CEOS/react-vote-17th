import React from 'react';
import { Box } from '@mui/material';
import { Headline } from '../../styles/Typography';
import RankCard from '../../components/RankCard';
import MainBtn from '../../components/MainBtn';
import { useNavigate } from 'react-router-dom';

const DemoResultPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 1,
      votes: 5,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 2,
      votes: 4,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 3,
      votes: 3,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 4,
      votes: 2,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 5,
      votes: 1,
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
        gap: '10px',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Headline>데모데이 투표 결과</Headline>
      {services.map(({ title, description, rank, votes }) => (
        <RankCard
          key={title}
          title={title}
          description={description}
          rank={rank}
          votes={votes}
        />
      ))}

      <MainBtn onClick={() => navigate('/demo')}>돌아가기</MainBtn>
    </Box>
  );
};

export default DemoResultPage;
