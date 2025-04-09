import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
  imageSrc: StaticImageData;
  altText: string;
  content: string;
}

export default function PageInfo(props: IProps) {
  return (
    <div className="reletive h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imageSrc}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altText}
        />
        <div className="absolute inset-0 from-gray-500 bg-gradient-to-r"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-6xl text-white">{props.content}</h1>
      </div>
    </div>
  );
}
