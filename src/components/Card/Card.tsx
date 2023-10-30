import React,{FC} from 'react';
import {Button} from 'antd';

// Style
import './Card.scss'

interface CardSpecs {
  src: string;
  label:string;
}

interface CustomCard{
  cardImg : string;
  title: string;

}

// Created CardSpecs To Prevents Duplicate In Code
const CardSpecs:FC <CardSpecs> = ({src, label}) => {
  return (
    <div>
      <img src={src}/>
      <span className='card-specs__label'>{label}</span>
      </div>
  )
}




const CustomCard:React.FC<CustomCard> = ({cardImg, title}) => {
  return (
    <div className="custom-card">
      <img src={cardImg} alt="horse"  />
      <div className="custom-card__info">
      <h2>{title}</h2>

      <div className="custom-card__desc">A beautiful townhouse in the heart of Miami’s down
town district. With 3 bedrooms and a heated pool.</div>
      </div>

      <div className='custom-card__specs'>
      <CardSpecs src={'location.svg'} label={"Boston"}/>
      <CardSpecs src={'bedroom.svg'}label={"bedroom"}/>
      <CardSpecs src={"villa.svg"} label={"villa"}/>
      </div>

      <div className='custom-card__button'>
      <Button>View Listing Details</Button>
      </div>

    </div>
  );
};

export default CustomCard;
