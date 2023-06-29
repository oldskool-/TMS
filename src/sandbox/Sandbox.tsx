import * as React from 'react';

import { Button, TextField, Paper, Stack, Box  } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import DataGridDemo from './TestElement.tsx';
import LoadSpecification from './LoadSpecification.tsx';

import CustomizedAccordions from './AccordianTest.tsx';
import Paragraph from './ParagraphSand.jsx';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


  

export default function Sandbox() {

  const fullTextWidth = true
  const myLabel = "Paragraph: " + (Math.random()*10)
  return (
    <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <main>
          <LoadSpecification />
          <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <Item><Paragraph /></Item>
            <Item><Button variant="contained">Hello World</Button></Item>
            <Item><TextField
              id="outlined-multiline-flexible"
              label={ myLabel }
              fullWidth={ fullTextWidth }
              multiline
              maxRows={4}
            /></Item>
            <Item>
              Item 3
              <DataGridDemo />
            </Item>
          </Stack>
        </Box>
        <CustomizedAccordions />
      </main>
    </ThemeProvider>  
      
      
    </div>
  );
}
