import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#384084',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#ffff',
            backgroundColor: '#384084',
            '&:hover': {
              color: '#ffff',
              backgroundColor: '#38408480',
            },
          },
        },
      ],
    },
  },
});

export default theme;
