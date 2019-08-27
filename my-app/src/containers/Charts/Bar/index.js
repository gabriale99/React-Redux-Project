import React from "react";
import { connect } from "react-redux";
import ChartsAction from "../../../ActionTypes/ChartsAction";
import MainContent from "../../MainContent";
import { Button, Charts, ReactMarkdown } from "../../../components";
import CodeBlock from "../../CodeBlock";
import data from "./data";

function Bar(props) {
  const {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    HorizontalBarSeries
  } = Charts;

  const codeSample = `
    import React from 'react';
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries, HorizontalBarSeries} from 'react-vis';
    
    const verData1 = [{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 15 }];
    const verData2 = [{ x: "A", y: 12 }, { x: "B", y: 2 }, { x: "C", y: 11 }];

    const horiData1 = [{ x: 10, y: "A" }, { x: 5, y: "B" }, { x: 15, y: "C" }];
    const horiData2 = [{ x: 12, y: "A" }, { x: 2, y: "B" }, { x: 11, y: "C" }];
    
    function VerticalBarChart() {
      return (
        <XYPlot xType="ordinal" width={500} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={verData1} />
          <VerticalBarSeries data={verData2} />
        </XYPlot>
      );
    }
    
    function HoriZontalBarChart() {
      return (
        <XYPlot yType="ordinal" width={500} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <HorizontalBarSeries data={horiData1} />
          <HorizontalBarSeries data={horiData2} />
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

  function renderVerticalBar() {
    return (
      <XYPlot xType="ordinal" width={500} height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data.verData1} />
        <VerticalBarSeries data={data.verData2} />
      </XYPlot>
    );
  }

  function renderHorizontalBar() {
    return (
      <XYPlot yType="ordinal" width={500} height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={data.horiData1} />
        <HorizontalBarSeries data={data.horiData2} />
      </XYPlot>
    );
  }

  function handleClick() {
    props.switchBars();
  }

  function renderBarChart() {
    return (
      <div className="charts-container">
        <div className="bar-container">
          <Button
            variant="outlined"
            className="bar-change"
            onClick={handleClick}
          >
            Change bar form
          </Button>
          {props.isVer ? renderVerticalBar() : renderHorizontalBar()}
        </div>
      </div>
    );
  }

  return (
    <MainContent label="Bar Series" content={renderBarChart()} code={code} />
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
)(Bar);
