import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random-color-generator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator'
import TabsTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian/> */}

      {/* <RandomColor/>/ */}
      {/* <StarRating noOfStars = {10}/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} 
      page={"1"}
      limit={"5"}
       } */ }

       {/* <LoadMoreData/> */}
       {/* <TreeView menus = {menus}/> */}
       {/* <QrCodeGenerator/> */}
       {/* <LightDarkMode/> */}
       {/* <ScrollIndicator url = {"https://dummyjson.com/products?limit=100"} /> */}
       {/* <TabsTest/> */}
       <ModalTest/>
    </div>
  );
}

export default App;
