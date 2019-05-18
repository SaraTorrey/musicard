import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Instrument">
                <h1 className="Card-title">{this.props.name}</h1>
                <div className="Card-image">
                    <img src= {`${this.props.url}`} alt={this.props.name} />
                </div>
                <div className="Card-data">Type: {this.props.type} </div>
                <div className="Card-data">Age: {this.props.age} </div>
            </div>
        );
    }
}

export default Card;