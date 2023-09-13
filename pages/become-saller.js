import React from "react";
import dynamic from "next/dynamic";
const BecomeSeller = dynamic(() => import("../src/components/BecomeSeller/index"), {ssr: false});

export default function BecomeSellerPage() {

  return <BecomeSeller />;
}
