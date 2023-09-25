import React from "react";
import Header from "./components/header";
import FirstSection from "./homePage/firstSection";
import Footer from "./components/footer";
import SecondSection from "./homePage/secondSection";
import ThirdSection from "./homePage/thirdSection";
import FourthSection from "./homePage/fourthSection";
import FifthSection from "./homePage/fifthSection";
import SixthSection from "./homePage/sixthSection";
import SeventhSection from "./homePage/seventhSection";

import AutoScrollDiv from "./homePage/AutoScroll";
function index() {
  return (
    <div className="">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/* <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">
          Horizontal Auto-Scrolling Carousel
        </h1>
         <AutoScrollDiv /> 
      </div> */}
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}
export default index;
