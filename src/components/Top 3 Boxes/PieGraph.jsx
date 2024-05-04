import React from 'react'
import { useState, useRef } from 'react'
//import '../../css/pieGraph.css'
import * as d3 from "d3";
import styles from '../../css/pieGraph.module.css'

export default function Piegraph() {
    const ref = useRef(null);
    const [dep_20 , set20] = useState(2)
    const [dep_50 , set50] = useState(15)
    const [dep_51 , set51] = useState(32)
    const [dep_52 , set52] = useState(12)
    const [dep_53 , set53] = useState(55)
    const total = dep_20 + dep_50 + dep_51 + dep_52 + dep_53
    const INFLEXION_PADDING = 20; // space between donut and label inflexion point
    const height = 400
    const width = 700
    const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"];
    const MARGIN = 30;
    const radius = Math.min(width, height) / 2 - MARGIN;
    const data = [
    {name: "Department 20", value: dep_20}, 
    {name: "Department 50", value: dep_50}, 
    {name: "Department 51", value: dep_51}, 
    {name: "Department 52", value: dep_52}, 
    {name: "Department 53", value: dep_53}];
    const pieGenerator = d3.pie().value((d) => d.value);
    const pie = pieGenerator(data);
    const arcPathGenerator = d3.arc();
    const arcs = pie.map((p, i) =>{

      const arcPath = {
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      };
    const centroid = arcPathGenerator.centroid(arcPath);
    const slicePath = arcPathGenerator(arcPath);
    const inflexionInfo = {
        innerRadius: radius + INFLEXION_PADDING,
        outerRadius: radius + INFLEXION_PADDING,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      };
      const inflexionPoint = arcPathGenerator.centroid(inflexionInfo);
      const isRightLabel = inflexionPoint[0] > 0;
        const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
        const textAnchor = isRightLabel ? "start" : "end";
        const label = p.data.name + " (" + p.value + ")";
        const label2 = ((p.value/total) * 100).toFixed(2) + '%'
        return (
            <g
              key={i}
              className={styles.slice}
              onMouseEnter={() => {
                if (ref.current) {
                  ref.current.classList.add(styles.hasHighlight);
                }
              }}
              onMouseLeave={() => {
                if (ref.current) {
                  ref.current.classList.remove(styles.hasHighlight);
                }
              }}
            >
              <path d={slicePath} fill={colors[i]} />
              <circle cx={centroid[0]} cy={centroid[1]} r={2} />
              <line
                x1={centroid[0]}
                y1={centroid[1]}
                x2={inflexionPoint[0]}
                y2={inflexionPoint[1]}
                stroke={"black"}
                fill={"black"}
              />
              <line
                x1={inflexionPoint[0]}
                y1={inflexionPoint[1]}
                x2={labelPosX}
                y2={inflexionPoint[1]}
                stroke={"black"}
                fill={"black"}
              />
              
              <text
                x={labelPosX + (isRightLabel ? 2 : -2)}
                y={inflexionPoint[1]}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                fontSize={12}
              >
               {label},{label2}
              </text>
<text x={centroid[0]} y={centroid[1]} textAnchor="middle" >{label2}
      </text>
            </g>
          );

    }
    );
  
  return (
    <>  
    <div style={{height: "400px", width: "100%"}}>
    {/* <svg width={width} height={height}>
    <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          return <path key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
      </svg> */}
      <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g
        transform={`translate(${width / 2}, ${height / 2})`}
        className={styles.container}
        ref={ref}
      >
        {arcs}
      </g>
    </svg>
    </div>
      
    </>
  )
}
