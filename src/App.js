import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {updateUser} from './actions/users-action'



import {bindActionCreators} from 'redux';



class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    console.log('Props:adfasdfsafdasfsa ',this.props);
    return (
      <div>
        ABC
        <input onChange={this.onUpdateUser}/>
        {this.props.user}
      </div>
    );
  }
}


const mapStateToProps = (state,props)=>{
  console.log("props what: ",props);
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  }
}


const mapActionsToProps = (dispatch,props)=>{
  console.log("OKKKKKK",props);
  return bindActionCreators({
    onUpdateUser: updateUser
  },dispatch);
}


//export default App;
// export default connect(function(state){
//   return {products: state.products,user: state.user}
// })(App);

const mergeProps=(propsFromState,propsFromDispatch,ownProps)=>{
  console.log("AAAAAAA: ",propsFromState,propsFromDispatch,ownProps);
  console.log("AAAAAAA: ",propsFromState);
  console.log("BBBBBBB: ",propsFromDispatch);
  console.log("CCCCCCC: ",ownProps);
  return{};
}

export default connect(mapStateToProps,mapActionsToProps,mergeProps)(App);
