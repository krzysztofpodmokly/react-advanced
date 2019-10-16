import React, { useState, useRef } from 'react';
import Columns from '../components/Columns/Columns';
import { useDetectOutsideClick } from '../hooks/useDetectOutsideClick';

const Tips = () => {
  const [isTooltipOpen, setTooltipVisibility] = useState(false);
  const tooltipRef = useRef(null);
  useDetectOutsideClick(tooltipRef, setTooltipVisibility);

  return (
    <div>
      <h2 className='title is-3'>Tips</h2>
      <button
        className='button is-large is-primary'
        onClick={() => setTooltipVisibility(!isTooltipOpen)}
      >
        Open tooltip
      </button>
      {isTooltipOpen && (
        <div ref={tooltipRef} className='notification is-primary'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          tenetur suscipit blanditiis ullam excepturi dolor vel nihil ipsum modi
          quos unde earum assumenda quibusdam magnam harum magni exercitationem
          rem maiores?
        </div>
      )}

      <Columns />
    </div>
  );
};

export default Tips;
