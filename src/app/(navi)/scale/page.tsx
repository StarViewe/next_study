import React from "react";
import PageInfo from "@/components/pageInfo";
import scaleSrc from "../../../../public/photo-1570129477492-45c003edd2be.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
};
export default function Page() {
  return (
    <PageInfo imageSrc={scaleSrc} altText="scale" content="Scale"></PageInfo>
  );
}
