import React from "react";
import { connect } from "react-redux";
import ChartsAction from "../../../ActionTypes/ChartsAction";
import MainContent from "../../MainContent";
import { Button, Charts, ReactMarkdown } from "../../../components";
import CodeBlock from "../../CodeBlock";
import data from "./data"

function StackedBar(props) {
  const {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    HorizontalBarSeries,
  } = Charts;

  const codeSample = `
        import React from 'react';
        import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries, HorizontalBarSeries} from 'react-vis';
        
        const data1 = [{ x: 2, y: 10 }, { x: 4, y: 5 }, { x: 5, y: 15 }];
        const data2 = [{ y: 2, x: 12 }, { y: 4, x: 2 }, { y: 5, x: 11 }];
        
        function VerticalStackedBarChart() {
          return (
            <XYPlot width={500} height={500} stackBy="y">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries data={data1} />
              <VerticalBarSeries data={data1} />
            </XYPlot>
          );
        }
        
        function HoriZontalStackedBarChart() {
          return (
            <XYPlot width={500} height={500} stackBy="x">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <HorizontalBarSeries data={data1} />
              <HorizontalBarSeries data={data1} />
            </XYPlot>
          );
        }
        `;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sampleCode"
    />
  );

  function renderVerticalBar() {
    return (
      <XYPlot width={500} height={500} stackBy="y">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data[0]} />
        <VerticalBarSeries data={data[1]} />
      </XYPlot>
    );
  }

  function renderHorizontalBar() {
    return (
      <XYPlot width={500} height={500} stackBy="x">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={data[0]} />
        <HorizontalBarSeries data={data[1]} />
      </XYPlot>
    );
  }

  function handleClick() {
    props.switchBars();
  }

  function renderStackedBarChart() {
    return (
      <div className="bar-container">
        <Button variant="outlined" className="barChange" onClick={handleClick}>Change bar form</Button>
        {props.isVer ? renderVerticalBar() : renderHorizontalBar()}
      </div>
    );
  }

  return (
    <MainContent label="Stacked Bar Series" content={renderStackedBarChart()} code={code} />
  );
}

const mapStateToProps = state => {
  return {
    isVer: state.chartsReducer.isVer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchBars: () => {
      dispatch(ChartsAction.switchBars());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StackedBar);
