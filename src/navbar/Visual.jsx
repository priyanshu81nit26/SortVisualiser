/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Bar from '../components/Bar.jsx';
import { NavLink } from 'react-router-dom';

// Algorithms
import BubbleSort from '../algo/BubbleSort.js';
import MergeSort from '../algo/MergeSort.js';
import QuickSort from '../algo/QuickSort.js';
import InsertionSort from '../algo/InsertionSort.js';
import SelectionSort from '../algo/SelectionSort.js';

// Icons
import Play from '@mui/icons-material/PlayCircleOutlineRounded';
import RotateLeft from '@mui/icons-material/RotateLeft';

// Styles
import '../styles/RiseUpText.css';
import { riseText } from '../styles/RiseUpText.js';
import MiniNav from './MiniNav';

class App extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    timeouts: [],
    currentStep: 0,
    barCount: 10,
    delay: 200,
    algorithm: 'Bubble Sort',
  };

  ALGORITHMS = {
    'Bubble Sort': BubbleSort,
    'Merge Sort': MergeSort,
    'Quick Sort': QuickSort,
    'Insertion Sort': InsertionSort,
    'Selection Sort': SelectionSort,
  };

  componentDidMount() {
    window.addEventListener('load', riseText);
    this.generateBars(); // Generate bars on page load
  }

  setTimeouts = () => {
    let steps = this.state.arraySteps || [];
    let colorSteps = this.state.colorSteps || [];

    this.clearTimeouts();
    let timeouts = [];

    // Reset currentStep to 0 when starting to sort
    this.setState({ currentStep: 0 });

    let i = 0;

    while (i < steps.length) {
      let timeout = setTimeout(() => {
        let currentStep = this.state.currentStep;
        if (currentStep < steps.length) {
          this.setState({
            array: steps[currentStep],
            colorKey: colorSteps[currentStep],
            currentStep: currentStep + 1,
          });
        }
      }, this.state.delay * i);
      timeouts.push(timeout);
      i++;
    }

    this.setState({
      timeouts: timeouts,
    });
  };

  changeAlgorithm = (algorithm) => {
    this.clearTimeouts(); // Clear timeouts to prevent overlapping
    this.clearColorKey(); // Clear color key
    this.setState(
      {
        algorithm: algorithm,
        currentStep: 0,
        arraySteps: [], // Reset arraySteps
        colorSteps: [], // Reset colorSteps
      },
      () => {
        this.generateBars(); // Generate new bars for the new algorithm
      }
    );
  };

  changeBarCount = (count) => {
    this.clearTimeouts();
    this.clearColorKey();
    this.setState(
      {
        barCount: count,
      },
      () => this.generateBars()
    );
  };

  changeSpeed = (speed) => {
    this.clearTimeouts();
    this.setState({
      delay: speed,
    });
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.setState({ timeouts: [] });
  };

  clearColorKey = () => {
    let blankKey = new Array(this.state.barCount).fill(0);
    this.setState({ colorKey: blankKey, colorSteps: [blankKey] });
  };

  generateSteps = () => {
    let array = this.state.array || [];
    let steps = this.state.arraySteps || [];
    let colorSteps = this.state.colorSteps || [];

    if (this.ALGORITHMS[this.state.algorithm]) {
      this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);
    }

    this.setState({
      arraySteps: steps,
      colorSteps: colorSteps,
    });
  };

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateBars = () => {
    this.clearTimeouts();
    this.clearColorKey();

    let barCount = this.state.barCount;
    let arr = [];

    for (let i = 0; i < barCount; i++) {
      arr.push(this.generateRandomNumber(50, 200));
    }

    this.setState(
      {
        array: arr,
        arraySteps: [arr],
        currentStep: 0,
      },
      () => this.generateSteps() // Generate steps after setting the bars
    );
  };

  changeArray = (index, value) => {
    let array = this.state.array;
    array[index] = value;
    this.setState(
      {
        array: array,
        arraySteps: [array],
        currentStep: 0,
      },
      () => this.generateSteps()
    );
  };

  render() {
    let barWidth = Math.max(10, Math.floor(100 / this.state.barCount)) + '%';
    let barsDiv = (this.state.array || []).map((value, index) => (
      <Bar
        key={index}
        index={index}
        length={value}
        color={this.state.colorKey[index]}
        changeArray={this.changeArray}
        style={{ width: barWidth }}
      />
    ));
    let playButton;

    if (this.state.arraySteps.length === this.state.currentStep) {
      playButton = (
        <button className='controller' onClick={this.generateBars}>
          <RotateLeft />
        </button>
      );
    } else {
      playButton = (
        <button className='controller' onClick={this.setTimeouts}>
          <Play />
        </button>
      );
    }

    return (
      <div className='app'>
        <MiniNav 
          onChangeAlgorithm={this.changeAlgorithm} 
          onChangeBarCount={this.changeBarCount} 
          onChangeSpeed={this.changeSpeed} 
          currentAlgorithm={this.state.algorithm} 
          currentBarCount={this.state.barCount} 
          currentSpeed={this.state.delay} 
          onStepBack={this.stepBack} 
          onStepForward={this.stepForward} 
          onPlay={this.setTimeouts} // Pass the setTimeouts method to MiniNav
        />
        <div className='frame'>
          <div className='barsDiv container card'>{barsDiv}</div>
        </div>
        
        <style>{`
          .app {
            text-align: center;
          }
          .frame {
            margin: 2em auto;
            width: 80%;
          }
          .barsDiv {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 300px;
            border-radius: 0.3em;
          }
          .control-pannel {
            margin: 1em 0;
          }
          .control-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .controller {
            background: none;
            border: none;
            cursor: pointer;
            margin: 0 0.5em;
          }
        `}</style>
      </div>
    );
  }
}

export default App;