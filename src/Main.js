import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfoliodefault from './portfolio/Portfolio';
import Bonsky from './portfolio/Bonsky';
import Algorithm from './portfolio/Algorithm';
import Gameproject from './portfolio/Gameproject';
import Dmodel from './portfolio/Dmodel';
import Webproject2 from './portfolio/Webproject2';
import Webproject1 from './portfolio/Webproject1';
import Fireball from './portfolio/Fireball';
import Operationmetro from './portfolio/Operationmetro';
import Practicaltraining1 from './portfolio/Practicaltraining1';
import Practicaltraining2 from './portfolio/Practicaltraining2';
import Thesis from './portfolio/Thesis';
import "./styles.css";

const Main = () => {

    const PaddR = "10%";
    const PaddL = "10%";
    const PaddTop = "30px";
    const PaddBot = "30px";
    const TitleFontSize = "30px";
    const TextFontSize = "20px";
    const ColSize = [1, 10];

  const [imageSize, setImageSize] = useState([1200, 500])
  //get window width
  const [windowsize, setwindowsize] = useState([window.innerWidth]);
  //get automatically window width upon window rezise
  useEffect(() => {
    const handlewindowRezise = () => {
      setwindowsize([window.innerWidth]);
    };
    window.addEventListener('resize', handlewindowRezise);
    return () => {
      window.removeEventListener('resize', handlewindowRezise);
    };
  }, []);

  useEffect(() => {

    const ResizeImage = (width, height) => {
        setImageSize([width, height]);
    }

    //resize under 1500px width
    if(windowsize < 1500) {
        const imgWidth = 800;
        const imgHeight = 300;
        ResizeImage(imgWidth, imgHeight)
    }
    else {
        const imgWidth = 1200;
        const imgHeight = 500;
        ResizeImage(imgWidth, imgHeight)
    }
  }, [windowsize])

    return(
        <>
            <Routes>
                <Route path="/" element={ <Home  PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize} /> } />
                <Route path="/about" element={ <About PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/skills" element={ <Skills PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/portfolio" element={ <Portfoliodefault PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/bonskydigital" element={ <Bonsky PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/algorithm" element={ <Algorithm PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ImageSize={imageSize} ColSize={ColSize}/> } />
                <Route path="/gameproject" element={ <Gameproject PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/3dmodel" element={ <Dmodel PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/webproject" element={ <Webproject2 PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/webproject1" element={ <Webproject1 PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/fireballanimation" element={ <Fireball PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/operationmetro" element={ <Operationmetro PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/practicaltraining1" element={ <Practicaltraining1 PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/practicaltraining2" element={ <Practicaltraining2 PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
                <Route path="/thesis" element={ <Thesis PaddR={PaddR} PaddL={PaddL} PaddTop={PaddTop} PaddBot={PaddBot} TitleFontSize={TitleFontSize} TextFontSize={TextFontSize} ColSize={ColSize}/> } />
            </Routes>
        </>
    );
}

export default Main;