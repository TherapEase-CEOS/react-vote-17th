import React, { useState, useEffect } from 'react';
import { Headline } from '../../components/Typography';
import { Box } from '@mui/material';
import MainBtn from '../../components/MainBtn';
import DemoCard from './DemoCard';
import { useNavigate } from 'react-router-dom';
import SizedBox from '../../components/SizedBox';
import DemoService from '../../services/DemoService';
import { IDemoService } from '../interface/interface';
const DemoVotePage = () => {
  const handleDataFetching = async () => {
    const candidates = await DemoService.getServices();

    setServices(candidates);
  };
  useEffect(() => {
    handleDataFetching();
  }, []);

  const handleVote = async () => {
    var body = { candidateId: selected };
    const response = await DemoService.vote(body);
    if (response?.status === 200) {
      alert('투표가 완료되었습니다.');
    } else {
      alert('투표에 실패하였습니다. 다시 시도해주세요.');
    }
  };
  const navigate = useNavigate();

  const [services, setServices] = useState<IDemoService[]>();
  const [selected, setSelected] = useState<string>('0');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Headline>데모데이 투표</Headline>
      <SizedBox height={'50px'} />
      <Box
        sx={{
          display: 'flex',

          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: `calc(100% - 50px)`,
            gap: '5vh 7vw ',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 'auto',
          }}
        >
          {services?.map(({ name, description, candidateId }: IDemoService) => (
            <DemoCard
              key={name}
              title={name}
              description={description}
              onClick={() => setSelected(candidateId)}
              selected={candidateId == selected}
            />
          ))}
        </Box>
        <SizedBox height={`40px`} />
        <Box
          sx={{
            display: 'flex',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {' '}
          <MainBtn onClick={handleVote}>투표하기</MainBtn>
          <MainBtn onClick={() => navigate('/demo/result')}>결과보기</MainBtn>
        </Box>
      </Box>

      <SizedBox height={'5vh'} />
    </Box>
  );
};

export default DemoVotePage;
