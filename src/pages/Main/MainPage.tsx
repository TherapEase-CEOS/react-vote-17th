import React from 'react';
import { Headline } from '../../styles/Typography';
import SelectBtn from '../../components/SelectBtn';
import { Box } from '@mui/material';
const MainPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',

        width: '100%',
        height: '100%',
      }}
    >
      <Headline>파트장 / 데모데이 투표</Headline>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '150px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <SelectBtn
          title="파트장 투표 바로가기"
          onClick={() => console.log('click')}
        />
        <SelectBtn
          title="데모데이 투표바로가기"
          onClick={() => console.log('click')}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
