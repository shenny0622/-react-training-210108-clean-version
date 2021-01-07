// import React,{useState, useEffect} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'


const Card = (props) => {

  const onLikeClick=(e) =>{
    e.preventDefault()
    //抓到當下選得值
    let icon = document.querySelector('.material-icons');
   console.log(e.target.firstElement);
   icon.textContent="favorite"

 }
    
  const {item} =  props;

  return(
    <li className="list-card">
      <div className="img" style={{backgroundImage: `url(${item.Picture1})`}}>
      <a onClick={onLikeClick} href="!#"><span className="circle"><i className="material-icons color like">favorite_border</i></span></a>
          <div className="img-title">
              <h3 className="title-24px">{item.Name}</h3>
              <p className="title-16px">{item.Zone}</p>
          </div>
      </div>
      <div className="content-card">
      {/* <a onClick={onLikeClick} href="#"><span className="circle"><i className="material-icons color like">favorite_border</i></span></a> */}
          <p><img src={clock}  alt="icon"/>{item.Opentime}</p>
          <p><img src={pin}  alt="icon"/>{item.Add}</p>
          <div className="card_down_area">
            <p><img src={phone}  alt="icon"/>{item.Tel}</p>
            <p><img src={tag}  alt="icon"/>{item.Ticketinfo}</p>
          </div>
      </div>
    </li>

  )
};
export default Card;