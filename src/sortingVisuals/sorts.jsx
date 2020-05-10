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
    for (let i = 0; i < 100; i++) {
      arr.push(randomVal(50, 700));
      
    }

    this.setState({ arr });
  }

  render() {
    const { arr } = this.state;

    return (
      <div className='bar-show' >
        {arr.map((val, i) => (
          <div className='arr-bars' 
               key={i} 
               style={{ height: `${val}px` }}>
          </div>
        ))}
      </div>
    )
  }
}

const randomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}