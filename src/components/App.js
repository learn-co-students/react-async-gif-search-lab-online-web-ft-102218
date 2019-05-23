import React, {Component} from 'react'

import NavBar from './NavBar'
import GifSearch from './GifSearch'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

class App extends Component {
  constructor() {
    super()
    this.state = { gifQuery: '' }
  }

  query = ({search}) => {
    this.setState({
      gifQuery: search
    })
  }

  render() {
    return (
      <div>
          <NavBar color='black' title="Giphy Search" />
          <GifListContainer query={this.state.gifQuery} />
          <GifSearch returnQuery={this.query}/>
      </div>
    )
  }
}

export default App
