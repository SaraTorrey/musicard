import React, {Component} from 'react';

class Instrument extends Component {
    render() {
        return (
            <div className="Instrument">
                <h1>{this.props.name}</h1>
                <img src= {`${this.props.url}`}/>
            </div>
        );
    }
}

export default Instrument;