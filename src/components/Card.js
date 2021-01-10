import React,{useState} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'


const Card = (props) => {
  const [state,setState] = useState({
    isFavorite: false,
  });

  const onLikeClick=(e) =>{
    setState({
      isFavorite: true,
      })
//抓到當下選得值
    e.preventDefault()
    // let icon = document.querySelector('.material-icons');
  //  console.log(e.target);
  let isFavorite=e.target.textContent;

   if (isFavorite =="false")
      return e.target.textContent="favorite"
  else (isFavorite =="true")  
      return e.target.textContent="favorite-border"

    
 }
    
  const {item} =  props;

  return(
    <li className="list-card">
      <div className="img" style={{backgroundImage: `url(${item.Picture1})`}}>
      <a className="material-icons" onClick={onLikeClick} href="!#"><i>favorite_border</i>
      </a>
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