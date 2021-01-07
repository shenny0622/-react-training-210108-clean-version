import './css/App.css';
import gotopIcon from './images/btn_goTop.png'
import Buttons from './components/Buttons';
import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';
import Card from './components/Card';
import React,{useState, useEffect} from "react";
// import 'materialize-css';
// import { HashRouter } from "react-router-dom";
;


const App = () =>{
    //宣告變數
    const [state,setState] = useState({
      cards: [],
      error: null,
      isLoaded: false,
      itemZones:[], //宣告一個新的陣列(不重複區域)
      cardsByZone:[], //宣告一個新的陣列(下拉選單和按鈕撈到的值跟父層 API 資料做比對)
      currentZone:'請選擇行政區'
    });
    //分頁
    const [currentPage, setCurrentPage] = useState(1);//預設當前 page
    const [cardsPerPage] = useState(4);

//API 資料
// 初始值
useEffect(()=>{
    fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
      .then(res => res.json())
      .then(
        (data) => {
          //setState : 要更新 state 狀態  
          setState({
            isLoaded: true,
            cards: data.result.records,
            cardsByZone:[],
            currentZone:'請選擇行政區',
            // 過濾重複的區域資料，並存在 itemZones 的新陣列中
            itemZones: data.result.records.map((item)=>(item.Zone)).filter(function(element, index, arr){
                return arr.indexOf(element) === index;
            })

          });
        },
        (sError) => {
          setState({
            isLoaded: true,
            error:sError,
            // cards:null
          });
        }
      );
      
      //scroll 效果
      function handleScroll(e) {
        // console.log("scrolling");測試用
        if (document.documentElement.scrollTop > 200) {
          document.querySelector('.goTop').style.display = 'block'; 
         } else{
           document.querySelector('.goTop').style.display = 'none';
         }
      }

      //scroll 監聽應該綁在 window
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
},[]);

  // 1.fifter 篩選
  // 2.綁定 state >宣告變數給他一個空陣列

const getCurrentZone =(zone) =>{
    // console 第一個變數 'getCurrentZone' 代表是子層傳給父層撈到的值(第一個變數好辨認是哪邊產生的值)
    // console.log('getCurrentZone',zone);
    
    // 在 getCurrentZone function 中，cardsByZone 在跑完 filter 後狀態會改變
    setState({
        ...state, // keep 住當前的狀態 ask!
        currentZone:zone,
        // element 是一個物件，cardsByZone 是一個新陣列 物件
        cardsByZone: cards.filter(function(element){
            return element.Zone === zone;
        })

      });    
}

//scrollOnTop 監聽事件
const scrollOnTop =(e)=>{
    document.documentElement.scrollTop =0;
}

const { cards,itemZones,cardsByZone,currentZone,} = state;

 // Get current cards
 const indexOfLastCard = currentPage * cardsPerPage;//當下所在 page 最後一個卡片內容
 const indexOfFirstCard = indexOfLastCard - cardsPerPage;//當下所在 page 第一個卡片內容
 const currentCards = cardsByZone.slice(indexOfFirstCard, indexOfLastCard);//slice去頭不含尾 取得部分資料

 // Change page
 const paginate = pageNumber => setCurrentPage(pageNumber);
 
return (
    <div className="App">
      <header className="banner">
        <div className="container">
            <h1>高雄旅遊資訊網</h1>
             {/*子傳父的值，定義 getZone ，且會觸發 getCurrentZone 函式， */}
            <Dropdown itemZones= {itemZones} getZone={getCurrentZone}/>
            <div className="menu">
                <p className="title-menu">熱門行政區</p>
                <ul className="buttonList">
                    <li><Buttons content="苓雅區" color="purple" getZone={getCurrentZone}/></li>
                    <li><Buttons content="三民區" color="orange" getZone={getCurrentZone}/></li>
                    <li><Buttons content="前鎮區" color="yellow" getZone={getCurrentZone}/></li>
                    <li><Buttons content="左營區" color="blue" getZone={getCurrentZone}/></li>
                </ul>
            </div>
            <div className="icon-menu">
                <hr className="icon-menu-line"/>
            </div> 
        </div>
    </header>
    <div className="content container"> 
        <div className="main">
            <h2 className="title-main">{currentZone}</h2>
            <ul className="list">
                {/* 因為新增分頁功能所以要改成 currentCards */}
            {currentCards.map(function(card){
                return<Card key={card.Id} item={card}/>
                  // 通常 map 要加上 key (固定值)
            })}
            </ul>
        </div>

        <div className="goTop" onClick={scrollOnTop}>
            <img src={gotopIcon}  alt="gotopIcon"/>
        </div>
        
        <Pagination
        cardsPerPage={cardsPerPage}
        totalPosts={cardsByZone.length}
        paginate={paginate}
      />
    </div>
    
    <footer>
        <div className="container">
            <p>高雄旅遊網</p>
            <p className="pStyle">資料來源: 高雄市政府</p>
        </div>
    </footer>
    
</div>
  );
}

export default App;
