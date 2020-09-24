import React from 'react';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser, getWorks} from './actions/actions';

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Account from './components/Account';
import UploadNewWork from './components/UploadNewWork';
import FeedContainer from './containers/FeedContainer';
import ProfileContainer from './containers/ProfileContainer';


class App extends React.PureComponent {

  componentDidMount(){
    this.props.getUser()
    this.props.getWorks()
  }

  render(){
    return (
      <Router>
        <div className="App">
          <NavBar 
            user={this.props.user}
            works={this.props.works}
          />
        </div>
        <Switch>
            <Route path="/home" exact component={FeedContainer} />
            <Route path={`/${this.props.user.name}`} exact component={ProfileContainer} />
            <Route path="/account" exact component={Account} />
            <Route path="/upload" exact component={UploadNewWork}/>
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    ); 
  }
}

const mapState = ({user, works}) => {
  return {
      user, works
  }
}

export default connect(mapState, {getUser, getWorks})(App);
