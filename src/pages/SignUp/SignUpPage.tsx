import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';

import { Headline } from '../../styles/Typography';
import { Button, MenuItem, TextField } from '@mui/material';

const SignUpPage = () => {
  const teamOptions = [
    { label: 'TherapEase', value: 'TherapEase' },
    { label: 'RePick', value: 'RePick' },
    { label: 'BariBari', value: 'BariBari' },
    { label: 'Hooking', value: 'Hooking' },
    { label: 'Dansupport', value: 'Dansupport' },
  ];

  const partOptions = [
    { label: 'FRONTEND', value: 'fe' },
    { label: 'BACKEND', value: 'be' },
  ];

  const [teamName, setTeamName] = useState<string>('');
  const [partName, setPartName] = useState<string>('');

  return (
    <Wrapper>
      <Headline
        color="#ffff"
        style={{ width: 'calc(30% + 8rem)', textAlign: 'start' }}
      >
        회원가입
      </Headline>
      <FormWrapper>
        <TextField
          required
          id="userName"
          label="이름"
          variant="outlined"
          size="small"
          fullWidth={true}
        />
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
        <TextField
          required
          id="passwordValidation"
          label="비밀번호 확인"
          type="password"
          variant="outlined"
          size="small"
          fullWidth={true}
        />
        <TextField
          required
          id="userEmail"
          label="이메일 주소"
          variant="outlined"
          size="small"
          fullWidth={true}
        />

        <div className="select-box-wrapper">
          <TextField
            id="teamName"
            required
            select
            label="팀 명"
            value={teamName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTeamName(event.target.value);
            }}
            variant="filled"
            size="small"
            sx={{ width: '190px' }}
          >
            {teamOptions.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="partName"
            required
            select
            label="파트"
            value={partName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPartName(event.target.value);
            }}
            variant="filled"
            size="small"
            sx={{ width: '190px' }}
          >
            {partOptions.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '150px', marginTop: '1rem' }}
        >
          가입하기
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
  padding: 2rem 4rem;
  background-color: #ffff;
  border-radius: 1.25rem;
  border: 3px solid #fff;
  gap: 1rem;

  .select-box-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export default SignUpPage;
