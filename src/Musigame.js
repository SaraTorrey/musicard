import React, { Component } from 'react';
import Musidex from './Musidex';


class Musigame extends Component {
    static defaultProps = {
        instrument : [
            {id: 1, name: 'Bagpipes', type: 'woodwind', age: 350, url: 'https://images-na.ssl-images-amazon.com/images/I/61xwe6wcpYL._SX466_.jpg'},
            {id: 2, name: 'Cello', type: 'string', age: 450, url: 'https://d1aeri3ty3izns.cloudfront.net/media/24/247080/1200/preview.jpg'},
            {id: 3, name: 'Clarinet', type: 'reed', age: 300, url: 'https://images-na.ssl-images-amazon.com/images/I/511D65gBzPL._SX425_.jpg'},
            {id: 4, name: 'Harp', type: 'flying', age: 2000, url: 'https://manufacturing.dustystrings.com/application/files/2314/9739/1686/serrana-34-full.jpg'},
            {id: 5, name: 'Lute', type: 'electric', age: 1500, url: 'https://cdn.shopify.com/s/files/1/1814/0429/products/lutes-8-course-lute-sheesham-canadian-spruce-1264092905513_580x.jpg?v=1522595609'},
            {id: 6, name: 'Piano', type: 'normal', age: 250, url: 'https://www.lindebladpiano.com/signature/images/303958/piano.png'},
            {id: 7, name: 'Tambourine', type: 'poison', age: 2000, url: 'http://s1.lonestarpercussion.com/resize/images/product-image/Ludwig-LE4004.jpg'},
            {id: 8, name: 'viola', type: 'normal', age: 450, url:'https://www.thomann.de/pics/bdb/111059/12881517_800.jpg'}
            ]
};

render() {
    let hand1 = [];
    let hand2 = [ ... this.props.instrument ];
    while (hand1.length < hand2.length) {
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randInstrument = hand2.splice(randIdx, 1)[0];
        hand1.push(randInstrument);
    }
        let age1 = hand1.reduce((age, instrument) => age + instrument.age, 0);
        let age2 = hand2.reduce((age, instrument) => age + instrument.age, 0);

        return (
            <div>
                <Musidex instrument = {hand1} age={age1} isWinner={ age1 > age2 }/>
                <Musidex instrument = {hand2} age={age2} isWinner={ age2 > age1}/>
            </div>
        );
    }
}
export default Musigame;