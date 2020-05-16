import React from 'react';
import './sorts.css'
import { mergeSortAnimations } from '../sortingAlgs/mergeSort';
import { quickSortAnimations } from '../sortingAlgs/quickSort';
import { bubbleSortAnimations } from '../sortingAlgs/'

const ANIMATION_SPEED_MS = 5;

const NUM_OF_BARS = 250;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'rgb(255, 0, 0)';

export default class SortingVisuals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: []
    };

  }

  componentDidMount() {
    this.resetArr();
  }

  resetArr() {
    const BARS = document.getElementById("barshow").clientWidth;
    const HEIGHT = document.getElementById('app').clientHeight;
    const arr = [];
    for (let i = 0; i < BARS * 0.18; i++) {
      arr.push(randomVal(15, HEIGHT * 0.75));

    }

    this.setState({ arr });
  }

  mergeSort() {
    const animations = mergeSortAnimations(this.state.arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('arr-bars');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const [animations,sortArray] = quickSortAnimations(this.state.arr);
    for (let i = 0; i < animations.length - 1; i++) {
      const isColorChange = (i % 6 === 0) || (i % 6 === 1);
      const arrayBars = document.getElementsByClassName('arr-bars');
      if (isColorChange) {
        const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [barOneIndex, barTwoIndex] = animations[i];
        if(barOneIndex === -1) {
            continue;
        }
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
        },i * ANIMATION_SPEED_MS);
      }
      else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
            continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
            barStyle.height = `${newHeight}px`;
        },i * ANIMATION_SPEED_MS);  
      }
    }
    // this.setState({array: sortArray})
    // const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
    // setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);  
  }

  heapSort() {

  }

  bubbleSort() {
    const [animations,sortArray] = bubbleSortAnimations(this.state.arr);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = (i % 4 === 0) || (i % 4 === 1);
      const arrayBars = document.getElementsByClassName('arr-bars');
      if(isColorChange === true) {
        const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
        },i * ANIMATION_SPEED_MS);
      }
      else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
            continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
            barStyle.height = `${newHeight}px`;
        },i * ANIMATION_SPEED_MS);  
      }
    }
  }

  render() {
    const { arr } = this.state;

    return (
      <div className='mainpage' >
        <div className='all-btns'>
          <button onClick={ () => this.resetArr() }>Randomize Array</button>
          <button onClick={ () => this.mergeSort() }>Merge Sort</button>
          <button onClick={ () => this.quickSort() }>Quick Sort</button>
          <button onClick={ () => this.heapSort() }>Heap Sort</button>
          <button onClick={ () => this.bubbleSort() }>Bubble Sort</button>

        </div>
        <div className='bar-show' id='barshow'>
          {arr.map((val, i) => (
            <div className='arr-bars' 
                key={i} 
                style={{ height: `${val}px` }} >
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const randomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}