import React from 'react'
import './widget.scss';
import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOn, PersonOutline, ShoppingCart } from '@mui/icons-material';

const Widget = ({type}) => {
  let data;
  //temporary
  const amount = 100;
  const diff = 20

  switch(type){
    case "user":
      data = {
        title:"USERS",
        isMoney:false,
        link:"see all users",
        icon: <PersonOutline className='icon' style={{color:"crimson",background:"rgba(255, 0, 0, 0.2)"}} />,
      };
      break;
    case "order":
      data = {
        title:"ORDERS",
        isMoney:false,
        link:"see all users",
        icon: <ShoppingCart className='icon' style={{color:"crimson",background:"rgba(218, 165, 32, 0.2)"}}/>,
      };
      break;
    case "earning":
      data = {
        title:"EARNINGS",
        isMoney:true,
        link:"view net earning",
        icon: <MonetizationOn className='icon' style={{color:"crimson",background:"rgba(0, 128, 0, 0.2)"}}/>,
      };
      break;
    case "balance":
      data = {
        title:"BALANCE",
        isMoney:true,
        link:"See details",
        icon: <AccountBalanceOutlined className='icon' style={{color:"crimson",background:"rgba(128, 0, 128, 0.2)"}}/>,
      };
      break;
    default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.isMoney && "$"}{amount}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
