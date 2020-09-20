import React from 'react';
import NavBar from './NavBar';
//import { ThemeProvider } from '@material-ui/core';
import {connect} from 'react-redux'
import {getUser, getWorks} from './actions/actions';


class App extends React.PureComponent {

  componentDidMount(){
    this.props.getUser()
    this.props.getWorks()
  }

  render(){
    return (
      <div className="App">
        <NavBar 
          user={this.props.user}
          works={this.props.works}
        />
      </div>
    ); 
  }
}

const mapState = ({user, works}) => {
  return {
      user, works
  }
}

export default connect(mapState, {getUser, getWorks})(App);
