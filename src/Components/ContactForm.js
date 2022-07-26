import React from 'react';

import Grid from '@mui/material/Grid';
import  TextField from '@mui/material/TextField';
import   Button  from '@mui/material/Button';
import   Card  from '@mui/material/Card';
import   CardContent from '@mui/material/CardContent';
import   Typography from '@mui/material/Typography';


export default function ContactForm() {


  return (
    <div className="Contact"> 
      <Typography gutterBottom variant="h3" align="center">
        GET IN TOUCH!
        </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            <h6>FILL THE FORM AND LET US KNOW ABOUT your REQUIREMENTS!</h6>
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter your first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter your second name" label="Second Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

