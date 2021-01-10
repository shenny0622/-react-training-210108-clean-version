import React,{useState,useEffect} from "react";
import clock from '../images/icons_clock.png';
import pin from '../images/icons_pin.png';
import phone from '../images/icons_phone.png';
import tag from '../images/icons_tag.png';



const Card = (props) => {
  //isFavorite = true > add favorite already
  //isFavorite = false > haven't added in  favorite list
  const [isFavorite,setIsFavorite] = useState(false);//based localstorage
  
  useEffect(()=>{
    if(localStorage.getItem('myFavoirite')!== null){
        console.log('id',props.item.Id)
      let myFavoirite = JSON.parse(localStorage.getItem('myFavoirite'));
      let index = myFavoirite.indexOf(props.item.Id);
      console.log('index',index)

      if(index >=0)
       setIsFavorite(!isFavorite);
      
       
       console.log('isFavorite',isFavorite)
      
    }
  },[]);
 




  const onLikeClick=(e) =>{
    e.preventDefault()
    
    //1. check isFavorite 
    if (isFavorite === false) 
    {
      //2. change style
      //style
      e.target.textContent="favorite"
      //control data
      // console.log('id', e.target.parentNode.parentNode.parentNode.id)
      let currentId =  e.target.parentNode.parentNode.parentNode.id;
    
      if(localStorage.getItem('myFavoirite')!== null){
        
        let myFavoirite = JSON.parse(localStorage.getItem('myFavoirite'));
        if(currentId !=='')
          myFavoirite.push(currentId);
        localStorage.setItem('myFavoirite',JSON.stringify(myFavoirite));
      }else{
        let myFavoirite = [];
        if(currentId !=='')
          myFavoirite.push(currentId);
        localStorage.setItem('myFavoirite',JSON.stringify(myFavoirite));
      }
     
    } 
    else {
      //style
      e.target.textContent="favorite-border"
      //control data
      // console.log('id', e.target.parentNode.parentNode.parentNode.id)
      let currentId =  e.target.parentNode.parentNode.parentNode.id;
    
      if(localStorage.getItem('myFavoirite')!== null){
        
        let myFavoirite = JSON.parse(localStorage.getItem('myFavoirite'));
        if(currentId !==''){
          let index = myFavoirite.indexOf(currentId);
          myFavoirite.splice(index,1);
        }
         
        localStorage.setItem('myFavoirite',JSON.stringify(myFavoirite));
      }else{
        alert('程式有誤請聯絡管理員');
      }
    }
    // if (isFavorite=== false) // 也可以寫成 !isFavorite ,"！"代表 not(負負得正，true 的話就會執行後面程式)
    // {
    //   //style
    //   e.target.textContent="favorite"
    //   //control data
    //   // console.log('id', e.target.parentNode.parentNode.parentNode.id)
    //   let currentId =  e.target.parentNode.parentNode.parentNode.id;
    //   let myFavoirite = [];

    //   if(localStorage.getItem('myFavoirite')!== null){
    //     myFavoirite = JSON.parse(localStorage.getItem('myFavoirite'));
    //   }
    //   if(currentId !=='')
    //     myFavoirite.push(currentId);
    //   localStorage.setItem('myFavoirite',JSON.stringify(myFavoirite));
    // } 
    // else{
    //   //style
    //   e.target.textContent="favorite-border"
    //   //controller

    //   let currentId =  e.target.parentNode.parentNode.parentNode.id;
    //   let myFavoirite = [];
    //   if(currentId !=='')
    //     myFavoirite.splice(currentId);
    //   localStorage.setItem('myFavoirite',JSON.stringify(myFavoirite));
    // }

       
   
    //3. udate isFavorite
    setIsFavorite(!isFavorite);
    
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