import React from "react";
import MainContent from "../../MainContent";
import { Charts, ReactMarkdown } from "../../../components";
import data from './data'
import {curveCatmullRom} from 'd3-shape';
import CodeBlock from "../../CodeBlock";

function Line() {
  const {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
  } = Charts;

  const codeSample = `
    import React from 'react';
    import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
    const data1 = [ { x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 15 }, { x: 4, y: 12 } ];
    const data2 = [ { x: 1, y: 10 }, { x: 2, y: 4 }, { x: 3, y: 2 }, { x: 4, y: 15 } ];
    const data3 = [ { x: 1, y: 7 }, { x: 2, y: 11 }, { x: 3, y: 9 }, { x: 4, y: 2 } ];

    function LineSeries() {
      return (
        <XYPlot width={500} height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            className="first-series"
            data={data1}
          />
          <LineSeries
            className="third-series"
            curve={"curveMonotoneX"}
            data={data2}
          />
          <LineSeries
            className="fourth-series"
            curve={curveCatmullRom.alpha(0.5)}
            data={data3}
          />
        </XYPlot>
      );
    }`;

  let code = (
    <ReactMarkdown source={codeSample} renderers={{ code: CodeBlock }} />
  );

  function renderLineSeries() {

    return (
        <XYPlot width={500} height={500} className="line charts-container">
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            className="first-series"
            data={data[0]}
          />
          <LineSeries
            className="third-series"
            curve={"curveMonotoneX"}
            data={data[1]}
          />
          <LineSeries
            className="fourth-series"
            curve={curveCatmullRom.alpha(0.5)}
            data={data[2]}
          />
        </XYPlot>
    );
  }

  return (
    <MainContent label="Line Series" content={renderLineSeries()} code={code} />
  );
}

export default Line;
