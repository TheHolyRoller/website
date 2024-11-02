'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import tc from '../Styles/TextCard.module.css'; 





export default function MuiCard({image, text}) {
 return (
   <Card id={tc.textCard}   sx={{ maxWidth: 365 }}>
     {/* <CardMedia
       sx={{ height: 260 }}
       title="cute kitten"
     /> */}
      

      <Image className={tc.image}  src={image} alt='vision' width={50} height={50}/> 
      


     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        {/* {props.title}  */}
         {/* Teams  */}
       </Typography>
       <Typography variant="body2" color="text.secondary" style={{fontWeight: '800'}} >
       {text}
       
      {/* Everyday our amazing teams work together to make our church happen  */}
      
       </Typography>
     </CardContent>
     <CardActions>
       {/* <Button size="small">Share</Button>
       <Button size="small">Learn More</Button> */}
     </CardActions>
   </Card>
 );
 
}