import React from 'react';
import PropTypes from 'prop-types';
import './key.css';
// import { inherits } from 'util';

const Key = ({ value, onClick, keyboardState }) => {

  console.log(keyboardState);

  const content = ['shift', 'enter', 'delete'].includes(value) ? 
  <img src={'./img/'+value+'.png'} alt={value} /> 
  : value;


  return (
    <button className="key" id={value} 
    style={{
      backgroundColor: value === 'shift' && keyboardState === 'manyUpperCase' ? 'rgb(106, 163, 137)':
      value==='shift' && keyboardState==='oneUpperCase'? 'rgb(150, 232, 195)':''
    
}}
    onClick={() => onClick(value)}>
      {content}    </button>
  );
};

Key.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// function onClick(value) {
//   console.log(value);
// }
export default Key;
