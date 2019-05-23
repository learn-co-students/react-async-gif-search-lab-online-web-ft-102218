import React, {Component} from 'react'

const floatRight = {
    float: 'right',
    margin: '0 15px 0 0',
}

const inputStyle = {
    width: '300px'
}

export default class GifSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    handleInputChange = event => {
        this.setState( {
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        if(this.state.search != '') {
            this.props.returnQuery(this.state)
        }
    }

    render() {
        return (
            <div className="col-xs-6">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <strong><span>Enter a Search Term:</span></strong><br/>
                    <input style={inputStyle} name="search" type="text" onChange={event => this.handleInputChange(event)} value={this.state.search} /><br />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}