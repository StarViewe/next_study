import React from "react";
import PageInfo from "@/components/pageInfo";
import homeSrc from "../../../public/istockphoto-1158956809-2048x2048.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Page() {
  return <PageInfo imageSrc={homeSrc} altText="home" content="Home"></PageInfo>;
}
