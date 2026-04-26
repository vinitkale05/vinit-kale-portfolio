import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Sahara Platform</h4>
                  <p>Full-Stack Web App</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>MERN Stack, JWT Auth, Real-time Chat, AI Recommendations</p>
            </div>
            <WorkImage image="/images/saharawebp.png" alt="Sahara Platform" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>AI E-commerce Platform</h4>
                  <p>Machine Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>ML Recommendations, NLP Chatbot, Inventory Prediction</p>
            </div>
            <WorkImage image="/images/ai ecommerce.webp.png" alt="AI E-commerce Platform" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Railway Navigation System</h4>
                  <p>Navigation Prototype</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Real-time Navigation, Accessibility, Data Mapping</p>
            </div>
            <WorkImage image="/images/navigation.webp.png" alt="Railway Navigation System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Detectra</h4>
                  <p>Enterprise Fraud Intelligence System</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Next.js 14, FastAPI, Supabase, Python, Sarvam AI</p>
            </div>
            <WorkImage image="/images/dectra.webp.png" alt="Detectra" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
