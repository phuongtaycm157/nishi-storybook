import React from 'react';
import './Card.css';

import Button from './Button';

function Card (props) {
  const { imgSrc, title, children } = props
  return (
    <div className='Card'>
      <div className="card-img" style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="card-body">
        <p className='card-title'>{ title }</p>
        <p className='card-text'>{ children }</p>
        <Button color='primary'>Add To Card</Button>
      </div>
    </div>
  )
}

export default {title: 'Card'}
export const DefaultCard = () => <Card title='Lizard' imgSrc='https://picsum.photos/300/200' >
  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
</Card>