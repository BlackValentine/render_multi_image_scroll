import { gsap } from 'gsap';
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
    totalTime: 3,
    images: [],
    currentFrame: 0,
    currentImage: (index) => `./images/TestVideoFrames/2022-06-12 22-39-07converted${index.toString().padStart(3, "0")}.jpg`
  }

  const demoVideo1 = useRef([])
  const demoVideo2 = useRef([])

  useEffect(() => {
    animateOnScroll(demoVideo1, demoVideo1Info)
    animateOnScroll(demoVideo2, demoVideo2Info)
  })

  const animateOnScroll = (canvasID, videoInfo) => {
    const demoVideoContext = canvasID.current.getContext("2d");

    for (let i = 0; i <= videoInfo.totalFrames; i++) {
      const img = new Image();
      img.src = require(`${videoInfo.currentImage(i)}`);
      videoInfo.images.push(img)
    }

    const renderDemoVideo = () => {
      demoVideoContext.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0)
    }

    videoInfo.images[0].onload = () => {
      demoVideoContext.drawImage(videoInfo.images[0], 0, 0)
    }

    canvasID.current.width = window.screen.width;
    canvasID.current.height = window.screen.height;

    gsap.to(videoInfo, {
      currentFrame: videoInfo.totalFrames,
      snap: "currentFrame",
      ease: "none",
      scrollTrigger: {
        trigger: canvasID.current,
        start: "top",
        end: `bottom+=${videoInfo.totalFrames * videoInfo.totalTime}`,
        scrub: true,
        pin: true,
      },
      onUpdate: renderDemoVideo
    })
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
