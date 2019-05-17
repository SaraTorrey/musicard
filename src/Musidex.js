import React, {Component} from 'react';
import Card from './Card';

class Musidex extends Component {
    static defaultProps = {
        instrument : [
            {id: 1, name: 'Bagpipes', type: 'woodwind', age: 350, url: 'https://images-na.ssl-images-amazon.com/images/I/61xwe6wcpYL._SX466_.jpg'},
            {id: 2, name: 'Cello', type: 'string', age: 450, url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Cello_front_side.png'},
            {id: 3, name: 'Clarinet', type: 'reed', age: 300, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Yamaha_Clarinet_YCL-457II-22.png/320px-Yamaha_Clarinet_YCL-457II-22.png'},
            {id: 4, name: 'Harp', type: 'flying', age: 6000, url: 'https://manufacturing.dustystrings.com/application/files/2314/9739/1686/serrana-34-full.jpg'},
            {id: 5, name: 'Lute', type: 'electric', age: 1500, url: 'https://cdn.shopify.com/s/files/1/1814/0429/products/lutes-8-course-lute-sheesham-canadian-spruce-1264092905513_580x.jpg?v=1522595609'},
            {id: 6, name: 'Piano', type: 'normal', age: 250, url: 'https://www.lindebladpiano.com/signature/images/303958/piano.png'},
            {id: 7, name: 'Tambourine', type: 'poison', age: 2000, url: 'http://s1.lonestarpercussion.com/resize/images/product-image/Ludwig-LE4004.jpg'},
            {id: 8, name: 'viola', type: 'normal', age: 450, url:'https://www.thomann.de/pics/bdb/111059/12881517_800.jpg'}
        ]
    };

    render() {
        return (
        <div className = "Musidex">
            <h1>Musidex!</h1>
            {this.props.instrument.map((i) => (
            <Card id={i.id} name={i.name} type={i.type} age={i.age} url={i.url} />
            ))}
        </div>
        )
    }
}

    export default Musidex;