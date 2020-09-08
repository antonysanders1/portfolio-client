import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Grid, Typography, Divider, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import UserContainer from './containers/UserContainer';

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


class NavBar extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

  render(){
    const {classes} = this.props;
    return (
      <div>
          <Router>
                    <Grid container direction="column" className={classes.naviBar}>
                        <Grid item xs={12} container >
                        
                            <Grid item md={1}> </Grid>


                            <Grid item xs={6} sm={5} md={3} lg={3}>
                            <Typography className={classes.navLogo} variant='h5'>Portfoli-Yo!</Typography>
                            </Grid>

                            <Grid item sm={1} md={1} lg={5}> </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={1}> 
                                {
                                  this.props.user.length > 0 ? null :
                                  <Button fullWidth color='primary' component={Link} to="/">Home</Button>
                                } 
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={1}>
                                {
                                  this.props.user.length > 0 ? null :
                                  <Button fullWidth color='primary' component={Link} to="/about">About</Button>
                                }
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={1}>
                                {
                                this.props.user.length > 0 ? <Button fullWidth color='primary' component={Link} to="/">Logout</Button> : 
                                <Button fullWidth color='primary' component={Link} to="/login">Login</Button>
                                } 
                            </Grid>       
                        </Grid>
                        <Divider/>
                    </Grid>
                    <Switch>
                        <Route path="/home" exact component={UserContainer} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/about" exact component={About} />
                        <Route path="/" exact component={Home} />
                    </Switch>
            </Router>
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
  connect(mapState))(NavBar);