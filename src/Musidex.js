import React from 'react';

class Musidex extends Component {
	static defaultProps = {
		Musidex : [
			{ id: 1, name: 'Bagpipes', type: 'woodwinds', age: 500 },
			{ id: 2, name: 'Cello', type: 'string', age: 320},
			{ id: 3, name: 'Clarinet', type: 'reed', age: 300 },
			{ id: 4, name: 'Lute', type: 'string', age: 700 },
			{ id: 5, name: 'Oboe', type: 'double reed', age: 750 },
			{ id: 6, name: 'Piano', type: 'percussin', age: 210 },
			{ id: 7, name: 'Tambourine', type: 'percussin', age: 900 },
			{ id: 8, name: 'Viola', type: 'string', age: 400 }
		]
  };
  
  export default Musidex;