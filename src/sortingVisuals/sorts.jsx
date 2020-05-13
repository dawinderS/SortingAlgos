import React from 'react';
import './sorts.css'
import { mergeSortAnimations } from '../sortingAlgs/mergeSort';

const ANIMATION_SPEED_MS = 1;

const NUM_OF_BARS = 200;

const PRIMARY_COLOR = 'blue';

const SECONDARY_COLOR = 'red';

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
    const arr = [];
    for (let i = 0; i < NUM_OF_BARS; i++) {
      arr.push(randomVal(25, 650));

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

  }

  heapSort() {

  }

  bubbleSort() {

  }

  render() {
    const { arr } = this.state;

    return (
      <div className='mainpage' >
        <div>
          <button onClick={ () => this.resetArr() }>Randomize Array</button>
          <button onClick={ () => this.mergeSort() }>Merge Sort</button>
          <button onClick={ () => this.quickSort() }>Quick Sort</button>
          <button onClick={ () => this.heapSort() }>Heap Sort</button>
          <button onClick={ () => this.bubbleSort() }>Bubble Sort</button>

        </div>
        <div className='bar-show'>
          {arr.map((val, i) => (
            <div className='arr-bars' 
                key={i} 
                style={{ height: `${val}px`, width: '3px'}} >
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