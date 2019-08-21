import React from "react";
import MainContent from "../../MainContent";
import { Charts, ReactMarkdown } from "../../../components";
import CodeBlock from '../../CodeBlock';

function Bar(props) {
  const {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    // VerticalBarSeriesCanvas,
    LabelSeries
  } = Charts;

  const greenData = [{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 15 }];

  const blueData = [{ x: "A", y: 12 }, { x: "B", y: 2 }, { x: "C", y: 11 }];

  const labelData = greenData.map((d, idx) => ({
    x: d.x,
    y: Math.max(greenData[idx].y, blueData[idx].y)
  }));

  const codeSample = `
    import React from 'react';
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, AreaSeries} from 'react-vis';
    const data = [
      { x: 1, y: 10 },	{ x: 2, y: 5 },	{ x: 3, y: 15 },
      { x: 4, y: 6 },	{ x: 5, y: 9 },	{ x: 6, y: 2 },
      { x: 7, y: 1 },	{ x: 8, y: 8 },	{ x: 9, y: 13 },
      { x: 10, y: 11 },	{ x: 11, y: 4 }, { x: 12, y: 7 },
    ];

    function AreaSeries() {
      return (
        <XYPlot width={500} height={500} >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries
            curve="curveNatural"
            data={data}
          />
        </XYPlot>
      );
    }`;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sampleCode"
    />
  );

  function renderBarChart() {
    return (
      <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries className="vertical-bar-series-example" data={greenData} />
        <VerticalBarSeries data={blueData} />
        <LabelSeries data={labelData} getLabel={d => d.x} />
      </XYPlot>
    );
  }

  return (
    <MainContent label="Bar Series" content={renderBarChart()} code={code} />
  );
}

export default Bar;
