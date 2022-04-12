import React, { Component } from 'react'
import './App.css';
import Info from './info.js'

import { useNavigate, Navigate, Redirect } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 4
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  val: function sound() {

    console.log('hi')

  }()


}));

class Leads extends Component {
  constructor(props) {
    super(props)
    this.state = {

      accountName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      website: ''


    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }


  handleInputChange = e => {

    this.setState({
      [e.target.name]: e.target.value,



    })
  };



  async handleSubmit(e) {
    
    //e.preventDefault();

    const { accountName, lastName, email, phone, company, website } = this.state;
    const account = {
      accountName,
      lastName,
      email,
      phone,
      company,
      website
    }

    console.log(account)
    console.log(JSON.stringify(account))



    try {

      const response = await fetch('http://localhost:9000/testAPI', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
      }).then(res => res.json())
        .then((data) => console.log(data))
        .finally(() => {

          window.history.replaceState({}, "", 'http://localhost:3000/info')


        })


      if (!response.success) throw response.status
    } catch (err) {

      console.log(err)
    }

  };


  render() {

    const { classes } = this.props

    return (

      <Container component='main' maxWidth='xs' justifycontent='left'>

        <CssBaseline />
        <div className={this.props.paper} >
          <Avatar className={this.props.avatar}>
          </Avatar>


          <Typography component="p" variant="h6" align="center" color="primary">
            Interested? Sign Up!
          </Typography>



          <form onSubmit={this.handleSubmit} className={this.props.form} noValidate>

            <Grid
              container
              spacing={2}
              justifyContent="flex-end">

              <Grid item xs={12} sm={6} >
                <TextField
                  value={this.state.accountName}
                  onChange={this.handleInputChange}
                  autoComplete="fname"
                  name="accountName"
                  variant="outlined"
                  required
                  fullWidth
                  // id="username"
                  label="FirstName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  variant="outlined"
                  required
                  fullWidth
                  // id="email"
                  label="LastName"
                  name="lastName"
                // autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  // type="text"
                  variant="outlined"
                  required
                  fullWidth
                  // id="phone_number"
                  label="email"
                  name="email"
                // autoComplete="phone_number"

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  // type="phone"
                  id="phone"
                // autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.company}
                  onChange={this.handleInputChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="company"
                  type="text"
                  label="Company"
                  id="company"
                // autoComplete="current-password"
                />


              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.website}
                  onChange={this.handleInputChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="website"
                  type="text"
                  label="Website"
                  id="website"
                // autoComplete="current-password"
                />


              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive  marketing promotions and updates via email."
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">

              {/* <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid> */}
            </Grid>
          </form>
        </div>

      </Container>

    )


  }


}





export default Leads;