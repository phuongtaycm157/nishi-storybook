import React from 'react';
import bookImage from '../images/book.svg';
import bookImageColor from '../images/book-color.svg';

function MenuItem ({icon=bookImage, iconColor, active=false}) {
  return (
    <div
      style={{
        border: '1px solid black',
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 60
      }}
    >
      <img src={icon} alt='logo' 
        style={{
          width: 100,
          height: 50
        }}
      />
      <span style={{
        fontSize: 24,
        fontWeight: 600
      }}>READ</span>
    </div>
  )
}

export default { title: 'MenuItem'};



export const normal = () => <MenuItem icon={bookImageColor} />;