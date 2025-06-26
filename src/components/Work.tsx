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
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
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
                  <h4>Attendance Management System using Face Recognition</h4>
                  <p>Automated attendance tracking using facial recognition technology.</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, OpenCV, Machine Learning</p>
            </div>
            <WorkImage image="/images/attendance.png" alt="Attendance Management System" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>AI Desktop Assistant - JARVIS</h4>
                  <p>Voice-controlled AI assistant for desktop automation and productivity.</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Speech Recognition, NLP</p>
            </div>
            <WorkImage image="/images/jarvis.png" alt="AI Desktop Assistant - JARVIS" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Credit Card Fraud Detection</h4>
                  <p>Machine learning model to detect fraudulent credit card transactions.</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Scikit-learn, Data Analysis</p>
            </div>
            <WorkImage image="/images/credit.png" alt="Credit Card Fraud Detection" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;
