import React from "react";
import PageInfo from "@/components/pageInfo";
import performanceSrc from "../../../../public/istockphoto-1990444472-2048x2048.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
};

export default function Page() {
  return (
    <PageInfo
      imageSrc={performanceSrc}
      altText="performance"
      content="Performance"
    ></PageInfo>
  );
}
