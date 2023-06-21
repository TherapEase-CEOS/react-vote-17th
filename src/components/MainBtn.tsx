import React from 'react';
import styled from '@emotion/styled';
import { ButtonText } from '../styles/Typography';
import { Button } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MainBtn: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        width: '200px',
        height: '50px',
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
