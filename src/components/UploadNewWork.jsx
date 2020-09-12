import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

class UploadNewWork extends Component {
   
    state = {
        title: '',
        description: '',
       // user_id: this.props.user.id,
        image: '',

    }
render() {
    return (
        <div>
          Hello from the Upload New Works Page      
        </div>
        )
    }
}

export default UploadNewWork