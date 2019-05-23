import React, {Component} from 'react'


class GifList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gifs: this.props.gifs
        }
    }

    render() {
        return(
            <ul>
                {this.state.gifs.map(gif => (
                <li><img src={gif.url} /></li>
                ))}
            </ul>
        )
    }
}

export default GifList