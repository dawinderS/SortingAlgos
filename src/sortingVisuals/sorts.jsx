import React from 'react';
import './sorts.css'
import { mergeSortAnimations } from '../sortingAlgs/mergeSort';
import { quickSortAnimations } from '../sortingAlgs/quickSort';
import { bubbleSortAnimations } from '../sortingAlgs/bubbleSort';
import { insertionSortAnimations } from "../sortingAlgs/insertionSort";
import { selectionSortAnimations } from '../sortingAlgs/selectionSort';
import githubLogo from '../github-logo.png';
import linkedinLogo from '../linkedin-logo.png';

const ANIMATION_SPEED_MS = 5;
let animation_speed = 5;
let end_sort = false;
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
    const btn1color = document.getElementById('arrsize1').style.backgroundColor;
    const btn2color = document.getElementById('arrsize2').style.backgroundColor;
    const btn3color = document.getElementById('arrsize3').style.backgroundColor;
    let bars = BARS;
    let arrbars = document.getElementsByClassName("arr-bars");

    if (btn1color === "rgb(0, 77, 77)") {
      for (let i = 0; i < arrbars.length; i++) {
        arrbars[i].style.width = "100px";
      }
      bars /= 140;
    } else if (btn2color === 'rgb(0, 77, 77)') {
      // let length = bars / 30;
      for (let i = 0; i < arrbars.length; i++) { 
        arrbars[i].style.width = '30px'; 
      }
      bars /= 40;
    } else if (btn3color === "rgb(0, 77, 77)") {
      for (let i = 0; i < arrbars.length; i++) {
        arrbars[i].style.width = "1px";
      }
      bars *= 0.182;
    }

    for (let i = 0; i < bars; i++) {
      arr.push(randomVal(15, HEIGHT * 0.71));
    }

    this.setState({ arr });
  }

  mergeSort() {
    const animations = mergeSortAnimations(this.state.arr);
    for (let i = 0; i < animations.length; i++) {
      if (end_sort === true) {
        return;
      }
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
        }, i * animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animation_speed);
      }
    }
  }

  quickSort() {
    const [animations] = quickSortAnimations(this.state.arr);
    let new_speed = 0;
    for (let i = 0; i < animations.length - 1; i++) {
      const isColorChange = (i % 6 === 0) || (i % 6 === 1);
      const arrayBars = document.getElementsByClassName('arr-bars');
      if (isColorChange) {
        const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [barOneIndex, barTwoIndex] = animations[i];
        if(barOneIndex === -1) continue;
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animation_speed * 0.6);
      }
      else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) continue;
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * animation_speed * 0.6);  
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
    let new_speed = 0;
    if (animation_speed === 5) {
      animation_speed = animation_speed * 0.4;
    }
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
        }, i * animation_speed * 0.5);
      }
      else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) continue;
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * animation_speed * 0.5);  
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
        }, i * animation_speed * 0.7);
      }
      else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * animation_speed * 0.7);  
      }
    }
  }

  selectionSort() {
    const [animations,sortArray] = selectionSortAnimations(this.state.arr);
    let new_speed = 0;
    if (animation_speed === 5) {
      animation_speed = animation_speed * 0.5
    }
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
        }, i * animation_speed * 0.7);
      }
      else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * animation_speed * 0.7);  
      }
    }
  }

  handleSizeS() {
    let sizeBtns = document.getElementsByClassName('arrsize');
    let sizeS = document.getElementById('arrsize1');
    for (let i = 0; i < sizeBtns.length; i++) {
      sizeBtns[i].style.backgroundColor = 'teal'
    }
    sizeS.style.backgroundColor = "rgb(0, 77, 77)";
    this.resetArr();
  }
  handleSizeM() {
    let sizeBtns = document.getElementsByClassName("arrsize");
    let sizeM = document.getElementById("arrsize2");
    for (let i = 0; i < sizeBtns.length; i++) {
      sizeBtns[i].style.backgroundColor = "teal";
    }
    sizeM.style.backgroundColor = "rgb(0, 77, 77)";
    this.resetArr();
  }
  handleSizeL() {
    let sizeBtns = document.getElementsByClassName("arrsize");
    let sizeL = document.getElementById("arrsize3");

    for (let i = 0; i < sizeBtns.length; i++) {
      sizeBtns[i].style.backgroundColor = "teal";
    }
    sizeL.style.backgroundColor = "rgb(0, 77, 77)";
    this.resetArr();
  }

  handleSpeed1() {
    let speedBtns = document.getElementsByClassName("sortspeed");
    let speed1 = document.getElementById("sortspeed1");

    for (let i = 0; i < speedBtns.length; i++) {
      speedBtns[i].style.backgroundColor = "teal";
    }
    speed1.style.backgroundColor = "rgb(0, 77, 77)";
    animation_speed = 350;
  }
  handleSpeed2() {
    let speedBtns = document.getElementsByClassName("sortspeed");
    let speed2 = document.getElementById("sortspeed2");

    for (let i = 0; i < speedBtns.length; i++) {
      speedBtns[i].style.backgroundColor = "teal";
    }
    speed2.style.backgroundColor = "rgb(0, 77, 77)";
    animation_speed = 100;
  }
  handleSpeed3() {
    let speedBtns = document.getElementsByClassName("sortspeed");
    let speed3 = document.getElementById("sortspeed3");

    for (let i = 0; i < speedBtns.length; i++) {
      speedBtns[i].style.backgroundColor = "teal";
    }
    speed3.style.backgroundColor = "rgb(0, 77, 77)";
    animation_speed = 5;
  }

  render() {
    const { arr } = this.state;

    return (
      <div className="mainpage">
        <div className="navbar">
          <div className="navbar-header">
            <div>Sorting</div>
            <span>Algos 101</span>
          </div>
          <div className="navbar-btns">
            <div className="navbar-btns-in">
              <div className="reset-btn" onClick={() => this.resetArr()}>
                Randomize Array / Reset
              </div>
              <button onClick={() => this.handleEnd()}>aa</button>
              <div className="array-size">
                1. Choose array size
                <span>
                  <div
                    onClick={() => this.handleSizeS()}
                    className="arrsize"
                    id="arrsize1"
                  >
                    S
                  </div>
                  <div
                    onClick={() => this.handleSizeM()}
                    className="arrsize"
                    id="arrsize2"
                  >
                    M
                  </div>
                  <div
                    onClick={() => this.handleSizeL()}
                    className="arrsize"
                    id="arrsize3"
                    style={{ backgroundColor: "rgb(0, 77, 77)" }}
                  >
                    L
                  </div>
                </span>
              </div>
              <div className="sort-speed">
                2. Select sorting speed
                <span>
                  <div
                    onClick={() => this.handleSpeed1()}
                    className="sortspeed"
                    id="sortspeed1"
                  >
                    1x
                  </div>
                  <div
                    onClick={() => this.handleSpeed2()}
                    className="sortspeed"
                    id="sortspeed2"
                  >
                    2x
                  </div>
                  <div
                    onClick={() => this.handleSpeed3()}
                    className="sortspeed"
                    id="sortspeed3"
                  >
                    3x
                  </div>
                </span>
              </div>
              <div className="sort-algs">
                3. Pick a sorting algorithm
                <span className="sort-algs1">
                  <div className="sorts" onClick={() => this.mergeSort()}>
                    <div>Merge</div>
                    <div>Sort</div>
                  </div>
                  <div className="separator"></div>
                  <div className="sorts" onClick={() => this.quickSort()}>
                    <div>Quick</div>
                    <div>Sort</div>
                  </div>
                  <div className="separator"></div>
                  <div className="sorts" onClick={() => this.bubbleSort()}>
                    <div>Bubble</div>
                    <div>Sort</div>
                  </div>
                </span>
                <span className="sort-algs2">
                  <div
                    className="sorts"
                    id="insertion"
                    onClick={() => this.insertionSort()}
                  >
                    <div>Insertion</div>
                    <div>Sort</div>
                  </div>
                  <div className="separator"></div>
                  <div
                    className="sorts"
                    id="selection"
                    onClick={() => this.selectionSort()}
                  >
                    <div>Selection</div>
                    <div>Sort</div>
                  </div>
                  {/* <button onClick={ () => this.heapSort() }>Heap Sort</button> */}
                </span>
              </div>
              <div className="navbar-links">
                <a
                  target="_blank"
                  href="https://github.com/dawinderS/sortingVisuals"
                >
                  <img src={githubLogo} alt="Github" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dawinder-singh/"
                >
                  <img src={linkedinLogo} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="barshow1">
          <div className="info-show">sdfsdf</div>
          <div className="bar-show" id="barshow">
            {arr.map((val, i) => (
              <div
                className="arr-bars"
                id="arrbars"
                key={i}
                style={{ height: `${val}px` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const randomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}