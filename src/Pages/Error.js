import React from "react";
import FourOFour from "../utils/fourOFour.png";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Sorry, no page found</h1>
      <img src={FourOFour} alt="404 Error" className="w-1/3 h-96" />
    </div>
  );
}
