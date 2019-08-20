import React from 'react';
import MainContent from "../../MainContent"
import { Charts, ReactMarkdown } from '../../../components';
import data from './data'
import CodeBlock from '../../CodeBlock';

function Area() {
  const { XYPlot, AreaSeries, XAxis, YAxis,
    VerticalGridLines, HorizontalGridLines } = Charts;

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

  let code = (<ReactMarkdown source={codeSample} renderers={{ code: CodeBlock }} className="sampleCode" />);

  function renderAreaSeries() {
    return (
      <XYPlot width={500} height={500} className="areaSeries">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries
          className="area-series-example"
          curve="curveNatural"
          data={data.series}
        />
      </XYPlot>
    );
  }

  return (
    <MainContent label="Area Series" content={renderAreaSeries()} code={code} />
  );
}

export default Area;