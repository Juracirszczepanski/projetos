import 'bootstrap/dist/css/bootstrap.min.css';
import './../../style.css';
import './style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function CardsMusicas() {

    return (
      <Card sx={{ display: 'flex', boxShadow: '10px 10px 5px grey'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              1
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Music Name
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              Singer Name
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <MDBBtn className='btn-musicas' aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 36, width: 36 }} />
              Ouça Agora
            </MDBBtn>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Mac_Miller_Live_from_Space.jpg/220px-Mac_Miller_Live_from_Space.jpg"
          alt="Live from space album cover"
        />
      </Card> 
  );
}
