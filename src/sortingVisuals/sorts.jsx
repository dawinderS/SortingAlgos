import React from 'react';
import './sorts.css';
import { mergeSortAnimations } from '../sortingAlgs/mergeSort';
import { quickSortAnimations } from '../sortingAlgs/quickSort';
import { bubbleSortAnimations } from '../sortingAlgs/bubbleSort';
import { insertionSortAnimations } from "../sortingAlgs/insertionSort";
import { selectionSortAnimations } from '../sortingAlgs/selectionSort';
import githubLogo from '../github-logo.png';
import linkedinLogo from '../linkedin-logo.png';
import { Intro } from '../sortingAlgsInfo/intro';
import { MergeInfo } from '../sortingAlgsInfo/mergeInfo';
import { BubbleInfo } from '../sortingAlgsInfo/bubbleInfo';
import { QuickInfo } from '../sortingAlgsInfo/quickInfo';
import { InsertionInfo } from '../sortingAlgsInfo/insertionInfo';
import { SelectionInfo } from '../sortingAlgsInfo/selectionInfo';

let animation_speed = 5;
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
    this.handleInfoHide();
  }

  resetArr() {
    const BARS = document.getElementById("barshow").clientWidth;
    const HEIGHT = document.getElementById('barshow').clientHeight;
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
      arr.push(randomVal(15, HEIGHT * 0.94));
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
        }, i * animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i === animations.length - 1) {
            this.handleSortEnd();
          }
        }, i * animation_speed);
      }
    }
    this.handleInfoHide();
    this.handleIntroHide();
    this.handleAudio();
    document.getElementById("mergeinfo").style.display = "flex";
  }

  quickSort() {
    const [animations] = quickSortAnimations(this.state.arr);
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
          if (i === animations.length - 2) {
            this.handleSortEnd();
          }
        }, i * animation_speed * 0.6);  
      }
    }
    this.handleInfoHide();
    this.handleIntroHide();
    this.handleAudio();
    document.getElementById("quickinfo").style.display = "flex";
  }

  heapSort() {

  }

  bubbleSort() {
    const [animations] = bubbleSortAnimations(this.state.arr);
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
          if (i > animations.length * 0.8) {
            this.handleSortEnd();
          }
        }, i * animation_speed * 0.5);  
      }
    }
    this.handleInfoHide();
    this.handleIntroHide();
    this.handleAudio();
    document.getElementById("bubbleinfo").style.display = "flex";
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
          if (i === animations.length - 1) {
            this.handleSortEnd();
          }
        }, i * animation_speed * 0.7);  
      }
    }
    this.handleInfoHide();
    this.handleIntroHide();
    this.handleAudio();
    document.getElementById("insertioninfo").style.display = "flex";
  }

  selectionSort() {
    const [animations,sortArray] = selectionSortAnimations(this.state.arr);
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
        let timeout =  setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animation_speed * 0.7);
      }
      else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        let timeout = setTimeout(() => {
          barStyle.height = `${newHeight}px`;
          if (i === animations.length - 1) {
            this.handleSortEnd();
          }
        }, i * animation_speed * 0.7);  
      }
    }
    this.handleInfoHide();
    this.handleIntroHide();
    this.handleAudio();
    document.getElementById("selectioninfo").style.display = "flex";
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
  handleSizeMM() {

    this.handleSizeM();
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
  handleSortStart() {
    document.getElementById("stopsort").style.display = 'flex';
    document.getElementById("allsortalgs").style.display = 'none';
    document.getElementById("reset-btndup").style.display = 'inline';
    document.getElementById("reset-btn").style.display = 'none';
    document.getElementById("arr-sizesdup").style.display = 'flex';
    document.getElementById("arr-sizes").style.display = 'none';
    document.getElementById("sort-spddup").style.display = 'flex';
    document.getElementById("sort-spd").style.display = 'none';
  }
  handleSortEnd() {
    document.getElementById("stopsort").style.display = "none";
    document.getElementById("allsortalgs").style.display = "inline";
    document.getElementById("reset-btndup").style.display = "none";
    document.getElementById("reset-btn").style.display = "inline";
    document.getElementById("arr-sizesdup").style.display = "none";
    document.getElementById("arr-sizes").style.display = "flex";
    document.getElementById("sort-spddup").style.display = "none";
    document.getElementById("sort-spd").style.display = "flex";
  }
  handleInfoHide() {
    let infobars = document.getElementsByClassName('info-showin2');
    for (let i = 0; i < infobars.length; i++) {
      infobars[i].style.display = "none";
    }
  }
  handleIntroHide() {
    document.getElementById("intro").style.display = "none";
  }
  handleAudio() {
    let audio = document.getElementsByTagName('audio');
    for (let i = 0; i < audio.length; i++) {
      audio[i].pause();
      audio[i].currentTime = 0;
    }
  }
  handleEnd() {
    window.location.reload();
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
              <div className="reset-btn" id='reset-btn' onClick={() => this.resetArr()}>
                Generate New Array
              </div>
              <div className="reset-btn" id='reset-btndup'>
                Generate New Array
              </div>
              <div className="array-size">
                1. Choose array size
                <span id='arr-sizes'>
                  <div onClick={() => this.handleSizeS()} className="arrsize" id="arrsize1">
                    S
                  </div>
                  <div onClick={() => this.handleSizeMM()} className="arrsize" id="arrsize2">
                    M
                  </div>
                  <div
                    onClick={() => this.handleSizeL()}
                    className="arrsize"
                    id="arrsize3"
                    style={{ backgroundColor: "rgb(0, 77, 77)" }}>
                    L
                  </div>
                </span>
                <span id='arr-sizesdup'>
                  <div className="arrsize" id="arrsize1">S</div>
                  <div className="arrsize" id="arrsize2">M</div>
                  <div className="arrsize" id="arrsize3" style={{ backgroundColor: "rgb(0, 77, 77)" }}>
                    L
                  </div>
                </span>
              </div>
              <div className="sort-speed">
                2. Select sorting speed
                <span id='sort-spd'>
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
                <span id='sort-spddup'>
                  <div className="sortspeed" id="sortspeed1">
                    1x
                  </div>
                  <div className="sortspeed" id="sortspeed2">
                    2x
                  </div>
                  <div className="sortspeed" id="sortspeed3">
                    3x
                  </div>
                </span>
              </div>
              <div
                className="sort-algs"
                id="allsortalgs"
                onClick={() => this.handleSortStart()}
              >
                3. Pick a sorting algorithm
                <span className="sort-algs1">
                  <div className="sorts" onClick={() => this.quickSort()}>
                    <div>Quick</div>
                    <div>Sort</div>
                  </div>
                  <div className="separator"></div>
                  <div
                    className="sorts"
                    id="mergesortpad"
                    onClick={() => this.mergeSort()}
                  >
                    <div>Merge</div>
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
              <div id="stopsort" onClick={() => this.handleEnd()}>
                3. Pick a sorting algorithm
                <div id='stopsort-in'>
                  <div>Stop sorting</div><div>[Reset]</div>
                </div>
              </div>
              <div className="navbar-links">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/dawinderS/sortingVisuals"
                >
                  <img src={githubLogo} alt="Github" />
                </a>
                <a
                  rel="noopener noreferrer"
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
          <div className="info-show">
            <Intro />
            <MergeInfo />
            <QuickInfo />
            <BubbleInfo />
            <InsertionInfo />
            <SelectionInfo />
          </div>
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
