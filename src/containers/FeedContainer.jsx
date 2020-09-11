import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';

import DashBoard from '../components/Dashboard'
import Feed from '../components/Feed'


const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section1: {
    background: "#e8e8e8",
    height: '90vh',
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    border: 'solid, black, 1px'
  },
  section2: {
    height: '90vh',
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  pgTitle: {
    marginTop:'20px',
    marginBottom: '20px',
    fontWeight: 'bold'
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
  },
  container: {
    height: '100%'  
  },
  workContainer: {
    height: '70vh',
    padding: theme.spacing(1),
    marginBottom: '30px',
    // overflow: 'hidden',
    flexGrow: 1,
  },
  imgContainer: {
    height: '80%',
    width: '100%',
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#e8e8e8'
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  },
  unclickedBtn: {
    height: '24px',
    width: '24px',
    background: 'none',
    color: 'grey'
  },
  header: {
    display: 'block',
    marginLeft: '10px'
  }
});

class FeedContainer extends React.PureComponent {
    componentDidMount() {
      console.log(this.props)
    }

    render() {
        const {classes} = this.props;
        return(
            <Grid container>

                <Grid container item className={classes.section1} direction="row" xs={12} sm={6} md={4} lg={3} xl={3}>
                  <Grid container item direction="column">
                    <DashBoard 
                      classes ={classes}
                      user={this.props.user}
                    />
                  </Grid>
                </Grid>
                <Grid container item className={classes.section2} direction="row"xs={12} sm={6} md={8} lg={9} xl={9}>
                  <Grid container item xs={12} alignItems="center" justify="center" className={classes.pgTitle} >
                    <Typography variant='h4'>FEED</Typography>
                  </Grid>
                  <Feed
                    classes ={classes}
                    works={this.props.works}
                  />
                </Grid>
            </Grid>
            
        )
    }
}

const mapState = ({user, works}) => {
  return {user, works}
}

export default compose(
  withStyles(styles, {
      name: 'App',
  }),
  connect(mapState),
)(FeedContainer);