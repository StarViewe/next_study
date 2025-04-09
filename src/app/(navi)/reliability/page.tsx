import React from "react";
import PageInfo from "@/components/pageInfo";
import reliabilitySrc from "../../../../public/photo-1480074568708-e7b720bb3f09.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
};
export default function Page() {
  return (
    <PageInfo
      imageSrc={reliabilitySrc}
      altText="reliability"
      content="Reliability"
    ></PageInfo>
  );
}
