import { useEffect, useState } from "react";
import "./WhatIsTurBoPage.css";
import Header from "../ui/Header";

export default function WhatIsTurboPage() {
  const fullText =
    "TurBo Grader is an initiative to develop an automatic evaluation tool for programming projects. This tool is designed to help teachers assess students coding assignments more effectively and fairly. Its primary goal is to overcome the limitations of similar systems by providing an interactive platform with a user-friendly interface for both students and teachers. This aims to save time and resources in educational processes, enhance the quality of education, and improve students learning experiences. Additionally, TurBoGrader is the first automatic evaluation tool developed in Turkiye. It does not share code with servers outside the country, thus ensuring security and data protection.";
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 20;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
    }
  }, [typedText]);

  return (
    <div className="turbo-grader-container">
      {<Header />}
      <div className="content-container">
        <div className="text-section">
          <h1 className="pixelated-text">
            What is Tur<span className="blue-text">Bo</span>Grader?
          </h1>
          <p className="typing-effect">{typedText}</p>
        </div>
        <div className="video-section">
          <h1 className="pixelated-text">
            Introduction to Tur<span className="blue-text">Bo</span>Grader
          </h1>
          <iframe
            width="100%"
            height="50%"
            src="https://www.youtube.com/embed/Sy5IR-zk8UA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
