import React from 'react'
import AlbumDetails from '../Components/AlbumDetails'

export default function ShowAlbums() {
  return (
    <div class="flex flex-col items-center">
      <h2>Show details of this album</h2>
      <AlbumDetails />
    </div>
  );
}
