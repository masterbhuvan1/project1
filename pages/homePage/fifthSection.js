import React from "react";
import Image from "next/image";
const reviews = [
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: true,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image1.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image3.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image3.svg",
  },
];
function LevelShower() {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-4 h-4 mr-6 font-semibold">01</div>
        <div className=" w-48 h-0.5 mt-2 bg-white"></div>
        <div className="w-4 h-4 font-semibold ml-6">05</div>
      </div>
      <div className=" relative bottom-2 left-10 bg-blue-500 h-2 w-9"></div>
    </div>
  );
}
function FifthSection() {
  return (
    <div className="  bg-[#00364E] min-h-screen ">
      <div className=" flex justify-evenly items-center py-20 ">
        <div className=" flex flex-col">
          <div className=" text-6xl font-extrabold">inspring </div>
          <div className=" text-6xl font-extrabold">stories of our </div>
          <div className=" text-6xl font-extrabold text-yellow-300">
            toppers{" "}
          </div>
        </div>
        <Image src="./topper.svg" height={400} width={600} />
      </div>
      <div className=" px-36">
        <LevelShower />
      </div>
    </div>
  );
}
export default FifthSection;
