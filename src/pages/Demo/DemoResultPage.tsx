import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Headline } from '../../components/Typography';
import RankCard from '../../components/RankCard';
import MainBtn from '../../components/MainBtn';
import { useNavigate } from 'react-router-dom';
import SizedBox from '../../components/SizedBox';
import DemoService from '../../services/DemoService';
import { IDemoService } from '../../interface/interface';
const DemoResultPage = () => {
  const navigate = useNavigate();
  const handleDataFetching = async () => {
    const candidates = await DemoService.getVoteResults();

    setServices(candidates);
  };
  useEffect(() => {
    handleDataFetching();
  }, []);

  const [services, setServices] = useState<IDemoService[]>();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Headline>데모데이 투표 결과</Headline>
      <SizedBox height={'50px'} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          width: '100%',
          gap: '15px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {services?.map(({ name, description, voteCount }, idx) => (
          <RankCard
            key={name}
            title={name}
            description={description}
            rank={idx + 1}
            votes={voteCount || 0}
          />
        ))}
        <SizedBox height={'40px'} />
        <MainBtn onClick={() => navigate('/demo')}>돌아가기</MainBtn>
      </Box>

      <SizedBox height={'5vh'} />
    </Box>
  );
};

export default DemoResultPage;
