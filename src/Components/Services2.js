import * as React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import service from '../Assets/service.jpg';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box  sx={{ width: '100%' }}>
        <h1>Services We Offer</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <Item class = "grid-cont">
              <h1>Website Design and Development</h1>
              <p>InSoftLink Software holds expertise in designing fresh and innovative websites. Whether you want a static, dynamic or responsive website our expert graphic designers and developers deliver the best possible solutions to the clients.</p>
              <Button variant="contained" >Know More</Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item class ="img-flex">
              <img src = {service}></img>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item class = "grid-cont">
        <h2>
              iOS App Development
              </h2>
              <p>
              We are successfully delivering the iOS apps with the use of cutting edge-technologies, and expertise knowledge. Our iOS apps are giving user better experience, that is easy to use and user friendly.</p>
              <Button variant="contained" >Know More</Button>
         
          
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item class ="img-flex">
              <img src = {service}></img>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item class = "grid-cont">
              <h1>
              Android App Development
              </h1>
              <p>
              The demand for Android is continuously increasing at an exponential rate. The android apps developed by us works best and are a reliable source of generating more business.


              </p>
              <Button variant="contained" >Know More</Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item class ="img-flex">
          <img src = {service}></img>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item class = "grid-cont">
          <h1>Software Development</h1>
          <p>InSoftLink Software helps to serve you the innovative agile and competitive services in software development. Our software team helps you to get efficient software for your business process.</p>
          <Button variant="contained" >Know More</Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
         
         
        <Item class ="img-flex">
          <img src = {service}></img>
          </Item>
          
        </Grid>
        <Grid item xs={6}>
          <Item class = "grid-cont">
          <h1>
          SEO and Marketing
          </h1>
          <p>
          Search Engine Optimisation and Digital Marketing as referred to the dawn of the new era of marketing, the technique which helps to articles and blogs on the web pages to reach the top of the search Engines. InSoftLink Software is delivering digital marketing solutions, with the SEO experts and expertise individual who are working for many years in the respective domain.
          </p>
          <Button variant="contained" >Know More</Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item class ="img-flex">
          <img src = {service}></img>
          </Item>
        </Grid>
        <Grid item xs={6}>
        
        <Item class = "grid-cont">
          <h1>
          Content Writing
          </h1>
          <p>
          Content defines the marketing strategy; it delivers a lot about your business. Effective delivered content is able to attract the potential clients as well as expanding the access to expand in the market. InSoftLink Software delivers excellent content writing services that are now gaining a lot of importance in the market.
          </p>
          <Button variant="contained" >Know More</Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
        <Item class ="img-flex">
          <img src = {service}></img>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
