import React from 'react';
import ReactDOM from 'react-dom';
import planets from './planets.json';
import PlanetsMoon from './PlanetsMoon';
import Charts from './charts.js';

let contents = <div><h1>The Solar System</h1>
        <PlanetsMoon planets={planets} />
        <Charts  /> 
        <footer className="footer">
					<strong>&#127752; &copy; prachipanse</strong>
				</footer>
    </div>;

ReactDOM.render(
  contents,
  document.getElementById('root')
);
