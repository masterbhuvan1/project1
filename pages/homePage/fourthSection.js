import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import HorizontalScrollDiv from "./ScrollableDiv";
import AutoScroll from "./AutoScroll";
// import "./letssee.css";
const courses = [
  {
    id: 0,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image1.svg",
  },
  {
    id: 1,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image1.svg",
  },
  {
    id: 2,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image2.svg",
  },
  {
    id: 3,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 4,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 4,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 4,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 4,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 4,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 4,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
];
function Card(props) {
  return (
    <div className="flex-shrink-0 justify-start text-start py-7 h-full bg-white rounded-2xl mx-4 p-4 flex flex-col items-center">
      <div className="">
        <Image src={props.data.svg} height={278} width={368} />
        <div className="relative bottom-4 left-6">
          <Image src="./courses/std.svg" height={29} width={142} />
        </div>
      </div>
      <div className="text-start justify-start mb-4 flex-grow border-b-2 ">
        <div className="text-black font-bold text-lg">{props.data.name}</div>
        <div className="text-black text-center mb-2 font-thin ">
          {props.data.about}
        </div>
      </div>
      <div className="mt-3 flex justify-between items-center space-x-20">
        {" "}
        <div className="text-black mb-2">{props.data.price}</div>
        <div className=" flex text-blue-500">
          <div className=" text-xs text-blue-500 text-center  cursor-pointer">
            See More{" "}
          </div>

          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

function FourthSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [dashIndex, setDashIndex] = useState(0);

  // Function to handle card click
  const handleCardClick = (index) => {
    setActiveCard(index);
    setDashIndex(0); // Reset dash index when a new card is selected
  };

  const dashWidth = [50, 60, 70, 80, 90];

  return (
    <div className="w-full py-16 min-h-screen overflow-hidden mx-auto bg-blue-200 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <Image src="fire.svg" height={96} width={96} />
          <div className="mt-8 text-6xl font-bold text-black">
            news and{" "}
            <span className="text-6xl font-bold text-blue-400">trending</span>
          </div>
        </div>
        <div className="flex max-w-screen-xl no-scrollbar  overflow-x-auto mt-8">
          {courses.map((course) => (
            <Card key={course.id} data={course} />
          ))}
        </div>
        <div className="dash-indicators">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`dash bg-blue-500 ${
                index === dashIndex ? "active" : ""
              }`}
              style={{ width: `${dashWidth[index]}px` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
