import React from 'react'
import {Button, CssBaseline, TextField, Box, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {compose} from'recompose';
import {connect} from 'react-redux';
import {getUser, getWorks, createWork} from '../actions/actions'

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


class UploadNewWorks extends React.Component {
    state= {
        id: '',
        title: '',
        description: '',
        user_id: '',
        image: {},
      }
      
      handleChange = (e) => {
        if (e.target.name === 'image') {
          this.setState({
            [e.target.name]: e.target.files[0],
            id: this.props.works[0].id + 1,
            user_id: this.props.user.id
          })
          console.log(e.target.files[0])
        } else {
          this.setState({
            [e.target.name]: e.target.value
          })
        }

      }
      
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.createWork(this.state)
        //console.log(this.props.works[0])
        this.uploadFile(this.state.image, this.state);
        this.setState({
            id: '',
            title: '',
            description: '',
            user_id: '',
            image: '',
          })
        
         
        
      }

      uploadFile = (file, work) => {
          console.log(work)
          const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
          upload.create((error, blob) => {
            if (error) {
              alert(error)
            } else {
              fetch(`http://localhost:3000/works/${work.id}`, {
                method: 'PUT',
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                  'Accept': 'application/json'
                },
                body: JSON.stringify({image: blob.signed_id})
              })
              .then(res => res.json())
              .then(data => console.log(data))
              .then(alert('Your new Work was uploaded!'))
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
                <br/>
                <Typography component="h1" variant="h5">
                  Upload New Work:
                </Typography>
                
                <br/>
                <hr className={classes.line} />
                <br/>
                <form className={classes.form} onSubmit={this.handleSubmit} >
                    <input style={{display: 'none'}}
                        type="file"
                        id="image"
                        name="image"
                        onChange={this.handleChange}
                        ref={fileInput => this.fileInput = fileInput}
                        />
                    <Button variant="contained" fullWidth onClick={() => this.fileInput.click()}>
                        Select your image
                    </Button>

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    onChange={this.handleChange}
                    autoFocus
                  />
                  
                  <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    onChange={this.handleChange}
                    autoFocus
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

const mapState = ({ user, works }) => {
  return {
      user, works
  }
}

export default compose(
  withStyles(styles, {
      name: 'App',
  }),
  connect(mapState, {getUser, getWorks, createWork}),
)(UploadNewWorks);