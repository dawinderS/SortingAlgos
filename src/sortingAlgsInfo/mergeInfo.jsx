import React from 'react';
import '../sortingVisuals/sorts.css';

export const InfoBar = ({  }) => {
  const display = true ? (
    <div className="info-showin2">
      <div className="info-bar">
        <div className='info-barname'>
          <span></span>
          <div>Merge Sort</div>
          <span></span>
        </div>
      </div>
      {/* <div className="info-bar">
        whats happening
      </div> */}
      <div className="info-bar" id='info-barcode'>
        code
      </div>
      <div className="info-bar" id='extra-links'>
        audio links
      </div>
    </div>
  ) : (
    <div>byeffgdsfgdfg</div>
  );

  return (
    <div className='info-showin'>
      {display}
    </div>
  );
};