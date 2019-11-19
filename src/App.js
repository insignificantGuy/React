import React, { Component } from 'react';
import './first.css';

class first extends Component {
  render(){
  var a={
    height:100,
    width:500,
    fontSize:20,
    backgroundColor:'black',
    textAlign:'center'
  };
    return (
      <div style={a}>
    <p>
      This is my first Code in React.
    </p>
    {/*comment in JSX*/}
    </div>
    );
}
}

export default first;
