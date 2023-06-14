import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "Main">
        <div className = "Left">
          <div className='LeftNav'>
            <div className='LeftNavLeft'>
              <div className='BackButton'>
                <i class="ri-arrow-left-line"></i>
                
              </div>
            </div>
            <div className='LeftNavRight'>
              <div className='HomeSection'>
                <a href='https://tappet.netlify.app/'>Home</a>
              </div>
              <div className = "AboutSection">
                <a href='https://tappet.netlify.app/'>About</a>
              </div>
              <div className='TwitterIconWrapper'>
              <i class="ri-linkedin-box-fill"></i>
              
              </div>
              
            </div>
          </div>
          <div className='LeftBodyText'>
            <div className='Heading'>
              Hello,
            </div>
            <div className='Text'>
              Lorem ipsum dolor sit amet, sed, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
            </div>
            <div className='ReadLinkWrapper'>
              <a href='https://tappet.netlify.app/'>Read</a>
            </div>
            
          </div>

        </div>
        <div className='Right'>
          <div className='RightTop'>
            <div className='RightTopLeft'>

            </div>
            <div className='RightTopRight'>

            </div>
          </div>
          <div className='RightBottom'>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
