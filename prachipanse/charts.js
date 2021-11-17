import React, {Component} from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import planets from "./planets.json";

class Charts extends Component
{
    constructor(props){
        super(props);
        this.state ={
            chartData: {
            labels: ['Mercury', 'Venus',  'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'],
            datasets: [
                {
                    label: 'Population',
                    data:[
                        0,
                        0,
                        7753000000,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0

                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(55, 162, 45, 0.6)',
                        'rgba(45, 34, 86, 0.6)'
                    ]
                    }
                ]
                }

            
            }
                
        }
    
    render()
    {
        return <div className="charts"> <Bar 
        data ={this.state.chartData}
        options={{
            title: {
                display: true,
                text: 'The population of each planet',
                fontSize: 25
            },
            legend:{
                display:true,
                position: 'right'
            }
            // maintainAspectRatio:false
        }}
        /> </div>
    }
}

export default Charts;