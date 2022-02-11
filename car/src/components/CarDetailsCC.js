import React, { Component } from 'react'

export default class CarDetailsCC extends Component {
  render() {

    const car = this.props.data.route.data;
    const {id} = this.props.data.match.params;


    
    return (
      <div>CarDetailsCC</div>
    )
  }
}
