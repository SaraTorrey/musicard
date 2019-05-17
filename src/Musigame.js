import React, {Component} from 'react';

class Musigame extends Component {
    static defaultProps = {
        Instruments : [
            { id: 1, name: 'Bagpipes', type: 'woodwind', age: 350, img: './img/Viola.jpeg' },
            { id: 2, name: 'Cello', type: 'string', age: 450 },
            { id: 3, name: 'Clarinet', type: 'reed', age: 300 },
            { id: 4, name: 'Harp', type: 'flying', age: 6000 },
            { id: 5, name: 'Lute', type: 'electric', age: 1500 },
            { id: 6, name: 'Piano', type: 'normal', age: 250 },
            { id: 7, name: 'Tambourine', type: 'poison', age: 2000 },
            { id: 8, name: 'viola', type: 'normal', age: 450 }
        ]
    };

