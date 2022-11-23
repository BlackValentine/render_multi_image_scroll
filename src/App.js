import { useEffect, useRef } from 'react';
import './App.css';

function App() {

  const demoVideo1 = useRef([])
  
  useEffect(() => {
    const demoVideo1Context = demoVideo1.current.getContext("2d");
    demoVideo1.current.style.height = "100vh"
    demoVideo1.current.style.width = "100vw"
    img.onLoad = () => {
      demoVideo1Context.drawImage(img, 0, 0)
    }
    console.log(img)
  })

  const demoVideo1Info = {
    totalFrames: 440,
    totalTime: 7,
    images: [],
    currentFrame: 0,
    currentImage: (index) => `./images/Dognut/Dognut${index.toString().padStart(3, "0")}.jpg`
  }

  const img = new Image();
  img.src = require(`${demoVideo1Info.currentImage(0)}`);
  console.log(img.src)

  return (
    <div className="App">
      <main>
        <section><h1>Scroll Down Bro 👇</h1></section>
        <div className="textInfo">
          <h2>Welcome to Food VideoGraphy.com</h2>
          <h3>Where we take your Dognut and Shuv a Camera Through it</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores
            eos at aliquid cumque sint odio rerum accusantium nulla dolorem, totam
            incidunt dolorum tempore? Quam officiis consequuntur ex maxime nihil.
          </p>
          <button>Buy this service</button>
          <span>Scroll Down for demo bro 👇</span>
        </div>
        <canvas
          ref={demoVideo1}
          className="info"
          id="demo_video1"
          style={{ backgroundColor: "Brown" }}
        ></canvas>
        <div className="textInfo">
          <h2>Our Other Features</h2>
          <h3>WE will take your tiffin and start filming it</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores
            eos at aliquid cumque sint odio rerum accusantium nulla dolorem, totam
            incidunt dolorum tempore? Quam officiis consequuntur ex maxime nihil.
          </p>
          <button>Buy this service</button>
          <span>Scroll Down for demo bro 👇</span>
        </div>
        <canvas
          className="info"
          id="demo_video2"
          style={{ backgroundColor: "RoyalBlue" }}
        ></canvas>
      </main>
      <footer>
        <p>Please Buy our Service <button>Buy Now</button></p>
      </footer>
    </div>
  );
}

export default App;
