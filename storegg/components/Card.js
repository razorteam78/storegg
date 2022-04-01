import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="card group">
      <div className="w-[500px] h-[300px]">
        <Image
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-all duration-200"
          src={`${data.thumbnail}`}
        />
      </div>

      <div className="card-overlay">
        <div className="z-10 h-full flex justify-center items-center flex-col">
          <div className="group-hover:block hidden relative h-8 w-8">
            <Image
              layout="fill"
              objectFit="contain"
              className=" transition-all ease-in-out duration-75"
              src={"/assets/ic_play.png"}
            />
          </div>
          <p className="group-hover:mt-4 -mt-3">{data.title}</p>
          <p className="absolute bottom-2 left-4 font-thin text-sm">Mobile</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
