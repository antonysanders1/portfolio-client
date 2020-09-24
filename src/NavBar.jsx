import React from 'react';
import {NavLink} from 'react-router-dom'
import {Grid, Typography, Divider, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import {getUser, logoutUser} from './actions/actions'

const styles = () => ({
    navLogo: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '40px',
      fontWeight: 'bold'
    },
    naviBar: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '40px',
        fontWeight: 'bold'
      },
  });


class NavBar extends React.PureComponent {
    
    state = {};

  handleClick = () => {
   this.props.logoutUser();
   console.log(this.props)
  }

    componentDidMount() {
        this.props.getUser()
    }

  render(){
    const {classes} = this.props;
    return (
      <div>
        <Grid container direction="column" className={classes.naviBar}>
            <Grid item xs={12} container >
            
                <Grid item md={1}> </Grid>


                <Grid item xs={6} sm={5} md={3} lg={3}>
                <Typography className={classes.navLogo} variant='h5'>Portfoli-Yo!</Typography>
                </Grid>

                <Grid item sm={1} md={1} lg={5}> </Grid>

                <Grid item xs={2} sm={2} md={2} lg={1}> 
                    {
                      this.props.user.name ? <Button fullWidth color='primary' component={NavLink} to="/home">Home</Button> :
                      <Button fullWidth color='primary' component={NavLink} to="/">Home</Button>
                    } 
                </Grid>

                <Grid item xs={2} sm={2} md={2} lg={1}>
                    {
                      this.props.user.name ? <Button fullWidth color='primary' component={NavLink} to={`/${this.props.user.name}`}>Profile</Button> :
                      <Button fullWidth color='primary' component={NavLink} to="/about">About</Button>
                    }
                </Grid>

                <Grid item xs={2} sm={2} md={2} lg={1}>
                    {
                    this.props.user.name ? <Button fullWidth color='primary' variant="contained" component={NavLink} to="/" onClick={this.handleClick}>Logout</Button> : 
                    <Button fullWidth color='primary' variant="contained" component={NavLink} to="/login">Login</Button>
                    } 
                </Grid>       
            </Grid>
            <Divider/>
        </Grid>
      </div>
    );
  }
}

const mapState = ({user}) => {
    return {
        user
    }
}

export default compose(
  withStyles(styles, {name: 'App',}),
  connect(mapState, {getUser,logoutUser}))(NavBar);