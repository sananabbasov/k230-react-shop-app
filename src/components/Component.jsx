import React from 'react'
import SubComponent from './SubComponent'

function Component({name}) {
  return (
    <div>
        Component {name}
        <SubComponent num={3} tesName={name}/>
    </div>
  )
}

export default Component