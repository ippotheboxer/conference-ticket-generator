import React from "react";
// Components
import Header from "./components/Header";
import Message from "./components/Message";
import Form from "./components/Form";
// Images
import sShapeDecoration from "./assets/images/pattern-squiggly-line-top.svg";
import curlShapePatternDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import curlShapePatternMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import circlePattern from "./assets/images/pattern-circle.svg";

const App:React.FC = () => {
  return (
    <main className="flex flex-col items-center xl:bg-[url(assets/images/pattern-lines.svg),_url(assets/images/background-desktop.png)] md:bg-[url(assets/images/pattern-lines.svg),_url(assets/images/background-tablet.png)] bg-[url(assets/images/pattern-lines.svg),_url(assets/images/background-mobile.png)] bg-cover min-h-screen min-w-full">
      <img src={sShapeDecoration} alt="Squiggly line" className="absolute right-0 inline-block xl:w-80 xl:h-60 md:w-60 md:h-40 h-20 w-30 top-0" />
      <Header />
      <section className="flex items-center flex-col text-center">
        <Message 
          title="Your Journey to Coding Conf 2025 Starts Here!"
          paragraph="Secure your spot at next year's biggest coding conference." 
        />
        <Form />
        <img src={circlePattern} alt="Circle pattern" className="absolute inline-block right-0 top-100 md:right-10 lg:right-32 xl:right-50 2xl:right-100 w-32 md:w-44" />
      </section>
      <picture>
        <source srcSet={`${curlShapePatternDesktop}`} media="(min-width: 800px)" />
        <img src={`${curlShapePatternMobile}`} alt="Curl pattern" className="absolute inline-block bottom-0 left-0 sm:w-120 w-60 lg:w-200 z-0" />
      </picture>
    </main>
  );
}

export default App;
