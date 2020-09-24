import React from 'react'
import {Avatar, Button, CssBaseline, TextField, Box, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {compose} from'recompose';
import {connect} from 'react-redux';

import {updateUser} from '../actions/actions'
import { DirectUpload } from 'activestorage';

import Copyright from './Copyright';

const styles = (theme) => ({
  root: {
    height: '90vh',
    overflow: 'hidden',
    overflowY: 'scroll',
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
  profileImage: {
      height: '120px',
      width: '120px',
      borderRadius: '50%',
  },
  line: {
      border: '1px solid #e8e8e8',
      width: '90%'
  },
});


class Account extends React.PureComponent {
    state= {
        user: this.props.user,
        avatar: {},
      }
      
      handleChange = (e) => {
        if (e.target.name === 'avatar') {
          this.setState({
            [e.target.name]: e.target.files[0]
          })
          console.log(e.target.files[0])
        } else {
          this.setState({
            [e.target.name]: e.target.value
          })
        }
      }
      
      handleUpdateImg = (e) => {
        e.preventDefault()
        console.log(this.props)
        this.uploadFile(this.state.avatar, this.props.user);  
      }

      handleUpdateInfo = (e) => {
        e.preventDefault()
        this.props.updateUser(this.state)
        this.setState({
          
        })  
      }

      uploadFile = (file, user) => {
          const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
          upload.create((error, blob) => {
            if (error) {
              alert(error)
            } else {
              fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PUT',
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                  'Accept': 'application/json'
                },
                body: JSON.stringify({avatar: blob.signed_id})
              })
              .then(res => res.json())
              .then(data => console.log(data))
              .then(window.location.reload())
            }
          })
        }
      
      render() {
        const {classes} = this.props;
        return (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={2} md={3}/>
            <Grid item xs={12} sm={8} md={6}>
              <div className={classes.paper}>
                <Typography component='h1' variant='h5'>
                    Account
                </Typography>
                <br/>
                <Avatar alt='profile image' src={`http://localhost:3000${this.props.user.avatar}`} className={classes.profileImage}></Avatar>
                <br/>
                <Typography component='h1' variant='h6'>Name: {this.props.user.name} - {this.props.user.title}</Typography>
                <Typography component='h1' variant='h6'>Email: {this.props.user.email}</Typography>
                <Typography component='h1' variant='body1'>About: {this.props.user.bio}</Typography>
                <br/>
                <hr className={classes.line} />
                <br/>
                <Typography component="h1" variant="h5">
                  Edit Account Info:
                </Typography>
                <br/>
                <form className={classes.form} onSubmit={this.handleUpdateImg} >
                  <input style={{display: 'none'}}
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={this.handleChange}
                    ref={fileInput => this.fileInput = fileInput}
                    />
                  <Button variant="contained" fullWidth onClick={() => this.fileInput.click()}>
                    Change Profile Image
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Save
                  </Button>

                </form>
                <br/>
                <hr className={classes.line} />
                <br/>
                <form className={classes.form} onSubmit={this.handleUpdateInfo} >
    
                <Grid container item>
                  <Grid item xs={12} md={6}>
                    <TextField onChange={this.handleChange}
                        multiline
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        defaultValue={this.props.user.name}
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
                       defaultValue={this.props.user.title}
                      />
                  </Grid>
                </Grid> 
                
    
    
                <TextField onChange={this.handleChange}
                    multiline
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="bio"
                    label="Bio"
                    name="bio"
                    defaultValue={this.props.user.bio}
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
                    defaultValue={this.props.user.email}
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Save
                  </Button>
                  
                  <Box mt={3}>
                    <Copyright/>
                  </Box>
                </form>
              </div>
            </Grid>
            <Grid item xs={false} sm={2} md={3}/>
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
  connect(mapState, {updateUser}),
)(Account);