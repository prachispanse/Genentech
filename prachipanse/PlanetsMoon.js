import React from "react";
import ReactDOM from "react-dom";
import planets from "./planets.json";

export default function PlanetsMoon (props)
	{
		let rows = planets.map(function(u, i)
					{
						
						return <tr key={i}>
								<td>{i+1}</td>
								<td>  {u.Name} </td> 
								<td>  {u.Population} </td>
								<td>  {u.RotationPeriod} </td> 
								<td>  {u.OrbitalPeriod} </td>
								<td>  {u.Diameter} </td> 
								<td>  {u.Climate} </td>
								<td>  {u.SurfaceWater} </td> 
								</tr>
					});
	return <div> 
			<table>
				<thead>
					<tr>
						<td></td>
						<td>Name</td>
						<td>Population</td>
						<td>Rotation Period</td>
						<td>Orbital Period</td>
						<td>Diameter</td>
						<td>Climate</td>
						<td>Surface Water</td>
					</tr>
				</thead>		
				<tbody>
					{rows}
				</tbody>
			</table>
					
			</div>;
	}

