import React from "react";
import SongDetails from "../Components/SongDetails";

export default function Show() {
  return (
    <div class="flex flex-col items-center w-full">
      <h2>Details of This song</h2>
      <SongDetails />
    </div>
  );
}
