import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Instrument">
                <h1>{this.props.name}</h1>
                <img src= {`${this.props.url}`} alt={this.props.name} />
                <div>Type: {this.props.type} </div>
                <div>Age: {this.props.age} </div>
            </div>
        );
    }
}

export default Card;