import React, {Component} from 'react'
import {render} from 'react-dom'

import {Button} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>ui-framework Demo</h1>
      <Button/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
