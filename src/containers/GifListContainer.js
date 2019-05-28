import React, {Component} from 'react'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            gifs: []
        }
    }

  componentDidUpdate() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.props.query}&api_key=s8TKkOyA397yIY3UW90EgC4xUYo3ky1n&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({gifs: data.data})
        })  
  }

  render() {
      console.log(this.state.gifs)
        return (<div className="col-xs-6"><GifList gifs={this.state.gifs} /></div>)
  }

}