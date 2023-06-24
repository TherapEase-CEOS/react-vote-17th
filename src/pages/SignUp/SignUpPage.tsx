import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import styled from '@emotion/styled';

import { Headline, ValidationErrorText } from '../../styles/Typography';
import { Button, MenuItem, TextField } from '@mui/material';

import { REGEX } from '../../utils/regex';

import { PART_OPTIONS, TEAM_OPTIONS } from '../../constants/selectOptions';

interface signupFormValues {
  userName: string;
  userId: string;
  userPassword: string;
  passwordCheck: string;
  userEmail: string;
  teamName: string;
  partName: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signupFormValues>();

  const [checkPasswordMessage, setCheckPasswordMessage] = useState<
    string | null
  >(null);

  const checkPassword = (e: any) => {
    if (e.target.value === watch('userPassword')) {
      setCheckPasswordMessage(null);
    } else {
      setCheckPasswordMessage('비밀번호가 일치하지 않습니다.');
    }
  };

  const onSubmit: SubmitHandler<signupFormValues> = (data) => {
    // TODO - api 연동
    console.log(data);
  };

  return (
    <Wrapper>
      <Headline
        color="#ffff"
        style={{ width: 'calc(30% + 8rem)', textAlign: 'start' }}
      >
        회원가입
      </Headline>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="userName"
          label="이름"
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userName', {
            required: { value: true, message: '*이름을 입력해주세요.' },
          })}
        />
        <ValidationErrorText>{errors?.userName?.message}</ValidationErrorText>

        <TextField
          id="userId"
          label="아이디"
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userId', {
            required: { value: true, message: '*아이디를 입력해주세요.' },
          })}
        />
        <ValidationErrorText>{errors?.userId?.message}</ValidationErrorText>

        <TextField
          id="userPassword"
          label="비밀번호"
          type="password"
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userPassword', {
            required: { value: true, message: '*비밀번호를 입력해주세요.' },
            pattern: {
              value: REGEX.password,
              message: '*비밀번호: 8~16자 영문 대소문자, 숫자를 입력해주세요.',
            },
          })}
        />
        <ValidationErrorText>
          {errors?.userPassword?.message}
        </ValidationErrorText>

        <TextField
          id="passwordCheck"
          label="비밀번호 확인"
          type="password"
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('passwordCheck', {
            required: {
              value: true,
              message: '*비밀번호를 한 번 더 입력해주세요.',
            },
            onChange: checkPassword,
          })}
        />
        <ValidationErrorText>
          {checkPasswordMessage ?? errors?.passwordCheck?.message}
        </ValidationErrorText>

        <TextField
          id="userEmail"
          label="이메일 주소"
          variant="outlined"
          size="small"
          fullWidth={true}
          {...register('userEmail', {
            required: { value: true, message: '*이메일을 입력해주세요.' },
            pattern: {
              value: REGEX.email,
              message: '*이메일 형식을 입력해주세요.',
            },
          })}
        />
        <ValidationErrorText>{errors?.userEmail?.message}</ValidationErrorText>

        <SelectBoxWrapper>
          <div>
            <TextField
              id="teamName"
              select
              label="팀 명"
              defaultValue=""
              variant="filled"
              size="small"
              sx={{ width: '9rem' }}
              {...register('teamName', {
                required: { value: true, message: '*팀을 선택해주세요.' },
              })}
            >
              {TEAM_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <ValidationErrorText>
              {errors?.teamName?.message}
            </ValidationErrorText>
          </div>
          <div>
            <TextField
              id="partName"
              select
              label="파트"
              defaultValue=""
              variant="filled"
              size="small"
              sx={{ width: '9rem' }}
              {...register('partName', {
                required: { value: true, message: '*파트를 선택해주세요.' },
              })}
            >
              {PART_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <ValidationErrorText>
              {errors?.partName?.message}
            </ValidationErrorText>
          </div>
        </SelectBoxWrapper>

        <Button
          type="submit"
          variant="contained"
          sx={{ width: '10rem', marginTop: '1rem' }}
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
`;
const SelectBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default SignUpPage;
