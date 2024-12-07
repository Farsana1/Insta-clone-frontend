import { useState } from 'react'
import './App.css'
import LeftPart from './components/LeftPart'
import MidPart from './components/MidPart'
import RightPart from './components/RightPart'
import { Route, Routes } from 'react-router-dom'
import User from './pages/User'

function App() {
  
  const [showCard, setShowCard] = useState(false);

 
  const handleShowCard = () => {
    setShowCard(!showCard);
    console.log(showCard);
    
    
  };

  const [postData, setPostData] = useState([]);

  const handlePostData = (data) => {
    setPostData(data);
  };

  return (
    <>
    <Routes>
    <Route path="/profile" element={
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <LeftPart showfunc={handleShowCard}/>
              </div>
              <div className="col-md-10">
              <User file={postData.file} caption={postData.caption} />
              </div>
            </div>
          </div>
        } />
    

    <Route path="/" element={
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 d-none d-lg-block">
                <LeftPart showfunc={handleShowCard} />
              </div>
              <div className="col-md-7">
                <MidPart show={showCard} addPost={handlePostData} />
              </div>
              <div className="col-md-3 d-none d-lg-block">
                <RightPart />
              </div>
            </div>
          </div>
        } />
      </Routes>

    </>
  )
}

export default App
