import React from 'react'
import PlaylistNewForm from '../Components/PlaylistNewForm'

export default function NewPlaylist() {
  return (
    <div class="flex flex-col items-center">
      <h2>Add a new playlist</h2>
      <PlaylistNewForm />
    </div>
  );
}
