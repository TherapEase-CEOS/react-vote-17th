import React from 'react';
import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';

import { Headline } from '../../styles/Typography';
import { Button, TextField } from '@mui/material';

const LoginPage = () => {
  return (
    <Wrapper>
      <Headline
        color="#ffff"
        style={{ width: 'calc(30% + 8rem)', textAlign: 'start' }}
      >
        로그인
      </Headline>
      <FormWrapper>
        <TextField
          required
          id="userId"
          label="아이디"
          variant="outlined"
          size="small"
          fullWidth={true}
        />
        <TextField
          required
          id="userPassword"
          label="비밀번호"
          type="password"
          variant="outlined"
          size="small"
          fullWidth={true}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '150px', marginTop: '1rem' }}
        >
          로그인
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--ceos-blue-color);
`;

const FormWrapper = styled.form`
  width: 30%;
  // height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem 3rem 4rem;
  background-color: #ffff;
  border-radius: 1.25rem;
  border: 3px solid #fff;
  gap: 1rem;
`;

export default LoginPage;
