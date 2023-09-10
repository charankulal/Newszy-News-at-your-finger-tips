import React from 'react'
import Loading from './Loading.svg'

const Spinner=()=> {
  
    return (
      <div className="text-center m-4">
        <img width="true"  src={Loading} alt="Loading"  />
      </div>
    )
  
}

export default Spinner
