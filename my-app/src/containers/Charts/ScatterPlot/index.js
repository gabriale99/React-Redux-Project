import React from "react";
import MainContent from "../../MainContent";
import { Charts, ReactMarkdown } from "../../../components";
import data from "./data";
import CodeBlock from "../../CodeBlock";


function ScatterPlot() {
  const {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    MarkSeries
  } = Charts;

  const codeSample = `
        import React from 'react';
        import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, MarkSeries } from 'react-vis';
        const data1 = [
          { x: 1, y: 10, size: 30 },
          { x: 1.7, y: 12, size: 10 },
          { x: 2, y: 5, size: 1 },
          { x: 3, y: 15, size: 12 },
          { x: 2.5, y: 7, size: 4 }
        ];
    
        function ScatterPlot() {
          return (
            <XYPlot width={300} height={300}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <MarkSeries
                strokeWidth={2}
                opacity="0.8"
                sizeRange={[5, 15]}
                data={data}
              />
            </XYPlot>
          );
        }`;

  let code = (
    <ReactMarkdown source={codeSample} renderers={{ code: CodeBlock }} />
  );

  function renderScatterPlot() {
    return (
      <XYPlot width={500} height={500} className="scatter-plot charts-container">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          strokeWidth={2}
          opacity="0.8"
          sizeRange={[5, 15]}
          data={data}
        />
      </XYPlot>
    );
  }

  return (
    <MainContent
      label="Scatter Plot"
      content={renderScatterPlot()}
      code={code}
    />
  );
}

export default ScatterPlot;