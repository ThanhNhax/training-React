import logo from './logo.svg';
import './App.css';
// import DemoFuctionCom from './Components/DemoComponents/DemoFuctionCom';
// import DemoClassCom from './Components/DemoComponents/DemoClassCom';
import BaiTapLayout from './Components/BaiTapLauout/BaiTapLayout';
import BTHeader from './Components/BaiTapLauout/BTHeader';
import BTNav from './Components/BaiTapLauout/BTNav';
import BTContent from './Components/BaiTapLauout/BTContent';
import BTFooter from './Components/BaiTapLauout/BTFooter';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './StateDemo/StateDemo/StateDemo';
import RenderWithMan from './RenderWithMap/RenderWithMan';
import LayoutFilm from './RenderWithMap/LayoutFilm';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesShop from './Props/ShoesShop/ShoesShop';
import DemoXemChiTiet from './Props/DemoXemChiTiet/DemoXemChiTiet';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import BaiTapThucHanhLayout from './BaiTapThucHanhLayout/BaiTapThucHanhLayout';

function App() {
  return (
    <div className='App'>
      {/* <BTHeader />
      <div className='d-flex'>
        <div className='w-50'>
          <BTNav />
        </div>
        <div className='w-50'>
          <BTContent />
        </div>
      </div>
      <BTFooter /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      {/* <StyleWithJSX /> */}
      {/* <StateDemo /> */}
      {/* <RenderWithMan /> */}
      {/* <LayoutFilm /> */}
      {/* <DemoProps></DemoProps> */}
      {/* <ShoesShop /> */}
      {/* <DemoXemChiTiet /> */}
      {/* <ExerciseCarStore /> */}
      <BaiTapThucHanhLayout />
    </div>
  );
}

export default App;
