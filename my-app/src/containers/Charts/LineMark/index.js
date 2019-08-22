import React from "react";
import MainContent from "../../MainContent";
import { Charts, ReactMarkdown } from "../../../components";
import data from "./data";
import CodeBlock from "../../CodeBlock";

function LineMark() {
  const {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineMarkSeries
  } = Charts;

  const codeSample = `
    import React from 'react';
    import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineMarkSeries } from 'react-vis';
    const data1 = [{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }];
    const data2 = [{ x: 1, y: 11 }, { x: 1.5, y: 29 }, { x: 3, y: 7 }];

    function LineSeries() {
      return (
        <XYPlot width={500} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineMarkSeries
            style={{
              strokeWidth: "3px"
            }}
            lineStyle={{ stroke: "red" }}
            markStyle={{ stroke: "blue" }}
            data={data1}
          />
          <LineMarkSeries
            curve={"curveMonotoneX"}
            data={data2}
          />
        </XYPlot>
      );
    }`;

  let code = (
    <ReactMarkdown source={codeSample} renderers={{ code: CodeBlock }} />
  );

  function renderLineMarkSeries() {
    return (
      <XYPlot width={500} height={500} className="line-mark charts-container">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineMarkSeries
          style={{
            strokeWidth: "3px"
          }}
          lineStyle={{ stroke: "red" }}
          markStyle={{ stroke: "blue" }}
          data={data[0]}
        />
        <LineMarkSeries
          curve={"curveMonotoneX"}
          data={data[1]}
        />
      </XYPlot>
    );
  }

  return (
    <MainContent
      label="Line Mark Series"
      content={renderLineMarkSeries()}
      code={code}
    />
  );
}

export default LineMark;
