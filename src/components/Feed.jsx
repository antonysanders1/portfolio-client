import React, { Component } from 'react'
import { Grid, CssBaseline, Avatar, Typography } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Feed extends Component {
render() {
        return (
            <Grid container>
                {this.props.works.map((work) => 
                    <Grid container item xs={12} className={this.props.classes.workContainer} key={work.user + work.id}>
                        <CssBaseline/>
                    
                        <Grid item xs={1} md={2} lg={3}></Grid>

                        <Grid container item xs={10} md={8} lg={6} direction='column' className={this.props.classes.container}>
                            <Grid container className={this.props.classes.container}> 
                                <Grid item xs={2} lg={1}>
                                    <Avatar alt={`Profile Picture - ${work.user.name}`} src={`http://localhost:3000${work.user.avatar}`}></Avatar>
                                </Grid>

                                <Grid container item xs={9} lg={10} direction="column" className={this.props.classes.header}>
                                    <Grid item xs={12}>
                                        <Typography>{work.user.name}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>{work.title}</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container item xs={12} className={this.props.classes.imgContainer}>
                                    <img src={`http://localhost:3000${work.image}`} alt={work.title} className={this.props.classes.img}/>
                                </Grid>
                                <Grid container>
                                <Grid item xs={1}>
                                        <Avatar className={this.props.classes.unclickedBtn}>
                                            <FavoriteBorderIcon/>
                                        </Avatar>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography>0 Likes</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item xs={1} md={2} lg={3}></Grid>
                    </Grid>
                )}
            </Grid>
        )
    }
}

export default Feed;