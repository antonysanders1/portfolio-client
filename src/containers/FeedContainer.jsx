import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

//import {getUser, logoutUser} from '../actions/actions';

import DashBoard from '../components/Dashboard'
import Feed from '../components/Feed'


const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
      background: "red",
      height: '90vh',
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      border: 'solid, black, 1px'
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
  profile: {
    height: "20%",
    background: "blue"
}
});

class FeedContainer extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const {classes} = this.props;
        return(
            <Grid container>

                <Grid container item className={classes.section} direction="row" xs={12} sm={6} md={4} lg={3} xl={3}>
                  <Grid container item direction="column">
                    <DashBoard 
                      classes ={classes}
                      user={this.props.user}
                    />
                  </Grid>
                </Grid>
                <Grid container item direction="row"xs={12} sm={6} md={8} lg={9} xl={9}>
                  <Feed/>
                </Grid>
            </Grid>
            
        )
    }
}

const mapState = ({user}) => {
  return {user}
}

export default compose(
  withStyles(styles, {
      name: 'App',
  }),
  connect(mapState),
)(FeedContainer);