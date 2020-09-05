import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Grid, Typography, Divider, Button} from '@material-ui/core'

import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'


class NavBar extends React.Component {
  render(){
    return (
      <div>
          <Router>
                    <Grid container direction="column">
                        <Grid item xs={12} container spacing={2}>
                        
                            <Grid item lg={1}> </Grid>


                            <Grid item xs={4} sm={3} md={2}>
                            <Typography className="link" variant='h5'>Portfoli-Yo!</Typography>
                            </Grid>

                            <Grid item sm={2} md={3} lg={6}> </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={1}>  
                                <Button fullWidth color='primary' component={Link} to="/">Home</Button>
                            </Grid>

                            <Grid item xs={3} sm={2} md={2} lg={1}>
                                <Button fullWidth color='primary' component={Link} to="/about">About</Button>
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={1}>
                                <Button fullWidth color='primary' component={Link} to="/login">Login</Button>
                            </Grid>       
                        </Grid>
                        <Divider/>
                    </Grid>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
            </Router>
      </div>
    );
  }
}

export default NavBar;