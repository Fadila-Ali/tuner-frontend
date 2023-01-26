import React from "react";
import ArtistDetails from "../Components/ArtistDetails";

export default function ShowArtists() {
  return (
    <div class="flex flex-col items-center">
      <h2>Show details of this Artist</h2>
      <ArtistDetails />
    </div>
  );
}
