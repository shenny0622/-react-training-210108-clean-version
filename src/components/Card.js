import React,{useState} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'


const Card = (props) => {
  //isFavorite = true > add favorite already
  //isFavorite = false > haven't added in  favorite list
  const [isFavorite,setIsFavorite] = useState(false);
  
  const onLikeClick=(e) =>{
    
  
    //1. check isFavorite 
    e.preventDefault()
    //2. change style
    if (!isFavorite)//>target === false
    {
      //style
      e.target.textContent="favorite"
      //control data
      console.log('id', e.target.parentNode.parentNode.parentNode.id)
      let currentId =  e.target.parentNode.parentNode.parentNode.id;
      let myFavoirite = [];

      if(localStorage.getItem('myFavoirite')!== null){
        myFavoirite = JSON.parse(localStorage.getItem('myFavoirite'));
      }
      if(currentId !=='')
        myFavoirite.push(currentId);
      localStorage.setItem('myFavoirite',JSON.stringify(myFavoirite));
    } 
    else{
      //style
      e.target.textContent="favorite-border"
      //controller
      // myFavoirite = JSON.parse(localStorage.getItem('myFavoirite'));
      // myFavoirite.splice();
    }
       
    //3. udate isFavorite
    setIsFavorite(!isFavorite);

//抓到當下選得值
    e.preventDefault()



  
    
 }
    
  const {item} =  props;

  return(
    <li className="list-card" id={item.Id}>
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