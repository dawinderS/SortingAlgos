import React from 'react';
import './sorts.css'
import { mergeSortAnimations } from '../sortingAlgs/mergeSort';
import { quickSortAnimations } from '../sortingAlgs/quickSort';
import { bubbleSortAnimations } from '../sortingAlgs/bubbleSort';
import { insertionSortAnimations } from "../sortingAlgs/insertionSort";
import { selectionSortAnimations } from '../sortingAlgs/selectionSort';

const ANIMATION_SPEED_MS = 5;
// const NUM_OF_BARS = 250;
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
    for (let i = 0; i < BARS * 0.182; i++) {
      arr.push(randomVal(15, HEIGHT * 0.72));
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
    const [animations] = quickSortAnimations(this.state.arr);
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
    const [animations] = bubbleSortAnimations(this.state.arr);
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
        },i * ANIMATION_SPEED_MS * 0.5);
      }
      else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
            continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
            barStyle.height = `${newHeight}px`;
        },i * ANIMATION_SPEED_MS * 0.5);  
      }
    }
  }

  insertionSort() {
    const [animations] = insertionSortAnimations(this.state.arr);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
      const arrayBars = document.getElementsByClassName('arr-bars');
      if(isColorChange === true) {
        const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        },i * ANIMATION_SPEED_MS * 0.7);
      }
      else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        },i * ANIMATION_SPEED_MS * 0.7);  
      }
    }
  }

  selectionSort() {
    const [animations,sortArray] = selectionSortAnimations(this.state.arr);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
      const arrayBars = document.getElementsByClassName('arr-bars');
      if(isColorChange === true) {
        const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        },i * ANIMATION_SPEED_MS * 0.7);
      }
      else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        },i * ANIMATION_SPEED_MS * 0.7);  
      }
    }
  }

  render() {
    const { arr } = this.state;

    return (
      <div className='mainpage' >
        <div className='navbar'>
          <div className='navbar-header'>
            Sorting Algorithms Explained!
          </div>
          <div className='navbar-btns' >
            <div className='navbar-btns-in'>
              <div className='reset-btn' onClick={ () => this.resetArr() }>Randomize Array / Reset</div>
              <div>
                1. Choose array size
                <span>
                  <div>1x</div>
                  <div>2x</div>
                  <div>3x</div>
                </span>
              </div>
              <div>
                2. Select sorting speed
                <span>
                  <div>1x</div>
                  <div>2x</div>
                  <div>3x</div>
                </span>
              </div>
              <div>
                3. Pick a sorting algorithm
                <div onClick={ () => this.mergeSort() }>Merge Sort</div>
                <div onClick={ () => this.quickSort() }>Quick Sort</div>
                {/* <button onClick={ () => this.heapSort() }>Heap Sort</button> */}
                <div onClick={ () => this.bubbleSort() }>Bubble Sort</div>
                <div onClick={ () => this.insertionSort() }>Insertion Sort</div>
                <div onClick={ () => this.selectionSort() }>Selection Sort</div>
              </div>
            </div>
          </div>
        </div>
        <div className='barshow1'>
          <div className='info-show' style={{ height: '${}'}}>
            sdfsdf
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
      </div>
    )
  }
}

const randomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}