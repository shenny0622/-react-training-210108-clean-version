import React,{useState} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'


const Card = (props) => {
  //isFavorite = true > add favorite already
  //isFavorite = false > haven't added in  favorite list
  const [isFavorite,setIsFavorite] = useState(props.isFavorite);//based localstorage
  // const [isFavorite,setIsFavorite] = useState(false); based localstorage
  const {item,myList} =  props;
  const handleClickLike=(e) =>{
    e.preventDefault()
    // console.log(e.target); 測試抓到當下選得值
    //1. check isFavorite 
    if (isFavorite === false)
    {
      //2. change style(add favorite)
      //style
      e.target.textContent="favorite"
      //control data
      //console.log('id',e.target.parentNode.parentNode.parentNode.id)
      let currentId = e.target.parentNode.parentNode.parentNode.id;

      //localStorage 本身已經有之前的資料了
      // if(localStorage.getItem('myFavorite')!== null){
      if(myList !== null){

        // let myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
        // let myFavorite = myList;

        if(currentId !== '')
          myList.push(currentId);

        localStorage.setItem('myFavorite', JSON.stringify(myList)); 
      }else{
        //localStorage 還沒有之前的資料
        let myFavorite = [];
        if(currentId !== '')
          myFavorite.push(currentId);

        localStorage.setItem('myFavorite', JSON.stringify(myFavorite)); 
      }
    }

    else{
      //style (remove favorite)
      e.target.textContent="favorite-border"
      //control data
      //console.log('id',e.target.parentNode.parentNode.parentNode.id)
      let currentId = e.target.parentNode.parentNode.parentNode.id;
      
      // if(localStorage.getItem('myFavorite')!== null){
      if(myList !== null){
        // let myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
        //let myFavorite = myList
        ;
        if(currentId !== ''){
          let index = myList.indexOf(currentId);
          myList.splice(index,1);
        }

        localStorage.setItem('myFavorite', JSON.stringify(myList)); 
      }else{
        alert('景點尚未加入我的最愛');
      } 
    }
    //3. udate isFavorite
    setIsFavorite(!isFavorite)

 }
    
  
  return(
    <li className="list-card" id={item.Id}>
      <div className="img" style={{backgroundImage: `url(${item.Picture1})`}}>
      {/* 不寫死 icon 用三元表示式  */}
      <a className="material-icons" onClick={handleClickLike} href="!#"><i>{!isFavorite?'favorite_border':'favorite'}</i>
      </a>
          <div className="img-title">
              <h3 className="title-24px">{item.Name}</h3>
              <p className="title-16px">{item.Zone}</p>
          </div>
      </div>
      <div className="content-card">
      {/* <a onClick={handleClickLike} href="#"><span className="circle"><i className="material-icons color like">favorite_border</i></span></a> */}
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