import React, { Component } from 'react'
import Loading from './Loading.svg'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img width="true"  src={Loading} alt="Loading"  />
      </div>
    )
  }
}

export default Spinner
