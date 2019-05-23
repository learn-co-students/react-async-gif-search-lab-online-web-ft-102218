import React, {Component} from 'react'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            gif: [],
            URL: `http://api.giphy.com/v1/gifs/search?q=${this.props.query}&api_key=s8TKkOyA397yIY3UW90EgC4xUYo3ky1n&rating=g`
        }
    }

  componentDidMount() {
        fetch(`${this.state.URL}`)
        .then(response => response.json())
        .then(gifs => {
            this.setState({gif: gifs})
        })  
  }

  loadGifs = () => {
    <GifList gifs={this.state.gif} />
  }

  render() {
      console.log(this.state.gif)
    //if(this.state.gifs.length > 0 ) {
        return (<div className="col-xs-6">{this.loadGifs}</div>)
    //} else {
       // return null
    //}
  } //gifs={this.state.gifs}
}