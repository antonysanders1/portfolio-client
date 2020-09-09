import React from 'react'
//import { useHistory } from "react-router-dom";
import {Avatar, Button, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        height: '100%'
      },
    user: {
      marginBottom: '20px',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: "50%"
    },
    item: {
      marginBottom: '20px',
    },
    bottomBtn: {
        position: 'absolute',
        bottom: '10px',
        left: '0',
      },
  }));

const DashBoard = (props) => {
    console.log(props)
    //const history = useHistory()
    const classes = useStyles();
    return(
        <Grid container direction="column" className={classes.main}>
            <Grid container direction="row" className={classes.user}>
                <Grid item xs={5}>
                    <Avatar alt="Profile Picture" src={`http://localhost:3000${props.user.avatar}`} className={classes.image}/>
                </Grid>
                <Grid container item xs={7} direction="column"  justify="space-evenly">
                    <Grid>
                        <Typography variant="h6" bold="true">{props.user.name}</Typography>
                    </Grid>
                    <Grid>
                        <Typography>{props.user.title}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="caption">Portfolio size: {props.user.works.length}</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item>
                <Button fullWidth variant="contained" className={classes.item}>Home</Button>
                <Button fullWidth variant="contained" className={classes.item}>Profile</Button>
            </Grid>

            <Grid container item className={classes.bottomBtn}>
                <Button fullWidth variant="contained" className={classes.item}>About</Button>
            </Grid>

        </Grid>
    )
}

export default DashBoard