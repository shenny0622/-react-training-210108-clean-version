// import React,{useState, useEffect} from "react";
const Dropdown = (props) =>{
  const {itemZones} =  props;
  
    //綁定 onChange 事件
  const onDropDownCahnge =(e) =>{
    // 測試是否有綁成功 console.log('hi');
    // console 第一個變數 'onDropDownCahnge' 代表是子層自己撈的值 (第一個變數好辨認是哪邊產生的值)
    // console.log('onDropDownCahnge',e.target.value);
    
    //子傳給父的值
    props.getZone(e.target.value);
  }

  return(
    //如何預設是“請選擇行政區”
    <select value={props.getZone.value} defaultValue="--請選擇行政區--" onChange={onDropDownCahnge}>
           <option value="--請選擇行政區--" disabled>--請選擇行政區--</option>
           {/* selected 要拿掉  */ }
           {/* react建議設定預設值的方式是 在 select標籤使用 value， 
            * /}
          
           {/* notes:使用 map 會自動 return，但用 forEach 和 for 迴圈不會自動 return，
            因此這邊建議直接使用 map 比較好 */}
          {itemZones.map((zone) =>(
              // itemZones[index] = zone
            <option key={zone} value={zone}>{zone}</option>   
            )
          )}
    </select>

  )
}  
     
export default Dropdown;