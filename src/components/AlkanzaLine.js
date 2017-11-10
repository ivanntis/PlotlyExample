import React from "react";
import Plot from 'react-plotly.js'
/*
const generateValueX = (mult) => {
  let ret = [];
  for (let index = 0; index < 100; index++) {
    ret.push(((index * mult)));

  }
  return ret;
}


const AlkanzaLine = (props) => (
  <Plot
    data={[
      {
        name: 'min-ext',
        x: generateValueX(1),
        y: generateValueX(0.50 + this.state.contr),
        line: { shape: 'spline', width: 2, color: '#357EC7'  },
        hoverinfo: 'y'
      },      
      {
        name: 'max-ext',
        x: generateValueX(1),
        y: generateValueX(1.50 + this.state.contr),
        fill:'tonexty',
        fillcolor:'#F0F6FC',
        line: { shape: 'spline', smoothing: 0.5, simply: false, width: 2, color: '#357EC7' },
        hoverinfo: 'y',
      
      },
      {
        name: '',
        x: generateValueX(1),
        y: generateValueX(0.75 + this.state.contr),
        line: { shape: 'spline', width: 0,color: '#BEE8E4'  },
        hoverinfo: 'none'
      },      
      {
        name: 'range',
        x: generateValueX(1),
        y: generateValueX(1.25 + this.state.contr),
        fill: 'tonexty',
        line: { shape: 'spline', width: 0 },
        marker: { color: '#BEE8E4' },
        hoverinfo: 'none'
      },

      {
        name: 'avg',
        x: generateValueX(1),
        y: generateValueX(1 + this.state.contr),
        line: {shape: 'spline',width:2}, 
        marker: { color: '#3EA99F', size:5 },
        hoverinfo: 'y',
        hoveron: 'points'
      }
    ]}
    config={{
      modeBarButtonsToRemove:['pan2d'],
      displaylogo: false
    }}

    layout={{
      width: 800,
      height: 600,
      title: 'Contribution Risk'
    }}
  />

);

AlkanzaLine.defaultProps = {
  contr: 2
}
export default AlkanzaLine;

*/


export default class AlkanzaLine extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      contr: 2,
      average: 0
    }

    this.handleOnHover = this.handleOnHover.bind(this);
  }

  generateValueX = (mult) => {
    let ret = [];
    for (let index = 0; index < 100; index++) {
      ret.push(((index * mult)));

    }
    return ret;
  }

  handleOnHover = (data) => {


    const dataPoint = data.points.filter(function (d) {
      return d.data.name === 'avg'
    });

  
    console.log(dataPoint);
    

  }

  handleOnClick = () => {

  }

  render() {
    return (
      <div>
        <Plot
          data={[
            {
              name: 'min-ext',
              x: this.generateValueX(1),
              y: this.generateValueX(0.50 + this.state.contr),
              line: { shape: 'spline', width: 2, color: '#357EC7' },
              hoverinfo: 'y'
            },
            {
              name: 'max-ext',
              x: this.generateValueX(1),
              y: this.generateValueX(1.50 + this.state.contr),
              fill: 'tonexty',
              fillcolor: '#F0F6FC',
              line: { shape: 'spline', smoothing: 0.5, simply: false, width: 2, color: '#357EC7' },
              hoverinfo: 'y',

            },
            {
              name: '',
              x: this.generateValueX(1),
              y: this.generateValueX(0.75 + this.state.contr),
              line: { shape: 'spline', width: 0, color: '#BEE8E4' },
              hoverinfo: 'none'
            },
            {
              name: 'range',
              x: this.generateValueX(1),
              y: this.generateValueX(1.25 + this.state.contr),
              fill: 'tonexty',
              line: { shape: 'spline', width: 0 },
              marker: { color: '#BEE8E4' },
              hoverinfo: 'none'
            },

            {
              name: 'avg',
              x: this.generateValueX(1),
              y: this.generateValueX(1 + this.state.contr),
              line: { shape: 'spline', width: 2 },
              marker: { color: '#3EA99F', size: 5 },
              hoverinfo: 'y',
              hoveron: 'points'
            }
          ]}
          config={{
            modeBarButtonsToRemove: ['pan2d'],
            displaylogo: false
          }}

          layout={{
            hovermode:'closest',
            width: 800,
            height: 600,
            title: 'Contribution Risk 2'
          }}

          onHover={this.handleOnHover}/>
          
        <h2>{this.state.average}</h2>
        <button onClick={this.handleOnClick}>aa</button>
      </div>
          );

  }
}