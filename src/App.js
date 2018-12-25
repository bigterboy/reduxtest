import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {updateUser} from './actions/users-action'



class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(){
    this.props.onUpdateUser('SAMMY');
  }
  render() {
    //console.log('afbcc',this.props);
    return (
      <div>
        ABC
        <div onClick={this.onUpdateUser}>UPDATE USER</div>
        {this.props.user}
      </div>
    );
  }
}


const mapStateToProps = state=>{
  return {
    products: state.products,
    user: state.user
  }
}


const mapActionsToProps ={
  onUpdateUser: updateUser
}


//export default App;
// export default connect(function(state){
//   return {products: state.products,user: state.user}
// })(App);



export default connect(mapStateToProps,mapActionsToProps)(App);
