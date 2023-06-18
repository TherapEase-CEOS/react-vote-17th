import React from 'react';
import styled from '@emotion/styled';
import { ButtonText } from '../styles/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Headline } from '../styles/Typography';

interface SelectBoxProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; //(e: MouseEvent<Element, MouseEvent>) => void
}
const SelectBox: React.FC<SelectBoxProps> = ({ title, onClick }) => {
  return (
    <Button
      sx={{
        width: '350px',
        height: '350px',
        backgroundColor: 'primary.white',
        border: '2px solid ',
        borderColor: 'primary.main',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary.main',
        padding: '20px 10px',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          cursor: 'pointer',
          color: 'white',
        },
      }}
      onClick={onClick}
    >
      <Headline inherit>{title}</Headline>
    </Button>
  );
};

export default SelectBox;
