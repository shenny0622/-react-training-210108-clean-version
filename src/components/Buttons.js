// 原本 components 使用 function 的寫法(因為使用 hook 串 api，盡量統一都使用 funtion 寫法)
// import React,{useState, useEffect} from "react";

const Buttons = (props) =>{
  const { 
    color,
    content,
    // ...Props
  } = props;
  
  const onButtonClick=(e) =>{
     //抓到當下選得值
    // console.log('onButtonClick',e.target.value);
    props.getZone(e.target.value);
  }
  return (
    // <button>{this.props.text} </button>
    // <button className={color} {...Props} onClick={() => alert(color)}>
    <button type="button" className={color} onClick={onButtonClick} value={content}>
    {content}
    </button>  
  );  
};

export default Buttons;