import React from 'react';
import './sorts.css'

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
    for (let i = 0; i < 200; i++) {
      arr.push(randomVal(25, 650));

    }

    this.setState({ arr });
  }

  mergeSort() {

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