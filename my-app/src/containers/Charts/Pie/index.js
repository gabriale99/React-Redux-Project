import React from "react";
import MainContent from "../../MainContent";
import { Charts, ReactMarkdown } from "../../../components";
import data from "./data";
import CodeBlock from "../../CodeBlock";

function Pie() {
  const { RadialChart } = Charts;

  const codeSample = `
        import React from 'react';
        import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineMarkSeries } from 'react-vis';
        const data = [
          {
            angle: 30,
            label: "Apple"
          },
          {
            angle: 11,
            label: "Google"
          },
          {
            angle: 4,
            label: "Facebook"
          },
          {
            angle: 3,
            label: "Netflix"
          },
          {
            angle: 17,
            label: "Amazon"
          }
        ];
    
        function LineSeries() {
          return (
            <RadialChart
              width={300}
              height={300}
              data={data}
              labelsRadiusMultiplier={0.8}
              labelsStyle={{
                fontSize: 12,
              }}
              showLabels
            />
          );
        }`;

  let code = (
    <ReactMarkdown source={codeSample} renderers={{ code: CodeBlock }} />
  );

  function renderPieSeries() {
    return (
      <RadialChart
        width={300}
        height={300}
        data={data}
        labelsRadiusMultiplier={0.8}
        labelsStyle={{
          fontSize: 12
        }}
        showLabels
      />
    );
  }

  return (
    <MainContent label="Pie Series" content={renderPieSeries()} code={code} />
  );
}

export default Pie;
