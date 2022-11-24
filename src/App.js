import { gsap, Power0 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import './App.css';
gsap.registerPlugin(ScrollTrigger);

function App() {
  
  const demoVideo1Info = {
    totalFrames: 440,
    totalTime: 3,
    images: [],
    currentFrame: 0,
    currentImage: (index) => `./images/Dognut/Dognut${index.toString().padStart(3, "0")}.jpg`
  }

  const demoVideo2Info = {
    totalFrames: 562,
    totalTime: 5,
    images: [],
    currentFrame: 0,
    currentImage: (index) => `./images/TestVideoFrames/2022-06-12 22-39-07converted${index.toString().padStart(3, "0")}.jpg`
  }

  for (let i = 0; i <= demoVideo1Info.totalFrames; i++) {
    const img = new Image();
    img.src = require(`${demoVideo1Info.currentImage(i)}`);
    demoVideo1Info.images.push(img)
  }

  for (let i = 0; i <= demoVideo2Info.totalFrames; i++) {
    const img = new Image();
    img.src = require(`${demoVideo2Info.currentImage(i)}`);
    demoVideo2Info.images.push(img)
  }
  
  const demoVideo1 = useRef([])
  const demoVideo2 = useRef([])
  
  useEffect(() => {
    demoVideo1.current.width = window.screen.width;
    demoVideo1.current.height = window.screen.height;
    gsap.to(demoVideo1Info, {
      currentFrame: demoVideo1Info.totalFrames,
      snap: "currentFrame",
      ease: "none",
      scrollTrigger: {
        trigger: demoVideo1.current,
        start: "top",
        end: `bottom+=${demoVideo1Info.totalFrames*demoVideo1Info.totalTime}`,
        scrub: true,
        pin: true,
      },
      onUpdate: renderDemoVideo1
    })

    demoVideo1Info.images[0].onload = () => {
      const demoVideo1Context = demoVideo1.current.getContext("2d");
      demoVideo1Context.drawImage(demoVideo1Info.images[0], 0, 0)
    }

    demoVideo2.current.width = window.screen.width;
    demoVideo2.current.height = window.screen.height;
    gsap.to(demoVideo2Info, {
      currentFrame: demoVideo2Info.totalFrames,
      snap: "currentFrame",
      ease: "none",
      scrollTrigger: {
        trigger: demoVideo2.current,
        start: "top",
        end: `bottom+=${demoVideo2Info.totalFrames*demoVideo2Info.totalTime}`,
        scrub: true,
        pin: true,
      },
      onUpdate: renderDemoVideo2
    })

    demoVideo2Info.images[0].onload = () => {
      const demoVideo2Context = demoVideo2.current.getContext("2d");
      demoVideo2Context.drawImage(demoVideo2Info.images[0], 0, 0)
    }
  })

  const renderDemoVideo1 = () => {
    const demoVideo1Context = demoVideo1.current.getContext("2d");
    demoVideo1Context.drawImage(demoVideo1Info.images[demoVideo1Info.currentFrame], 0, 0)
  }

  const renderDemoVideo2 = () => {
    const demoVideo2Context = demoVideo2.current.getContext("2d");
    demoVideo2Context.drawImage(demoVideo2Info.images[demoVideo2Info.currentFrame], 0, 0)
  }

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
          ref={demoVideo2}
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
