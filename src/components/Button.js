import React from 'react';
import PropType from 'prop-types';

const Color = {
  default: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#e0e0e0',
    hover: '#d5d5d5'
  },
  primary: {
    color: '#fff',
    backgroundColor: '#1976d2',
    hover: '#115293'
  },
  secondary: {
    color: '#fff',
    backgroundColor: '#dc004e',
    hover: '#9a0036'
  }
}

function Button (props) {
  const { children, onClick, color } = props;
  return (
    <button
      style={{
        color: Color[color].color,
        backgroundColor: Color[color].backgroundColor,
        border: 'none',
        borderRadius: 5,
        padding: '6px 16px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
        cursor: 'pointer',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
      }}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

Button.propType = {
  onClick: PropType.func,
  children: PropType.string,
  color: PropType.string
}

export default Button;