import React from 'react';
import NavBar from './NavBar';
//import { ThemeProvider } from '@material-ui/core';
import {connect} from 'react-redux'
import {getUser} from './actions/actions';


class App extends React.PureComponent {

  componentDidMount(){
    this.props.getUser()
  }

  render(){
    return (
      <div className="App">
        <NavBar user={this.props.user}/>
      </div>
    ); 
  }
}

const mapState = ({user}) => {
  return {
      user
  }
}

export default connect(mapState, {getUser})(App);
