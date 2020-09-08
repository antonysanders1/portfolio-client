import React from 'react';
import {Container, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Box, Grid, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';

import Copyright from './Copyright'

import { connect } from 'react-redux';
import { loginUser } from '../actions/actions';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});



class Login extends React.Component {
  
  state = {
    email: "",
    password: ""
}

  onInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state, () => {
        this.props.history.push("/home");
    });

    this.setState({
        email: "",
        password: ""
    });
  };


  render(){
    const {classes} = this.props;
    // console.log(this.props)
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.onFormSubmit}>
            <TextField onChange={this.onInputChange}
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
            <TextField onChange={this.onInputChange}
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default compose(
  withStyles(styles, {
      name: 'App',
  }),
  connect(null, {loginUser}),
)(Login);