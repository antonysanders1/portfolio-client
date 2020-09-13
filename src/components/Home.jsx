import React from 'react';
import {Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Box, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {compose} from'recompose';
import {connect} from 'react-redux';
import {createUser} from '../actions/actions';

import Copyright from './Copyright';

const styles = (theme) => ({
  root: {
    height: '90vh',
  },
  image: {
    backgroundImage: 'url(https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/4172/images/S1RZzLIaTBuEx0LcJt9g_PYRAMID-SCENE3-RETOUCH-1400_1250_preview.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(0, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
  },
});




class Home extends React.Component {
  
  state= {
    name: '',
    title: '',
    bio: '',
    email: '',
    password: '',
  }
  
  handleChange = (e) => {
    // if (e.target.name === 'avatar') {
    //   this.setState({
    //     [e.target.name]: e.target.files[0]
    //   })
    // } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    // }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createUser(this.state, ()=> {
      if(!this.props.user.error) {
        this.props.history.push('/home')
      }
    })
    this.setState({

    })
  }
  
  render() {
    const {classes} = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>

            <Grid container item>
              <Grid item xs={12} md={6}>
                <TextField onChange={this.handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                  />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField onChange={this.handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    placeholder="e.g Software Engineer"
                    autoFocus
                  />
              </Grid>
            </Grid> 
            


            <TextField onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                placeholder="A little something about you.."
                autoFocus
              />
              
              <TextField onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={3}>
                <Copyright/>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );

  }
}

const mapState = ({ user }) => {
  return {
      user
  }
}

export default compose(
  withStyles(styles, {
      name: 'App',
  }),
  connect(mapState, {createUser}),
)(Home);