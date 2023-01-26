import React from 'react'
import PlaylistDetails from '../Components/PlaylistDetails';

export default function ShowPlaylists() {
  return (
    <div class="flex flex-col items-center">
      <h2>Show details of this playlist</h2>
      <PlaylistDetails/>
    </div>
  );
}
