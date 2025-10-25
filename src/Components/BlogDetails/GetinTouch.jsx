import React from "react";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const GetinTouch = () => {
  return (
    <div className="bg-[#213E89] text-white p-6">
      <HeadingInfo>Get In Touch</HeadingInfo>
      <div className="mt-4 text-sm space-y-2">
        <p>
          Need help?
          <br />
          (00) 1123 456 789
        </p>
        <p>
          Email
          <br />
          contact@transit.com
        </p>
      </div>
    </div>
  );
};
