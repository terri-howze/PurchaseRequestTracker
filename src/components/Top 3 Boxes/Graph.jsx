import React from 'react'
import '../../css/Graph.css'
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js-dist-min'


export default function Graph() {
   

    return (
        <>

            <div className='graph_box'>
   
                    <Plot
                        data={[
                            {
                                x: [1, 2, 3],
                                y: [2, 6, 3],
                                type: 'bar',
                                marker: {
                                    color: 'rgb(49,130,189)',
                                    opacity: 0.7,
                                },
                            },
                            { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                        ]}
                        layout={{
                            className:"graph_inner_box",
                            title: '2013 Sales Report',
                            height: 400,
                            width: 500,
                            autosize: true,
                            xaxis: {
                                tickangle: -45
                            },
                            
                            barmode: 'group'
                        }}
                    />
             
            </div>
        </>
    )
}
