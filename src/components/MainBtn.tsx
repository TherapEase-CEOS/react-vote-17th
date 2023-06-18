import React from 'react';
import styled from '@emotion/styled';
import { ButtonText } from '../styles/Typography';
import { Button } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
/*

   
  width: 250px;
  height: 70px;
  border: none;
  border-radius: 20px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : 'var(--ceos-blue-color)'};
    ,
    */

const MainBtn: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        width: '250px',
        height: '70px',
        border: 'none',
        borderRadius: '20px',
      }}
      onClick={onClick}
      variant="contained"
    >
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default MainBtn;
