import React from "react";
import MainContent from "../../MainContent";
import { Charts, ReactMarkdown } from "../../../components";
import CodeBlock from "../../CodeBlock";
import data from "./data"

function HeatMap() {
  const { XYPlot, XAxis, YAxis, HeatmapSeries } = Charts;

  const codeSample = `
        import React from 'react';
        import {XYPlot, XAxis, YAxis, MarkSeries, CircularGridLines} from 'react-vis';
        
        const data = [
          { r: 1, theta: Math.PI / 3, size: 30 },
          { r: 1.7, theta: (2 * Math.PI) / 3, size: 10 },
          { r: 2, theta: Math.PI, size: 1 },
          { r: 3, theta: (3 * Math.PI) / 2, size: 12 },
          { r: 2.5, theta: Math.PI / 4, size: 4 },
          { r: 0, theta: Math.PI / 4, size: 1 }
        ];
        
        function VerticalBarChart() {
          return (
            <XYPlot
              xDomain={[-3, 3]}
              yDomain={[-3, 3]}
              width={500}
              height={500}
              className="ccLContainer"
            >
              <CircularGridLines />
              <XAxis top={235} />
              <YAxis left={225} />
              <MarkSeries
                strokeWidth={2}
                sizeRange={[5, 15]}
                data={data.map(row => ({
                  ...row,
                  x: Math.cos(row.theta) * row.r,
                  y: Math.sin(row.theta) * row.r
                }))}
              />
            </XYPlot>
          );
        }
        `;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  function renderHeatMap() {
    return (
      <XYPlot width={500} height={500} className="heatmap charts-container">
        <XAxis />
        <YAxis />
        <HeatmapSeries
          data={data}
        />
      </XYPlot>
    );
  }

  return (
    <MainContent label="Heat Map" content={renderHeatMap()} code={code} />
  );
}

export default HeatMap;
