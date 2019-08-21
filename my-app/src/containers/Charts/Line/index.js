import React from 'react';
import MainContent from "../../MainContent"
import { Charts, ReactMarkdown } from '../../../components';
// import data from './data'
import CodeBlock from '../../CodeBlock';

function Line() {
const { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, 
  LineSeries, /*ChartLabel, LineSeriesCanvas*/ } = Charts;

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

  let code = (<ReactMarkdown source={codeSample} renderers={{ code: CodeBlock }} />);

  function renderLineSeries() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 2 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 6 },
      { x: 5, y: 7 },
      { x: 6, y: 0 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
      { x: 10, y: 3 },
      { x: 11, y: 11 },
      { x: 12, y: 5 },
      { x: 13, y: 7 },
      { x: 14, y: 1 },
      { x: 15, y: 3 }
    ];

    return (
      <div className="line-display">
        <XYPlot margin={{ Bottom: 20, top: 30 }} height={700} width={700} yDomain={[0, 12]} xDomain={[0, 16]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }

  return (
    <MainContent label="Line Series" content={renderLineSeries()} code={code} />
  );
}

export default Line;